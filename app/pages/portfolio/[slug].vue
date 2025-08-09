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
		<header class="-mt-1 mb-8 border-b border-surface-muted">
			<h1 class="mb-2">
				{{ project.title }}
			</h1>
			<p class="text-text-secondary">
				{{ project.description }}
			</p>

			<div class="flex gap-4 mt-6 mb-8">
				<span
					v-for="tool in project.tech_stack"
					:key="tool"
					class="text-text-tertiary tooltip"
					:data-tooltip="tool"
				>
					<Icon
						:name="TECH_STACK_ICONS[tool as keyof typeof TECH_STACK_ICONS]!"
						size="18px"
					/>
				</span>
			</div>
			<div class="flex gap-4 text-accent-green">
				<a
					v-if="project.github_url"
					:href="project.github_url"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:brightness-150 transition text-sm"
				>
					View Code ↗
				</a>

				<p class="-mt-1">
					|
				</p>

				<a
					v-if="project.live_url"
					:href="project.live_url"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:brightness-150 transition text-sm"
				>
					Live Demo ↗
				</a>
			</div>
		</header>
		<ContentRenderer
			:value="project"
			class="body-content"
		/>
	</div>
</template>
