<script setup>
const props = defineProps({ title: String, date: String })
</script>

<template>
	<article class="flex flex-col md:flex-row justify-between md:gap-8 border-b-4 border-surface-muted last:border-b-0 pt-2 pb-2 first:pt-0">
		<h2 class="flex-1 text-xl font-medium text-text-heading transition hover:text-text-primary">
			{{ props.title }}
		</h2>

		<time
			class="text-text-secondary text-sm pt-1.5"
			:datetime="props.date"
		>
			{{ props.date }}
		</time>
	</article>
</template>
