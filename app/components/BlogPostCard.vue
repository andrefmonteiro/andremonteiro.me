<script setup>
const props = defineProps({ title: String, date: String })
</script>

<template>
	<article class="flex flex-col md:flex-row justify-between md:gap-8">
		<h2 class="flex-1 transition hover:text-text-primary">
			{{ props.title }}
		</h2>

		<time
			class="text-text-secondary text-sm pt-2"
			:datetime="props.date"
		>
			{{ props.date }}
		</time>
	</article>
</template>
