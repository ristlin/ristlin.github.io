import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Education & credentials.
const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    credential: z.string(),
    institution: z.string(),
    year: z.string(),
    location: z.string().optional(),
    order: z.number().default(0),
  }),
});

// Selected projects. Set draft:true to hide one until its blurb is ready.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    blurb: z.string(),
    role: z.string().optional(),
    year: z.string().optional(),
    stack: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    draft: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Publications, trade-magazine bylines, journals, and selected writing.
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(), // e.g. "IAPD Performance Plastics Magazine"
    date: z.string(), // e.g. "April / May 2025"
    // Grouping bucket. Rendered in this order, with a heading per non-empty group.
    category: z.enum(['trade', 'writing', 'research']).default('trade'),
    summary: z.string().optional(),
    // Co-authors (Yuse implied, list ONLY the others).
    coauthors: z.array(z.string()).default([]),
    // Yuse's position in the author list (1 = first author). Optional metadata
    // for academic-style entries; not displayed unless > 1.
    authorPosition: z.number().optional(),
    url: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { education, projects, publications };
