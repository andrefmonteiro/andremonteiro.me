<script setup>
const route = useRoute()

const hasPageDetails = computed(() => {
	return route.path.startsWith('/blog/') || route.path.startsWith('/portfolio/')
})
</script>

<template>
	<div class="max-w-5xl mx-4 md:px-6 md:mx-auto">
		<div class="flex flex-col gap-8 mt-8 mb-40 md:flex-row md:mt-28 md:items-start">
			<div class="flex flex-col gap-8 md:w-[200px] md:flex-shrink-0 md:gap-24 md:sticky md:top-0 md:self-start">
				<HeaderLogo class="logo" />
				<HeaderName class="md:hidden" />
				<AppNavbar class="navbar" />
			</div>

			<div class="flex flex-col gap-8 md:flex-1 md:gap-0">
				<HeaderName class="hidden md:block md:mb-24" />

				<main class="content">
					<PageDetails v-if="hasPageDetails" />
					<NuxtPage />
				</main>
			</div>
		</div>
		<AppFooter />
	</div>
</template>
