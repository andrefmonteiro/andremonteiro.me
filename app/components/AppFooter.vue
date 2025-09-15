<script setup>
const currYear = new Date().getFullYear()
</script>

<template>
	<footer class="flex justify-between text-text-secondary text-sm md:flex-1">
		<p>© {{ currYear }} André Monteiro.</p>

		<ul
			class="flex gap-x-4 list-none"
			aria-label="Contact links"
		>
			<li>
				<a
					href="mailto:andrefmonteiro@outlook.com"
					aria-label="Email"
				>

					<Icon
						name="grommet-icons:mail"
						size="18px"
						class="transition hover:text-text-secondary"
						aria-hidden="true"
					/>
				</a>
			</li>

			<li>
				<a
					href="https://linkedin.com/in/andrefmonteiro"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn (opens in new tab)"
				>

					<Icon
						name="grommet-icons:linkedin"
						size="18px"
						class="transition hover:text-text-secondary"
						aria-hidden="true"
					/>
				</a>
			</li>

			<li>
				<a
					href="https://github.com/andrefmonteiro"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub (opens in new tab)"
				>

					<Icon
						name="grommet-icons:github"
						size="18px"
						class="transition hover:text-text-secondary"
						aria-hidden="true"
					/>
				</a>
			</li>
		</ul>
	</footer>
</template>
