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

defineOgImageComponent('Pergel', {
	parentRoute: 'blog',
	title: post.value.title,
	description: post.value.description,
})

useSeoMeta({
	title: post.value.title,
	description: post.value.description,
	ogType: 'article',
	articlePublishedTime: post.value.date,
	articleTag: post.value.tags,
})
</script>

<template>
	<article v-if="post">
		<header class="-mt-1 border-b border-surface-muted pb-4 mb-8">
			<h1 class="mb-2">
				{{ post.title }}
			</h1>
			<time
				:datetime="post.date"
				class="text-sm text-text-tertiary block mb-4"
			>
				{{ post.date }}
			</time>
			<p class="text-text-secondary">
				{{ post.description }}
			</p>
		</header>

		<ContentRenderer
			:value="post"
			class="body-content"
		/>
	</article>
</template>
