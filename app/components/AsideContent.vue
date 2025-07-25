<template>
	<aside class="md:w-[200px] md:flex-shrink-0 md:mx-0 md:px-0">
		<div class="lg:sticky lg:top-0">
			<span class="bg-blue-500 text-white w-9 h-9 rounded-full flex items-center justify-center">AM</span>
			<NuxtLink
				to="/"
				class="md:hidden"
			>André Monteiro</NuxtLink>
			<nav class="flex flex-row md:flex-col text-sm space-x-4 md:space-x-0 md:space-y-4">
				<NuxtLink
					to="/about"
					class="hover:opacity-60 py-1"
				>About</NuxtLink>
				<NuxtLink
					to="/blog"
					class="hover:opacity-60 py-1"
				>Blog</NuxtLink>
				<NuxtLink
					to="/portfolio"
					class="hover:opacity-60 py-1"
				>Portfolio</NuxtLink>
			</nav>
		</div>
	</aside>
</template>
