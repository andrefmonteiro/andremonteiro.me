<template>
	<div class="mt-6 md:mt-0">
		<h1 class="hidden md:block uppercase mb-2 md:mb-20">
			<NuxtLink to="/">André Monteiro</NuxtLink>
		</h1>
		<!--
			- PageDetails (conditionally rendered)
			- MainContent
			-->
		<div class="md:pt-[calc(2.25rem+2rem+0.5rem)]">
			<!-- Logo height + space-y-8 + mb-2 -->
			<NuxtPage />
		</div>
	</div>
</template>
