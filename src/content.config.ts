import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artiklar = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/artiklar' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		publishedDate: z.string(),
		updatedDate: z.string().optional(),
		author: z.object({
			name: z.string(),
			title: z.string().optional(),
			image: z.string().optional(),
		}),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
	}),
});

export const collections = { artiklar };
