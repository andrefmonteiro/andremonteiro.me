import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		'@nuxt/eslint',
		'@nuxt/icon',
		'@nuxt/content',
		'@nuxt/image',
	],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	site: {
		url: 'https://andremonteiro.me',
		name: 'André Monteiro',
	},
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
	icon: {
		mode: 'svg',
	},
	image: {
		quality: 80,
		format: ['webp', 'jpg'],
		presets: {
			default: {
				modifiers: {
					width: 800,
					height: 600,
					fit: 'inside',
				},
			},
		},
	},
})
