import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/content'],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	content: {
		build: {
			markdown: {
				highlight: {
					theme: {
						default: 'laserwave',
					},
				},
			},
		},
	},
	compatibilityDate: '2025-07-15',
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			},
		},
	},
})
