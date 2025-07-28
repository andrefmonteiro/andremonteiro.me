<script setup>
const route = useRoute()

const hasPageDetails = computed(() => {
	return route.path.startsWith('/blog/') || route.path.startsWith('/portfolio/')
})
</script>

<template>
	<div class="max-w-5xl mx-4 md:px-6 md:mx-auto">
		<div class="layout-container">
			<HeaderLogo class="header-logo md:pt-1 md:sticky md:top-28" />
			<HeaderName class="header-name" />
			<AppNavbar class="app-navbar md:sticky md:top-64 md:-ml-3" />
			<div class="main-content">
				<PageDetails v-if="hasPageDetails" />
				<NuxtPage />
			</div>
		</div>
		<AppFooter />
	</div>
</template>
