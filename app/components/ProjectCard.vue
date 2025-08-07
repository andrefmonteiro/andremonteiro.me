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
		<div class="flex gap-5">
			<div
				v-for="tool in techStack"
				:key="tool"
				class="tech-icon"
			>
				<Icon
					:name="TECH_STACK_ICONS[tool as keyof typeof TECH_STACK_ICONS]!"
					size="18px"
					class=""
				/>
			</div>
		</div>
	</div>
</template>

<style>
.tech-icon {
  filter: grayscale(100%);
  transition: filter 150ms ease;
}

.tech-icon:hover {
  filter: none;
}
</style>
