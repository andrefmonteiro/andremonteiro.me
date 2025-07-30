<script setup>
const route = useRoute()

const hasPageDetails = computed(() => {
	return route.path.startsWith('/blog/') || route.path.startsWith('/portfolio/')
})
</script>

<template>
	<div class="max-w-5xl mx-4 md:px-6 md:mx-auto mb-32 flex flex-col md:flex-row md:items-start gap-4 mt-6 md:mt-28">
		<div class="flex flex-col md:w-[200px] md:flex-shrink-0 md:gap-24 md:sticky md:top-28 md:self-start">
			<HeaderLogo class="mb-6 md:mb-0" />
			<HeaderName class="md:hidden mb-2 md:mb-0" />
			<AppNavbar />
		</div>

		<div class="flex flex-col gap-8 md:gap-26 md:flex-1 md:pt-1">
			<HeaderName class="hidden md:block" />
			<main>
				<PageDetails v-if="hasPageDetails" />
				<NuxtPage />
			</main>
			<AppFooter />
		</div>
	</div>
</template>
