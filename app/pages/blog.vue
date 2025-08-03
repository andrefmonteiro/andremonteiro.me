<script setup lang="ts">
import BlogPostCard from '../components/BlogPostCard.vue'

const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())

console.log('Blog posts:\n', posts)
</script>

<template>
	<div>
		Blog
		<NuxtLink
			v-for="post in posts"
			:key="post.path"
			:to="post.path"
		>
			<BlogPostCard
				:title="post.title"
				:date="post.date"
			/>
		</NuxtLink>
	</div>
</template>
