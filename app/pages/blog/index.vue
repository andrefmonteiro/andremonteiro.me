<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())

console.log('Post structure after schema:', posts.value?.[0])
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
