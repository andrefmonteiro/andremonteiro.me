export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
	// Add this line
	devtools: { enabled: true },
	css: ['~/assets/css/tailwind.css'],	compatibilityDate: '2025-07-15',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},
})
