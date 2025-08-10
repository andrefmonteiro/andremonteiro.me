<script setup>
import ProjectCard from '~/components/ProjectCard.vue'

const { data: projects } = await useAsyncData('portfolio', () => queryCollection('portfolio').all())

defineOgImageComponent('Pergel', {
	title: 'Portfolio',
	description: 'Projects born from need and wonder.',
})
</script>

<template>
	<section>
		<header class="sr-only">
			<h1>Portfolio Projects</h1>
		</header>
		<div class="-mt-1 flex flex-col gap-8">
			<NuxtLink
				v-for="project in projects"
				:key="project.title"
				:to="project.path"
			>
				<ProjectCard
					:title="project.title"
					:description="project.description"
					:tech-stack="project.tech_stack"
				/>
			</NuxtLink>
		</div>
	</section>
</template>
