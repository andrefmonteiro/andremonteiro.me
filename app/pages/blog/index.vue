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

const toggleSort = () => sortAscending.value = !sortAscending.value
</script>

<template>
	<div class="flex flex-col">
		<button
			class="self-end"
			@click="toggleSort"
		>
			<Icon
				name="grommet-icons:unsorted"
				size="32px"
			/>
		</button>
		<div>
			<NuxtLink
				v-for="post in sortedPosts"
				:key="post.path"
				:to="post.path"
			>
				<BlogPostCard
					:title="post.title"
					:date="post.date"
				/>
			</NuxtLink>
		</div>
	</div>
</template>
