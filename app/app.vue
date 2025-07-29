<script setup>
const route = useRoute()

const hasPageDetails = computed(() => {
	return route.path.startsWith('/blog/') || route.path.startsWith('/portfolio/')
})
</script>

<template>
	<div class="max-w-5xl mx-4 md:px-6 md:mx-auto">
		<div class="flex flex-col gap-8 mt-6 mb-40 md:flex-row md:mt-28 md:items-start">
			<div class="flex flex-col md:w-[200px] md:flex-shrink-0 md:gap-24 md:sticky md:top-0 md:self-start">
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
			</div>
		</div>
		<AppFooter />
	</div>
</template>
