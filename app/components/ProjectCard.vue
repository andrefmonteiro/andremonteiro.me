<script setup lang="ts">
const props = defineProps({
	title: String,
	description: String,
	techStack: Array as () => string[],
})
</script>

<template>
	<article
		class="border-3 rounded-xl border-surface-muted p-4 hover:bg-surface-muted transition"
		role="article"
		aria-labelledby="uniqueId"
	>
		<header>
			<h2
				:id="`project-${title?.toLowerCase().replace(/\s+/g, '-')}`"
				class="text-xl font-semibold text-text-heading mb-3 mt-8;"
			>
				{{ props.title }}
			</h2>
			<p class="text-text-secondary">
				{{ props.description }}
			</p>
			<div
				class="mt-6 flex gap-4"
				role="list"
				aria-label="Technologies used"
			>
				<div
					v-for="tool in techStack"
					:key="tool"
					role="listitem"
					class="text-text-secondary tooltip"
					:data-tooltip="tool"
					:aria-label="tool"
				>
					<Icon
						:name="TECH_STACK_ICONS[tool] || ''"
						size="18px"
						aria-hidden="true"
					/>
				</div>
			</div>
		</header>
	</article>
</template>
