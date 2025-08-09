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

			<div class="flex gap-2 mt-6 mb-6">
				<span
					v-for="tool in project.tech_stack"
					:key="tool"
					class="px-2 py-1 bg-surface-muted text-text-secondary text-xs rounded-md flex gap-2"
				>
					<p>
						{{ tool }}
					</p>
				</span>
			</div>

			<div class="flex gap-4 text-accent-green ">
				<a
					:href="project.github_url"
					target="_blank"
					rel="noopener noreferrer"
					class="flex gap-2"
				>
					GitHub ↗
				</a>
				<p>|</p>
				<a
					:href="project.live_url"
					target="_blank"
					rel="noopener noreferrer"
					class="flex gap-2"
				>
					Live ↗
				</a>
			</div>
		</header>
		<ContentRenderer
			:value="project"
			class="body-content"
		/>
	</div>
</template>
