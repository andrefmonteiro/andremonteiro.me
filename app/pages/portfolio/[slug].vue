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

const combinedKeywords = [
	...project.value.tech_stack,
	...project.value.tags,
].join(', ')

const optimizedKeywords = combinedKeywords.length > 160
	? combinedKeywords.substring(0, 160).split(',').slice(0, -1).join(',')
	: combinedKeywords

defineOgImageComponent('Pergel', {
	parentRoute: 'portfolio',
	title: project.value.title,
	description: project.value.description,
})

useSeoMeta({
	title: project.value.title,
	description: project.value.description,

	ogType: 'article',
	keywords: optimizedKeywords,
})
</script>

<template>
	<article v-if="project">
		<header class="-mt-1 mb-8 border-b-3 border-surface-muted pb-4">
			<h1 class="mb-2">
				{{ project.title }}
			</h1>
			<p class="text-text-secondary">
				{{ project.description }}
			</p>

			<div
				class="flex gap-4 mt-6 mb-4"
				role="list"
				aria-label="Technologies used"
			>
				<div
					v-for="tool in project.tech_stack"
					:key="tool"
					role="listitem"
					class="text-text-tertiary tooltip"
					:data-tooltip="tool"
					:aria-label="`Technology: ${tool}`"
				>
					<Icon
						:name="TECH_STACK_ICONS[tool as keyof typeof TECH_STACK_ICONS]!"
						size="18px"
						aria-hidden="true"
					/>
				</div>
			</div>

			<nav
				class="flex gap-4 text-accent-green"
				aria-label="Project links"
			>
				<a
					v-if="project.github_url"
					:href="project.github_url"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:brightness-125 transition text-sm flex flex-row gap-0.5"
				>
					Source Code <Icon
						name="ri:arrow-right-up-line"
						class="mt-1 "
					/>
				</a>

				<span
					class="-mt-1 font-extralight"
					aria-hidden="true"
				>|</span>

				<a
					v-if="project.live_url"
					:href="project.live_url"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:brightness-125 transition text-sm flex flex-row gap-0.5"
				>
					Live Demo <Icon
						name="ri:arrow-right-up-line"
						class="mt-1 "
					/>
				</a>
			</nav>
		</header>

		<ContentRenderer
			:value="project"
			class="body-content"
		/>
	</article>
</template>
