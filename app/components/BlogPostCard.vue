<script setup>
const props = defineProps({ title: String, date: String })
</script>

<template>
	<article class="flex flex-col md:flex-row justify-between md:gap-8">
		<h2 class="flex-1 text-xl font-semibold text-text-heading mb-3 mt-8 hover:text-text-secondary">
			{{ props.title }}
		</h2>

		<time
			class="text-text-tertiary text-sm -mt-1 md:pt-2 pb-3 md:pb-0"
			:datetime="props.date"
		>
			{{ props.date }}
		</time>
	</article>
</template>
