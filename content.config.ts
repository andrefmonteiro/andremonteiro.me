import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'
import { asRobotsCollection } from '@nuxtjs/robots/content'

export default defineContentConfig({
	collections: {
		blog: defineCollection(
			asSitemapCollection(
				asRobotsCollection({
					type: 'page',
					source: 'blog/*.md',
					schema: z.object({
						title: z.string(),
						date: z.string(),
						description: z.string(),
					}),
				}),
			),
		),
		portfolio: defineCollection(
			asSitemapCollection(
				asRobotsCollection({
					type: 'page',
					source: 'portfolio/*.md',
					schema: z.object({
						title: z.string(),
						description: z.string(),
						tech_stack: z.array(z.string()),
						live_url: z.string(),
						github_url: z.string(),
					}),
				}),
			),
		),
	},
})
