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
		<header class="-mt-1 border-b border-surface-muted pb-4">
			<h1 class="mb-2">
				{{ project.title }}
			</h1>
			<p class="text-text-secondary">
				{{ project.description }}
			</p>
			<div class="flex gap-5">
				<div
					v-for="tool in project.tech_stack"
					:key="tool"
					:title="tool"
				>
					<Icon
						:name="TECH_STACK_ICONS[tool as keyof typeof TECH_STACK_ICONS]!"
						size="18px"
						class="grayscale-50"
					/>
				</div>
			</div>
		</header>
		<br>
		<ContentRenderer
			:value="project"
		/>
	</div>
</template>
