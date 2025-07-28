<script setup>
const route = useRoute()

const hasPageDetails = computed(() => {
	return route.path.startsWith('/blog/') || route.path.startsWith('/portfolio/')
})
</script>

<template>
	<div class="max-w-5xl mx-4 md:px-6 md:mx-auto">
		<div class="layout-container">
			<HeaderLogo class="header-logo mb-8 md:pt-1 md:sticky md:top-28" />
			<HeaderName class="header-name mb-4" />
			<AppNavbar class="app-navbar md:sticky md:top-64 md:-ml-3 mb-8" />
			<main class="main-content">
				<PageDetails v-if="hasPageDetails" />
				<NuxtPage />
			</main>
		</div>
		<AppFooter />
	</div>
</template>
