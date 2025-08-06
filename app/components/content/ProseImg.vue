<script setup lang="ts">
const props = defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		default: null,
	},
	width: {
		type: [String, Number],
		default: undefined,
	},
	height: {
		type: [String, Number],
		default: undefined,
	},
})
</script>

<template>
	<figure
		v-if="title"
		class="mb-6"
	>
		<NuxtImg
			:src="props.src"
			:alt="props.alt"
			:width="props.width"
			:height="props.height"
			preset="default"
			loading="lazy"
			class="max-w-full h-auto mx-auto rounded-sm"
		/>
		<figcaption class="text-sm text-text-tertiary text-center pt-1">
			{{ title }}
		</figcaption>
	</figure>

	<NuxtImg
		v-else
		:src="src"
		:alt="alt"
		:width="width"
		:height="height"
		preset="default"
		loading="lazy"
		class="mb-6 max-w-full h-auto mx-auto block rounded-lg"
	/>
</template>
