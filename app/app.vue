<template>
	<div class="min-h-screen px-6 md:px-8 mb-32 mt-6 md:mt-28">
		<a
			href="#main-content"
			class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-surface-muted text-accent-green focus:px-3 focus:py-2 focus:rounded focus:underline"
		>
			Skip to main content
		</a>

		<div class="max-w-[66ch] flex flex-col md:hidden gap-6">
			<HeaderLogo />
			<HeaderName />
			<AppNavbar class="mb-4" />
			<main
				id="main-content"
				class="mb-16"
			>
				<NuxtPage />
			</main>
			<AppFooter />
		</div>

		<div class="hidden md:flex max-w-5xl mx-auto items-start gap-10">
			<aside class="sticky top-28 w-[175px] flex-shrink-0 flex flex-col gap-20">
				<HeaderLogo />
				<AppNavbar />
			</aside>

			<div class="max-w-[66ch] flex-1 min-w-0">
				<div class="flex flex-col pt-1">
					<HeaderName class="mb-8 md:mb-21" />
					<main
						id="main-content"
						class="md:mb-32"
					>
						<NuxtPage />
					</main>
					<AppFooter />
				</div>
			</div>

			<div class="w-[175px] flex-shrink-0" />
		</div>
	</div>
</template>
