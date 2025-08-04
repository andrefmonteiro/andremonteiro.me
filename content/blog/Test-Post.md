---
title: About Parsing
date: August 4, 2025
description: On how learning about parsing can make your compilation process more effective.

---
Parsing is the next step in the compilation pipeline following tokenization. Parsing is responsible for constructing an abstract syntax tree from a stream of tokens. I’ve previously written about how Zig converts a stream of bytes (source) into a stream of tokens.

The Zig parser is located at `lib/std/zig/parser.zig` in the Zig source tree. It is available as part of the standard library via std.zig.parse(). The parser takes full source text and returns an std.zig.Ast (defined in lib/std/zig/Ast.zig).

## MultiArrayList

From parsing onwards, the Zig compiler uses MultiArrayList structures heavily. You must understand the MultiArrayList in order to understand how the parser works as well as the structure of the created AST.

Before explaining a MultiArrayList, I’ll give a very brief overview of a normal ArrayList (no “Multi”). An ArrayList is a dynamic length array of values. When the array is full, a new larger array is allocated, and existing items are copied into the new array. This is a typical, dynamically allocated, growing (or shrinking) list of items.

For example, consider the JS structure below:
``` typescript
const hello = "hello"
```

Each Tree requires 8 bytes of memory. An array of four trees is 32 bytes of memory.

Why 8 bytes? A u32 requires 4 bytes. A bool only requires 1 byte but since it is in a struct with a u32, it must be 4-byte aligned, so it also takes up 4 bytes (3 bytes wasted). The total is 8 bytes.

A MultiArrayList is similarly a dynamically allocated list of items. However, each field of the type stored in the array list is stored in a separate contiguous array. This has two primary benefits: (1) less wasted bytes due to alignment and (2) better cache locality. Both of these benefits often result in better performance.

Each field for the struct is stored in a separate contiguous array. An array of four trees uses 20 bytes, or 37.5% less memory. This ignores the overhead of the multiple array pointers, but that overhead is fixed so as the number of items in the list grows, it amortizes to a total of 37.5% less memory required for this example.

Why 20 bytes? Since the struct is deconstructed, the age field requires 4 bytes, and our example uses 4 trees, hence 16 bytes. The alive field no longer needs to be 4-byte aligned since it isn’t part of a struct anymore, so it only requires 1 byte (no wasted bytes!). Our example uses 4 trees, hence 4 bytes for alive. This sums to 20 bytes total for both fields.

This page will not dive into how MultiArrayList is implemented. For the purpose of understanding the Zig compiler, it is only important to know that almost every structure (tokens, AST nodes, future IR nodes, etc.) is stored as a MultiArrayList. Compiling a real world program usually generates tens of thousands of “nodes” so this results in huge memory savings and improvements in cache locality.

Anatomy of the Parser
The parser uses a struct called Parser to store in-progress parsing state. This is not a publicly exported struct and is only used to manage internal state of the parse operation. Callers are returned an Ast as a result of a parsing operation, which is explored later in this page.

The structure of the parser at the time of writing is shown below. I’ve inserted newlines to separate the state into functional groups.

const Parser = struct {
    gpa: Allocator,
    source: []const u8,

    token_tags: []const Token.Tag,
    token_starts: []const Ast.ByteOffset,
    tok_i: TokenIndex,

    errors: std.ArrayListUnmanaged(AstError),
    nodes: Ast.NodeList,
    extra_data: std.ArrayListUnmanaged(Node.Index),
    scratch: std.ArrayListUnmanaged(Node.Index),
};
The first group contains gpa and source. This is the allocator and full original source code of a single Zig file.

In the second group, token_tags and token_starts are the deconstructed results of tokenization. As noted earlier, the parser applies data-oriented design for better memory usage and cache locality. Therefore, token_tags.len == token_starts.len, they’re just the struct fields placed into separate contiguous chunks of memory. The tok_i value is the index to the current token that the parser is looking at (starting at 0).

The third group is the real working state of the parser. This where results that will be part of the Ast are accumulated. This third group is very important since it is the core of what the parser is building.

errors is the list of errors as the parser progresses. Most well-behaved parsers attempt to continue parsing in various error scenarios and Zig’s parser is no different. The Zig parser will accumulate errors in this field and attempt to continue parsing.
nodes is the list of AST nodes. This starts empty and is slowly built up as the parser continues. Understanding the structure of an AST node is extremely important and is covered in the next section.
extra_data is a list of additional information that an AST node may need. For example, for a struct, extra_data contains the full list of all the struct members. This is again an example of data-oriented design; an alternate approach would be to put the extra data directly on a Node, but this makes the overall parser slower since it forces each Node to be much larger.
scratch is temporary work space shared by the parser, usually to build up information for nodes or extra data. This is deallocated once the parser is done working.
Anatomy of an AST Node
The result of a parse is a list of AST nodes. Note that the AST itself is still a tree, but the result returned by the parser contains the list of the nodes in the tree since that is how a tree is represented in-memory.

The AST node structures can be confusing because there is a lot of indirection on top of the data itself being stored in a MultiArrayList. I recommend re-reading this section repeatedly to ensure you understand the structure of an AST node. While learning the internals of the Zig compiler, a lack of a complete understanding of this data pattern caused a lot of issues, because this pattern is reused in every subsequent stage of the compiler.

The AST structures can be found in lib/std/zig/Ast.zig. The primary structure is Node:

pub const Node = struct {
    tag: Tag,
    main_token: TokenIndex,
    data: Data,

    pub const Data = struct {
        lhs: Index,
        rhs: Index,
    };

    pub const Index = u32;
};
Note that the parser itself stores nodes in a NodeList, which is a MultiArrayList(Node), meaning it is the Node structure with each field stored in a separate contiguous block of memory. Conceptually, you can think of nodes as single structs as shown above, but concretely, the fields are split when used.

The node tag is an enum of possible AST node types. For example, fn_decl for a function declaration, integer_literal for a literal integer, builtin_call for calling a builtin such as @enumToInt.

The main_token field isn’t extremely important to understand right now. It is the main token associated with the AST node. For example for a function declaration it might be fn. The value is an index into the list of tokens used to build the AST.

The data field is extremely important. This contains the information associated with an AST node. For example, a function declaration (.tag == .fn_decl) uses data to store the function prototype along with the function body. The data field is covered in detail in the next section.

AST Node Data
A key part of any AST node is data associated with it. For example, a function declaration has a function name, a parameter list, a return type, body, etc. Looking at the Node structure, it isn’t immediately clear where this information might be.

This is an extremely important detail to understand before we can dive into how the parser works. And for those who want to know how the entire compiler pipeline works, this is a particularly critical detail since the AST uses a pattern that is reused throughout the compilation pipeline for other intermediary forms.

Let’s look at how the AST for a function declaration would be structured for the given Zig code:

fn add(a: u8, b: u8) callconv(.C) u8 {
	return a + b;
}
