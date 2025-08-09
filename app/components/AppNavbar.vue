<script setup lang="ts">
const currentRoute = useRoute()

const matchesRoute = (route: string): boolean => {
	if (route === '/') {
		return currentRoute.path === '/'
	}
	return currentRoute.path.startsWith(route)
}
</script>

<template>
	<nav class="flex flex-row md:flex-col items-start text-sm">
		<div class="flex flex-row space-x-6 md:flex-col md:space-x-0 md:space-y-[6px] md:-ml-2">
			<div
				class="flex flex-col-reverse md:flex-row items-center py-1"
				:class="matchesRoute('/')? 'text-accent-green' : ''"
			>
				<div
					class="w-1 h-1 mt-1 rounded-full md:mr-2 md:mt-0"
					:class="matchesRoute('/')? 'bg-accent-green' : 'opacity-0'"
				/>
				<NuxtLink
					to="/"
					class="transition hover:text-text-secondary"
				>
					About
				</NuxtLink>
			</div>
			<div
				class="flex flex-col-reverse md:flex-row items-center py-1"
				:class="matchesRoute('/blog')? 'text-accent-green' : ''"
			>
				<div
					class="w-1 h-1 mt-1 rounded-full md:mr-2 md:mt-0"
					:class="matchesRoute('/blog')? 'bg-accent-green' : 'opacity-0'"
				/>
				<NuxtLink
					to="/blog"
					class="transition hover:text-text-secondary"
				>
					Blog
				</NuxtLink>
			</div>
			<div
				class="flex flex-col-reverse md:flex-row items-center py-1"
				:class="matchesRoute('/portfolio')? 'text-accent-green' : ''"
			>
				<div
					class="w-1 h-1 mt-1 rounded-full md:mr-2 md:mt-0"
					:class="matchesRoute('/portfolio')? 'bg-accent-green' : 'opacity-0'"
				/>
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
