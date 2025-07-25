<template>
	<aside class="md:w-[200px] md:flex-shrink-0">
		<div class="lg:sticky lg:top-0">
			<div class="flex flex-col items-start mb-2 space-y-8 md:mb-10 md:flex-row ">
				<NuxtLink to="/">
					<span class="flex items-center justify-center text-white rounded-full bg-accent-green w-9 h-9 ">AM</span>
				</NuxtLink>
				<h1 class="uppercase md:hidden">
					<NuxtLink to="/">André Monteiro</NuxtLink>
				</h1>
			</div>

			<nav class="flex flex-row md:flex-col items-start relative md:top-[-7px] md:px-0 pb-4 md:pb-0 md:relative md:left-[-6px]">
				<div class="flex flex-row pr-10 space-x-4 md:flex-col md:space-x-0">
					<div class="flex flex-col-reverse items-center py-1 text-sm md:flex-row">
						<div class="md:relative rounded-full md:mr-2 md:left-[1px] w-[4px] h-[4px] mt-1 md:mt-0 transition-transform scale-125 bg-accent-green" />
						<NuxtLink
							to="/"
							class="no-underline transition-opacity hover:opacity-60"
						>About</NuxtLink>
					</div>
					<div class="flex flex-col-reverse items-center py-1 text-sm md:flex-row">
						<div class="md:relative rounded-full md:mr-2 md:left-[1px] w-[4px] h-[4px] mt-1 md:mt-0 transition-transform scale-125 bg-accent-green" />
						<NuxtLink
							to="/blog"
							class="no-underline transition-opacity hover:opacity-60"
						>Blog</NuxtLink>
					</div>
					<div class="flex flex-col-reverse items-center py-1 text-sm md:flex-row">
						<div class="md:relative rounded-full md:mr-2 md:left-[1px] w-[4px] h-[4px] mt-1 md:mt-0 transition-transform scale-125 bg-accent-green" />
						<NuxtLink
							to="/portfolio"
							class="no-underline transition-opacity hover:opacity-60"
						>Portfolio</NuxtLink>
					</div>
				</div>
			</nav>
		</div>
	</aside>
</template>
