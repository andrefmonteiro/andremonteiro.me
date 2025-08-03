import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: 'page',
			source: 'blog/*.md',
			schema: z.object({
				title: z.string(),
				date: z.string(),
			}),
		}),
		portfolio: defineCollection({
			type: 'page',
			source: 'portfolio/*.md',
			schema: z.object({
				title: z.string(),
				date: z.string(),
				tags: z.array(z.string()),
			}),
		}),
	},
})
