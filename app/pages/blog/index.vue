<script setup>
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())

const sortAscending = ref(false)

const sortedPosts = computed(() => {
	if (!posts.value) return []

	return [...posts.value].sort((a, b) => {
		if (sortAscending.value) {
			return a.date.localeCompare(b.date)
		}
		else {
			return b.date.localeCompare(a.date)
		}
	})
})
</script>

<template>
	<section>
		<header class="sr-only">
			<h1>Blog Posts</h1>
		</header>

		<div
			class="-mt-1"
			role="feed"
			aria-label="Blog posts list"
		>
			<NuxtLink
				v-for="post in sortedPosts"
				:key="post.path"
				:to="post.path"
				class="block border-b border-surface-muted pt-3 last:border-b-0 first:pt-0"
				:aria-label="`Read full post: ${post.title}`"
			>
				<BlogPostCard
					:title="post.title"
					:date="post.date"
				/>
			</NuxtLink>
		</div>
	</section>
</template>
