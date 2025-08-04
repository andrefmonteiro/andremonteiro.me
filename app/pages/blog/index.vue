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

// const toggleSort = () => sortAscending.value = !sortAscending.value
</script>

<template>
	<div>
		<NuxtLink
			v-for="post in sortedPosts"
			:key="post.path"
			:to="post.path"
			class="block border-b border-surface-muted last:border-b-0 first:pt-0"
		>
			<BlogPostCard
				:title="post.title"
				:date="post.date"
			/>
		</NuxtLink>
	</div>
</template>
