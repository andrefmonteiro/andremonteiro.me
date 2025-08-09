<script setup lang="ts">
const props = defineProps({
	title: String,
	description: String,
	techStack: Array as () => string[],
})
</script>

<template>
	<article class="border-2 rounded-xl border-surface-muted p-4">
		<header>
			<h2 class="text-xl font-semibold text-text-heading mb-3 mt-8;">
				{{ props.title }}
			</h2>
			<p class="text-text-secondary">
				{{ props.description }}
			</p>
			<div
				class="mt-6 flex gap-4"
				aria-label="Technologies used"
			>
				<span
					v-for="tool in techStack"
					:key="tool"
					class="text-text-tertiary tooltip"
					:title="tool"
					:data-tooltip="tool"
					:aria-label="tool"
				>
					<Icon
						:name="TECH_STACK_ICONS[tool] || ''"
						size="18px"
						aria-hidden="true"
					/>
				</span>
			</div>
		</header>
	</article>
</template>
