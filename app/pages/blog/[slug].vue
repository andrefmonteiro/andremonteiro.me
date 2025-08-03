<script setup lang="ts">
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

<template>
	<div
		v-if="post"
	>
		<header>
			<h1>
				{{ post?.title }}
			</h1>
			<time :datetime="post?.date">
				{{ post?.date }}
			</time>
			<p class="text-text-secondary">
				{{ post?.description }}
			</p>
		</header>

		<ContentRenderer :value="post" />
	</div>
</template>
