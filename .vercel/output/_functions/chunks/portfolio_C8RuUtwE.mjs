import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Portfolio",
  "description": "A portfolio website to showcase my projects and skills.",
  "tags": ["react", "astro"],
  "pageTags": ["react", "astro", "tailwind", "shadcn", "gsap"],
  "descriptionTags": ["Built with React, Astro and Tailwind.", "Supports English and Spanish."],
  "githubLink": "https://github.com/cuter97/portfolio-astro-2025",
  "lang": "en"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "portfolio-website",
    "text": "Portfolio Website"
  }, {
    "depth": 2,
    "slug": "challenge-and-solutions",
    "text": "Challenge and Solutions"
  }, {
    "depth": 2,
    "slug": "features",
    "text": "Features"
  }, {
    "depth": 2,
    "slug": "future-improvements",
    "text": "Future Improvements"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "portfolio-website",
      children: "Portfolio Website"
    }), "\n", createVNode(_components.p, {
      children: "This project is a custom platform to showcase my work, skills, and experience in web development. Designed with a modern and minimalist approach, the portfolio offers an intuitive and visually appealing user experience."
    }), "\n", createVNode(_components.h2, {
      id: "challenge-and-solutions",
      children: "Challenge and Solutions"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Dark Mode: Implemented a dynamic system for switching between light and dark modes, enhancing accessibility and user experience personalization."
      }), "\n", createVNode(_components.li, {
        children: "Multilanguage Support: Added support for English and Spanish, allowing users to easily switch between languages."
      }), "\n", createVNode(_components.li, {
        children: "Responsive Design: The portfolio is fully optimized for mobile devices, ensuring smooth and responsive viewing across all screen sizes."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Built with Astro, React, Tailwind CSS, and Shadcn/ui"
      }), "\n", createVNode(_components.li, {
        children: "Animations created using GSAP and Astro Transition"
      }), "\n", createVNode(_components.li, {
        children: "Language switching implemented with i18n"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "future-improvements",
      children: "Future Improvements"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Admin Profile: I would like to implement an admin profile to dynamically add and manage content."
      }), "\n", createVNode(_components.li, {
        children: "Dynamic Projects Section: Automate the loading of projects from a GitHub repository."
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/projects/en/portfolio.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/portfolio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/portfolio.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
