<template>
	<nav class="flex flex-row md:flex-col items-start text-sm">
		<div class="flex flex-row space-x-6 md:flex-col md:space-x-0 md:space-y-2 md:-ml-2">
			<div class="flex flex-col-reverse md:flex-row items-center py-1 text-accent-green">
				<div class="w-1 h-1 mt-1 rounded-full md:mr-2 md:mt-0 bg-accent-green" />
				<NuxtLink
					to="/"
					class="transition hover:text-text-secondary"
				>
					About
				</NuxtLink>
			</div>
			<div class="flex flex-col-reverse md:flex-row items-center py-1">
				<div class="w-1 h-1 mt-1 rounded-full md:mr-2 md:mt-0 bg-accent-green" />
				<NuxtLink
					to="/blog"
					class="transition hover:text-text-secondary"
				>
					Blog
				</NuxtLink>
			</div>
			<div class="flex flex-col-reverse md:flex-row items-center py-1">
				<div class="w-1 h-1 mt-1 rounded-full md:mr-2 md:mt-0 bg-accent-green" />
				<NuxtLink
					to="/portfolio"
					class="transition hover:text-text-secondary"
				>
					Portfolio
				</NuxtLink>
			</div>
		</div>
	</nav>
</template>
