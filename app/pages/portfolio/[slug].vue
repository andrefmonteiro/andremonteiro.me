<script setup lang="ts">
import { NuxtImg } from '#components'

const route = useRoute()
const slug = route.params.slug

const { data: project } = await useAsyncData(`portfolio-${slug}`, () => {
	return queryCollection('portfolio').path(`/portfolio/${slug}`).first()
})

if (!project.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Project not found',
	})
}

useSeoMeta({
	title: project.value.title,
	description: project.value.description,
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
	<div v-if="project">
		<header>
			<h1>{{ project.title }}</h1>
			<p class="text-text-secondary">
				{{ project.description }}
			</p>
		</header>
		<br>
		<ContentRenderer
			:value="project"
			:components="{ img: OptimizedImg }"
		/>
	</div>
</template>
