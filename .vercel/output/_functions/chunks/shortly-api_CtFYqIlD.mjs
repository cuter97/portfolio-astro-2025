import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Shortly API",
  "description": "A web user interface for creating shortened URLs using rel.ink API.",
  "tags": ["react", "sass"],
  "pageTags": ["react", "sass", "css"],
  "descriptionTags": ["Built with React and SASS.", "One of my first projects from 2022."],
  "lang": "en",
  "githubLink": "https://github.com/cuter97/shortly-api",
  "demoLink": "https://shortly-api-eta.vercel.app/"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "shortly-api",
    "text": "Shortly API"
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
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "shortly-api",
      children: "Shortly API"
    }), "\n", createVNode(_components.p, {
      children: "This project was a frontend mentor challenge. The challenge involves integrating the rel.ink API into a web user interface to create shortened URLs, which should be displayed according to the proposed design. I took this opportunity to gain more experience with asynchronous JavaScript. It is one of my first projects and was completed in 2022."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/img-3.webp",
        alt: "Screenshot of Artesano del sur website"
      })
    }), "\n", createVNode(_components.h2, {
      id: "challenge-and-solutions",
      children: "Challenge and Solutions"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Learned to work with APIs and handle asynchronous operations effectively."
      }), "\n", createVNode(_components.li, {
        children: "Designed the user interface to meet the specifications of the challenge."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Integration with the rel.ink API for URL shortening"
      }), "\n", createVNode(_components.li, {
        children: "User-friendly interface for creating and managing shortened URLs."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "future-improvements",
      children: "Future Improvements"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Enhance the user experience with additional features like link analytics and custom shortened URLs."
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

const url = "src/content/projects/en/shortly-api.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/shortly-api.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/shortly-api.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
