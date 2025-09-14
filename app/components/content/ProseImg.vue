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
			class="max-w-full h-auto mx-auto rounded-sm cursor-zoom-in hover:brightness-150 transition"
			@click="toggleEnlarge"
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
		class="mb-6 max-w-full h-auto mx-auto block rounded-lg cursor-zoom-in hover:brightness-150 transition"
		@click="toggleEnlarge"
	/>

	<Teleport to="body">
		<div
			v-if="isEnlarged"
			class="fixed inset-0 bg-surface-default z-50 flex items-center justify-center p-4"
			@click="toggleEnlarge"
		>
			<div class="relative max-w-full max-h-full">
				<button
					class="absolute top-2 right-4 text-white text-2xl cursor-pointer hover:text-text-secondary"
					aria-label="Close enlarged image"
					@clic.stop="toggleEnlarge"
				>
					×
				</button>
				<NuxtImg
					:src="src"
					:alt="alt"
					class="max-w-full max-h-full object-contain rounded-lg"
					@click.stop
				/>
				<p
					v-if="title"
					class="text-white text-center mt-2 text-sm"
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
