<template>
	<aside class="md:w-[200px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
		<div class="lg:sticky lg:top-0">
			<div class="mb-2 px-4 md:px-0 md:mb-10 space-y-8 flex flex-col md:flex-row items-start ">
				<NuxtLink to="/">
					<span class="bg-accent-green text-white w-9 h-9 rounded-full flex items-center justify-center ">AM</span>
				</NuxtLink>
				<h1 class="md:hidden uppercase">
					<NuxtLink to="/">André Monteiro</NuxtLink>
				</h1>
			</div>

			<nav class="flex flex-row md:flex-col items-start relative md:top-[-7px] overflow-scroll px-4 md:px-0 pb-4 md:pb-0 fade md:overflow-auto scroll-pr-6 md:relative md:left-[-6px]">
				<div class="flex flex-row md:flex-col space-x-4 md:space-x-0 pr-10">
					<div class="flex flex-col-reverse md:flex-row text-sm py-1 items-center">
						<div class="md:relative rounded-full md:mr-2 md:left-[1px] w-[4px] h-[4px] mt-1 md:mt-0 transition-transform scale-125 bg-accent-green" />
						<NuxtLink
							to="/about"
							class="transition-opacity hover:opacity-60 no-underline"
						>About</NuxtLink>
					</div>
					<div class="flex flex-col-reverse md:flex-row text-sm py-1 items-center">
						<div class="md:relative rounded-full md:mr-2 md:left-[1px] w-[4px] h-[4px] mt-1 md:mt-0 transition-transform scale-125 bg-accent-green" />
						<NuxtLink
							to="/blog"
							class="transition-opacity hover:opacity-60 no-underline"
						>Blog</NuxtLink>
					</div>
					<div class="flex flex-col-reverse md:flex-row text-sm py-1 items-center">
						<div class="md:relative rounded-full md:mr-2 md:left-[1px] w-[4px] h-[4px] mt-1 md:mt-0 transition-transform scale-125 bg-accent-green" />
						<NuxtLink
							to="/portfolio"
							class="transition-opacity hover:opacity-60 no-underline"
						>Portfolio</NuxtLink>
					</div>
				</div>
			</nav>
		</div>
	</aside>
</template>
