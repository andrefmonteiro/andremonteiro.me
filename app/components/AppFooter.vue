<script setup>
const currYear = new Date().getFullYear()
</script>

<template>
	<footer class="flex justify-between text-text-secondary text-sm md:flex-1">
		<p>© {{ currYear }} André Monteiro.</p>
		<div class="flex gap-x-4">
			<a
				href="mailto:andrefmonteiro@outlook.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon
					name="grommet-icons:mail"
					size="18px"
					class="transition hover:text-text-tertiary"
				/>
			</a>
			<a
				href="https://linkedin.com/in/andrefmonteiro"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon
					name="grommet-icons:linkedin"
					size="18px"
					class="transition hover:text-text-tertiary"
				/>
			</a>
			<a
				href="https://github.com/andrefmonteiro"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon
					name="grommet-icons:github"
					size="18px"
					class="transition hover:text-text-tertiary"
				/>
			</a>
		</div>
	</footer>
</template>
