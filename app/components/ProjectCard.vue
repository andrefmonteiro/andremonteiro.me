<script setup lang="ts">
const props = defineProps({
	title: String,
	description: String,
	techStack: Array as () => string[],
})
</script>

<template>
	<div class="border rounded-xl border-surface-muted p-4 group">
		<h2>{{ props.title }}</h2>
		<p class="text-text-secondary">
			{{ props.description }}
		</p>
		<div class="mt-8 flex gap-5">
			<div
				v-for="tool in techStack"
				:key="tool"
				class="text-text-tertiary tooltip"
				:title="tool"
				:data-tooltip="tool"
			>
				<Icon
					:name="TECH_STACK_ICONS[tool] || ''"
					size="18px"
				/>
			</div>
		</div>
	</div>
</template>
