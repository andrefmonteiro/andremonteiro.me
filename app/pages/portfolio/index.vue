<script setup>
import ProjectCard from '~/components/ProjectCard.vue'

const { data: projects } = await useAsyncData('portfolio', () => queryCollection('portfolio').all())
</script>

<template>
	<div>
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
</template>
