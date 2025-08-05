<script setup>
const props = defineProps({
	title: String,
	description: String,
	techStack: Array<string>,
	liveUrl = String,
	githubUrl = String,
})
</script>

<template>
	<div class="border border-surface-muted">
		<h2>{{ props.title }}</h2>
		<p>{{ props.description }}</p>
		<div>
			<div :v-for="tool in techStack">
				{{ tool }}
			</div>
		</div>
	</div>
</template>
