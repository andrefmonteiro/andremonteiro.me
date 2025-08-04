---
title: Second post
date: 1996-01-03
description: A piece of writing about experience.
---
Some code:
``` typescript
<script setup>
const route = useRoute()
const slug = route.params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
	return queryCollection('blog').path(`/blog/${slug}`).first()
})

if (!post.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Blog post not found',
	})
}

useSeoMeta({
	title: post.value.title,
	description: post.value.description,
})
</script>
```
---
More code:

`undefined`

No line break
between these two


A line break\
between **these** two