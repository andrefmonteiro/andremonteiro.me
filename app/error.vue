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
		<h1 class="text-5xl font-bold text-text-heading mb-6">
			Error {{ error?.statusCode }}
		</h1>

		<p
			v-if="error?.statusCode === 404"
			class="text-center md:text-xl mb-8 leading-relaxed"
		>
			You're trying to reach an obscure corner of the Internet.<br>
			We don't blame you.
		</p>
		<p
			v-else
			class="text-center md:text-xl mb-8 leading-relaxed"
		>
			Something unusual happened.<br>
			Let's try again.
		</p>

		<button
			class="px-6 py-3 font-semibold bg-accent-green text-surface-default rounded-lg hover:brightness-125 transition flex gap-2 cursor-pointer"
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
