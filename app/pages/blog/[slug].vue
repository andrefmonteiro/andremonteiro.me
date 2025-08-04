<script setup lang="ts">
import { NuxtImg } from '#components'

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

const OptimizedImg = defineComponent({
	props: {
		src: String,
		alt: String,
		title: String,
	},
	setup(props) {
		if (props.title) {
			return () => h('figure', { class: 'mb-6 text-center' }, [
				h(NuxtImg, {
					src: props.src,
					alt: props.alt,
					preset: 'default',
					loading: 'lazy',
					class: 'max-w-full h-auto mx-auto',
				}),
				h('figcaption', {
					class: 'text-sm text-text-secondary pt-2',
				}, props.title),
			])
		}

		return () => h(NuxtImg, {
			src: props.src,
			alt: props.alt,
			preset: 'default',
			loading: 'lazy',
			class: 'mb-4 max-w-full h-auto mx-auto block',
		})
	},
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

		<ContentRenderer
			:value="post"
			:components="{ img: OptimizedImg }"
		/>
	</div>
</template>
