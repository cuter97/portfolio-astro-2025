# 🌐 Portfolio Astro

A **modern, multilingual, and SEO-optimized personal portfolio**, built with **Astro**, **React**, **Tailwind CSS**, and **Shadcn/ui**.  
Includes RSS, `robots.txt`, a custom 404 page, and a commercial license that allows resale.

---

## 🚀 Features

- ✅ **Multilingual** – Support for Spanish and English
- ✅ **Dark/Light mode** – Customizable theme with persistence
- ✅ **Responsive** – Adaptable design for all devices
- ✅ **SEO optimized** – Metadata, optimized structure, `robots.txt`, and `sitemap.xml`
- ✅ **Content collections** – Management of projects, experiences, skills, and more
- ✅ **Page transitions** – Smooth animations between pages
- ✅ **Integrated blog** – Support for articles in MDX format
- ✅ **RSS Feed (`rss.xml.ts`)** – Automatic RSS feed generation for the blog
- ✅ **Custom 404 page** – Design consistent with the rest of the site
- ✅ **Commercial license** – Code and design can be sold under specific terms

---

## 🛠️ Technologies

- [Astro](https://astro.build/) – Web framework for static sites
- [React](https://react.dev/) – Library for user interfaces
- [TypeScript](https://www.typescriptlang.org/) – JavaScript with static typing
- [Shadcn/ui](https://ui.shadcn.com/) – User interface components
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [GSAP](https://greensock.com/gsap/) – Advanced animations
- [Sonner](https://sonner.emilkowal.ski/) – Toast notification system
- [MDX](https://mdxjs.com/) – Markdown with JSX for enriched content

---

## 📦 Project structure
```
/
├── public/                 # Static files
│   ├── fonts/              # Custom fonts
│   └── pdf/                # PDF files (resume)
├── src/
│   ├── assets/             # Images and resources
│   ├── components/         # Reusable components
│   │   ├── common/         # Common components
│   │   ├── sections/       # Page sections
│   │   └── ui/             # Interface components
│   ├── content/            # Structured content
│   │   ├── blog/           # Blog articles (MDX files)
│   │   ├── certifications/ # Certifications (JSON files)
│   │   ├── experiences/    # Work experience (JSON files)
│   │   ├── projects/       # Projects (MDX files)
│   │   ├── skills/         # Skills (JSON files)
│   │   └── university/     # Education (JSON files)
│   ├── i18n/               # Translations
│   ├── icons/              # SVG icons
│   │   └── skills/         # Icons for skills
│   ├── layouts/            # Page templates
│   ├── lib/                # Utilities and constants
│   │   ├── const.ts        # Links and constant data
│   │   └── utils.ts        # Utility functions
│   ├── pages/              # Site pages
│   ├── scripts/            # Client scripts
│   └── styles/             # CSS styles
│   └── content.config.ts   # Content configuration
└── package.json            # Dependencies and scripts
```
---

## 🧩 Content management

The project uses Astro content collections to manage information. Each type of content is defined in `src/content.config.ts` and stored in the `src/content/` folder.

### 📄 Content file types

- **JSON**: Used for simple structured data (skills, experiences, certifications, university)
- **MDX**: Used for enriched content with formatting and components (blog, projects)

### ⚙️ Global links and constants

The `src/lib/const.ts` file contains the main constants used throughout the project:
```typescript
export const linkedin = "";
export const github = "";
export const email = "";
export const drive = "";
export const name = "";
```

These constants are used to keep centralized important links and data used in multiple places throughout the project.

### ⚠️ Important: Icon name correspondence

For icons to display correctly, **there must be an exact match** between:

1. The SVG file name in the `src/icons/skills/` folder
2. The value of the `icon` field in the skills files (`src/content/skills/`)
3. The values in the `tags` array of projects (`src/content/projects/`)

For example, if you have a `react.svg` icon in the icons folder:

- In a skill file, you must use `"icon": "react"`
- In a project's tags, you must include `"tags": ["react", ...]`

If the names don't match exactly, the icons won't display correctly.

### ⚙️ Content structure

#### Projects (`projects` - MDX files)
```typescript
---
title: "Project name"
description: "Project description"
descriptionTags: ["Built with React, Astro and Tailwind."]
tags: ["react", "typescript", "tailwindcss"]1
pageTags: ["react", "typescript", "tailwindcss"]
githubLink: "https://github.com/"
demoLink: "https://agustincastets.vercel.app/"
lang: "en"
---

# Project details

Here you can write a detailed description of the project using Markdown with JSX component support.

## Features

- Feature 1
- Feature 2

<MyComponent prop="value" />
```

#### Blog (`blog` - MDX files)
```typescript
---
title: "Article title"
description: "Brief description of the article"
publishDate: "2023-06-15" // detects DD/MM/YYYY or DD-MM-YYYY format
image: "/path/to/image.webp"
tags: ["development", "web", "react"]
lang: "en"
---

# Article content

Here you can write the complete content of the article using Markdown with JSX component support.

## Section 1

Section text...

<MyComponent prop="value" />
```

#### Experiences (`experiences` - JSON files)
```json
{
  "title": "Position",
  "company": "Company name",
  "location": "Location",
  "dates": {
    "start": "Jul 2022",
    "end": "Present"
  },
  "summary": "Position summary",
  "responsibilities": ["Responsibility 1", "Responsibility 2"],
  "achievements": ["Achievement 1", "Achievement 2"],
  "lang": "en"
}
```

#### Skills (`skills` - JSON files)
```json
{
  "skill": "Skill name",
  "description": "Skill description",
  "release": "Additional information",
  "icon": "icon-name",
  "feed": true,
  "lang": "en"
}
```

_The `feed` field determines whether the skill will be displayed in the skills section. If `true`, it will be shown. If `false`, it won't be displayed._

#### Certifications (`certifications` - JSON files)
```json
{
  "title": "Certification name",
  "issuer": "Issuing entity",
  "date": "Jan 2023",
  "url": "https://certificate.com",
  "lang": "en"
}
```

#### Education (`university` - JSON files)
```json
{
  "institution": "University name",
  "degree": "Degree obtained",
  "field": "Field of study",
  "dates": {
    "start": "Mar 2018",
    "end": "Dec 2022"
  },
  "lang": "en"
}
```

--- 

## 🌐 Internationalization

The project supports two languages: Spanish and English. Translations are managed in `src/i18n/ui.ts`.

---

## 🚀 Installation and usage

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository or download zip
cd portfolio-astro

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ☁️ Hosting

This project is configured with the Vercel adapter, ideal for deploying directly to [Vercel](https://vercel.com/)

If you want to host it on another service (Netlify, Cloudflare, etc.):

1. Uninstall the current adapter:
```bash
npm uninstall @astrojs/vercel
```

2. Install the desired adapter (for example, Netlify):
```bash
npm install @astrojs/netlify
```

3. Modify the astro.config.mjs replacing the adapter:
```typescript
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

export default defineConfig({
  adapter: netlify(),
});
```

---

## ✅ Customization checklist

Before deploying, make sure to:

- [ ] Update `src/lib/const.ts` with your data
- [ ] Modify translations in `src/i18n/ui.ts`
- [ ] Add your profile picture in `src/assets/`
- [ ] Add your resume in `public/pdf/` with the name `cv-en.pdf` and `cv-es.pdf`
- [ ] Customize colors in `src/styles/global.css`
- [ ] Add your projects in `src/content/projects/`
- [ ] Add your experience in `src/content/experiences/`
- [ ] Configure analytics (optional)
- [ ] Test in different browsers
- [ ] Verify SEO with Lighthouse

---

## 🎨 Customization

### Theme and styles

- Theme colors and variables are defined in `src/styles/global.css` along with global styles.
- Project page information styles are defined in `src/styles/project-page.css`
- Blog page information styles are defined in `src/styles/blog-page.css`
- The dark/light theme toggle is implemented in `src/scripts/theme.ts`

### Content

To update your personal information:

1. Modify JSON and MDX files in folders within `src/content/`
2. Update translations in `src/i18n/ui.ts`
3. Update constants in `src/lib/const.ts` with your own links
4. Replace images in `src/assets/` and `public/`

---

## ⚙️ SEO

- Index page SEO information is modified according to language in `src/i18n/ui.ts` in:
```typescript
  meta: {
    index: {
      title: "Your Name",
      description: "Your Name, Full Stack Developer with experience in creating efficient and scalable web applications. Specialized in modern technologies in both the frontend and backend.",
      keys: "Full Stack Developer, UX/UI Design, Learning, Optimization, React, Next.js, Node.js, Express, MongoDB, MySQL, PostgreSQL, Docker, Git, GitHub, npm, yarn, Vercel, Netlify, AWS, Azure, Google Cloud, Firebase, RESTful APIs, GraphQL, TypeScript, JavaScript, HTML, CSS, Sass, Tailwind CSS, Bootstrap, Material UI, Reactstrap, React Hooks, React Context API, React Router, Redux, State Management, Form Handling, Validation, Responsive Design, Performance Optimization, Accessibility, SEO, Cross-Browser Compatibility, Unit Testing, Integration Testing, End-to-End Testing, Continuous Integration, Continuous Deployment, Agile Methodology, Scrum, Kanban, Project Management, Team Collaboration, Communication, Problem Solving, Attention to Detail, Adaptability, Flexibility, Creativity, Innovation, Passion for Technology, Continuous Learning"
    }
  }
```
- Automatic generation of `sitemap.xml`, `robots.txt`, and `rss.xml`
- Optimization for search engines and accessibility

---

## 📜 License and commercial use

This project includes a **commercial license** that allows:
- ✅ Personal and commercial use
- ✅ Code modification
- ✅ Creating projects for clients
- ❌ Reselling the source code as a template
- ❌ Claiming authorship of the original design

For more details, see the `LICENSE.md` file
