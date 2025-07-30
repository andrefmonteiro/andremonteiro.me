<script setup lang="ts">
import BlogPostCard from '../components/BlogPostCard.vue'
</script>

<template>
	<div>
		<!-- these props will be parsed from each blog post yaml frontmatter -->
		<BlogPostCard
			title="The case for learning functional programming The case for learning functional programming  The case for learning functional programming  The case for learning functional programming "
			date="July 30, 2025"
		/>
		<BlogPostCard
			title="Why you should try guatemalan coffee"
			date="July 30, 2025"
		/>
	</div>
</template>
