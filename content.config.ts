import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: 'page',
			source: 'blog/*.md',
			schema: z.object({
				title: z.string(),
				date: z.string(),
				description: z.string(),
			}),
		}),
		portfolio: defineCollection({
			type: 'page',
			source: 'portfolio/*.md',
			schema: z.object({
				title: z.string(),
				date: z.string(),
				description: z.string(),
				tech_stack: z.array(z.string()),
				live_url: z.string(),
				github_url: z.string(),
			}),
		}),
	},
})
