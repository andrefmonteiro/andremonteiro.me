<script setup lang="ts">
defineProps({
	error: Object,
})

useSeoMeta({
	title: '404 - Page Not Found',
})

const handleError = async (route: string) => {
	await clearError({ redirect: route })
}
</script>

<template>
	<div class="max-w-5xl px-6 min-h-screen mx-auto -mt-16 flex flex-col items-center justify-center">
		<h1 class="text-6xl font-bold text-text-heading mb-6">
			{{ error?.statusCode }}
		</h1>

		<h2
			v-if="error?.statusCode === 404"
			class="text-center text-xl md:text-2xl mb-8 leading-relaxed"
		>
			You're trying to reach an obscure corner of the Internet.<br>
			We don't blame you.
		</h2>
		<h2
			v-else
			class="text-center text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed"
		>
			{{ error?.statusMessage }}
		</h2>

		<button
			class="px-6 py-3 font-semibold bg-accent-green text-surface-default rounded-lg hover:brightness-150 transition flex gap-2 cursor-pointer"
			@click="handleError('/')"
		>
			<Icon
				name="ri:home-4-line"
				class="mt-1"
			/>
			<p class="flex">
				Go Home
			</p>
		</button>
	</div>
</template>
