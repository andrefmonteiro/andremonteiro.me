<script setup lang="ts">
useSeoMeta({
	title: 'André Monteiro',
	ogTitle: 'André Monteiro',
	description: 'André Monteiro\'s personal website, portfolio and blog',
	ogDescription: 'André Monteiro\'s personal website, portfolio and blog',
})
</script>

<template>
	<div class="max-w-4xl mx-4 md:px-6 md:ml-[14vw] md:mr-auto mb-32 flex flex-col md:flex-row md:items-start gap-10 mt-6 md:mt-28">
		<a
			href="#main-content"
			class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-surface-muted text-accent-green focus:px-3 focus:py-2 focus:rounded focus:underline"
		>
			Skip to main content
		</a>
		<aside class="flex flex-col md:w-[175px] md:flex-shrink-0 md:gap-24 md:sticky md:top-28 md:self-start">
			<HeaderLogo class="mb-8 md:mb-0" />
			<HeaderName class="md:hidden mb-3 md:mb-0" />
			<AppNavbar />
		</aside>

		<div class="flex flex-col md:flex-1 md:pt-1">
			<HeaderName class="hidden md:block mb-8 md:mb-25" />
			<main
				id="main-content"
				class="mb-16 md:mb-28"
			>
				<NuxtPage />
			</main>
			<AppFooter />
		</div>
	</div>
</template>
