import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
		'nuxt-seo-utils',
		'nuxt-og-image',
		'@nuxt/icon',
		'@nuxt/content',
		'@nuxt/image',
		...(process.env.NODE_ENV === 'development' ? ['@nuxt/eslint'] : []),
	],
	devtools: { enabled: true },
	app: {
		viewTransition: true,
		head: {
			meta: [
				{ name: 'format-detection', content: 'telephone=no' }, // disables phone linking
			],
		},
	},
	css: ['~/assets/css/main.css'],
	site: {
		url: 'https://andremonteiro.me',
		name: 'André Monteiro',
		description: 'Insights on software, learning and creativity.',
		defaultLocale: 'en',
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
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: [
				'/',
				'/blog',
				'/portfolio',
				'/sitemap.xml',
			],
		},
	},
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
		provider: 'ipxStatic',
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
	ogImage: {
		zeroRuntime: true,
	},
	seo: {
		meta: {
			author: 'André Monteiro',
			themeColor: '#02120f',
			applicationName: 'André Monteiro - Blog & Portfolio',
		},
	},
})
