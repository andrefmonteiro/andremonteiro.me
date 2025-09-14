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

const isEnlarged = ref(false)

const toggleEnlarge = () => {
	isEnlarged.value = !isEnlarged.value
}

const handleKeydown = (e: KeyboardEvent) => {
	if (e.key === 'Escape') {
		isEnlarged.value = false
	}
}

onMounted(() => {
	document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
	document.removeEventListener('keydown', handleKeydown)
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
			class="w-full mt-6 h-auto mx-auto rounded-sm cursor-zoom-in hover:opacity-70 transition"
			@click="toggleEnlarge"
		/>
		<figcaption class="text-sm text-text-tertiary text-center pt-2">
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
		class="mb-6 w-full mt-8 h-auto mx-auto block rounded-lg cursor-zoom-in hover:opacity-70 transition"
		@click="toggleEnlarge"
	/>

	<Teleport to="body">
		<div
			v-if="isEnlarged"
			class="fixed inset-0 bg-surface-default z-50 flex items-center justify-center p-4"
			@click="toggleEnlarge"
		>
			<button
				class="absolute top-4 right-4 bg-surface-muted z-10 w-8 h-8 flex items-center justify-center text-white text-2xl cursor-pointer hover:text-text-secondary rounded"
				aria-label="Close enlarged image"
				@click.stop="toggleEnlarge"
			>
				×
			</button>
			<div class="relative flex flex-col max-w-full max-h-full">
				<img
					:src="src"
					:alt="alt"
					class="max-w-full max-h-[90vh] object-contain rounded-lg"
					preset="default"
					@click.stop
				>
				<p
					v-if="title"
					class="text-text-tertiary text-center mt-2 text-sm"
				>
					{{ title }}
				</p>
			</div>
		</div>
	</Teleport>
</template>

<style scoped>
/* Prevent body scroll when modal is open */
body:has(.fixed.inset-0) {
	overflow: hidden;
}
</style>
