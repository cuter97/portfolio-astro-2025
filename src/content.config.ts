import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const project = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    descriptionTags: z.array(z.string()),
    tags: z.array(reference("skill")),
    githubLink: z.string().url().optional(),
    demoLink: z.string().url().optional(),
    lang: z.enum(["en", "es"]),
  }),
});

const skill = defineCollection({
  loader: glob({ base: "./src/content/skills", pattern: "**/[^_]*.json" }),
  schema: z.object({
    skill: z.string(),
    description: z.string(),
    release: z.string(),
    icon: z.string(),
    feed: z.boolean().default(false),
    lang: z.enum(["en", "es"]),
  }),
});

const experience = defineCollection({
  loader: glob({ base: "./src/content/experiences", pattern: "**/[^_]*.json" }),
  schema: z.object({
    dates: z.object({
      start: z.string(),
      end: z.string(),
    }),
    title: z.string(),
    location: z.string(),
    summary: z.string(),
    responsibilities: z.array(z.string()),
    achievements: z.array(z.string()),
    company: z.object({
      name: z.string(),
      url: z.string().url(),
    }).optional().nullable(),
    lang: z.enum(["en", "es"]),
  }),
});

const university = defineCollection({
  loader: glob({ base: "./src/content/university", pattern: "**/[^_]*.json" }),
  schema: z.object({
    dates: z.object({
      start: z.string(),
      end: z.string(),
    }),
    title: z.string(),
    universityName: z.string(),
    link: z.string().url(),
    lang: z.enum(["en", "es"]),
  }),
});

const certification = defineCollection({
  loader: glob({ base: "./src/content/certifications", pattern: "**/[^_]*.json" }),
  schema: z.object({
    date: z.string(),
    institute: z.string(),
    certificationName: z.string(),
    link: z.string().url(),
    lang: z.enum(["en", "es"]),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.enum(["article", "update", "project", "news"])),
    lang: z.enum(["en", "es"]),
  }),
})

export const collections = { project, skill, experience, university, certification, blog };
