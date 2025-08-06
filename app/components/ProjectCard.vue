<script setup lang="ts">
const props = defineProps({
	title: String,
	description: String,
	techStack: Array as () => string[],
	liveUrl: String,
	githubUrl: String,
})
</script>

<template>
	<div class="border rounded-xl border-surface-muted p-4">
		<h2>{{ props.title }}</h2>
		<p class="text-text-secondary">
			{{ props.description }}
		</p>
		<div class="flex">
			<div
				v-for="tool in techStack"
				:key="tool"
			>
				<Icon
					:name="TECH_STACK_ICONS[tool as keyof typeof TECH_STACK_ICONS]!"
					size="18px"
				/>
			</div>
		</div>
	</div>
</template>
