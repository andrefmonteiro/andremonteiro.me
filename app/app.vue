<script setup lang="ts">
</script>

<template>
	<div class="max-w-4xl mx-4 md:px-6 md:ml-[14vw] md:mr-auto mb-32 flex flex-col md:flex-row md:items-start gap-10 mt-6 md:mt-28">
		<div class="flex flex-col md:w-[175px] md:flex-shrink-0 md:gap-24 md:sticky md:top-28 md:self-start">
			<HeaderLogo class="mb-8 md:mb-0" />
			<HeaderName class="md:hidden mb-3 md:mb-0" />
			<AppNavbar />
		</div>

		<div class="flex flex-col md:flex-1 md:pt-1">
			<HeaderName class="hidden md:block mb-8 md:mb-25" />
			<main class="mb-16 md:mb-28">
				<NuxtPage />
			</main>
			<AppFooter />
		</div>
	</div>
</template>
