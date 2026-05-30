import { defineCollection, z } from 'astro:content';

export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      topic: z.string(),
      order: z.number().default(0),
      readTime: z.string().default('5 min read'),
    }),
  }),
};
