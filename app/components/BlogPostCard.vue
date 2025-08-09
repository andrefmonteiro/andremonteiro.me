<script setup>
const props = defineProps({ title: String, date: String })
</script>

<template>
	<article class="flex flex-col md:flex-row justify-between md:gap-8">
		<h2 class="flex-1">
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
