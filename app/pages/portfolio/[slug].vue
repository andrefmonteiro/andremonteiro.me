<script setup lang="ts">
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
		/>
	</div>
</template>
