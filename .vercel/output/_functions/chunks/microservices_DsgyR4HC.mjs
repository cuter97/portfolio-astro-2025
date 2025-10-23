import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Microservices",
  "description": "Microservices practice with Nest.js, Docker, and NATS as the messaging system.",
  "tags": ["nest", "docker"],
  "pageTags": ["nest", "docker", "postgresql", "nats", "typescript"],
  "descriptionTags": ["Built with Nest.js and PostgreSQL.", "Using NATS as a communication system."],
  "lang": "en",
  "githubLink": "https://github.com/orgs/Nest-Microservices-dev/repositories"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "microservices",
    "text": "Microservices"
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
      id: "microservices",
      children: "Microservices"
    }), "\n", createVNode(_components.p, {
      children: "This project is part of the microservices course at DevTalles Academy. It uses Nest.js to create scalable services, Docker for containerization, and NATS for asynchronous communication between microservices. The services include product management, orders, payments, and authentication."
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Microservices communicated via NATS"
      }), "\n", createVNode(_components.li, {
        children: "Containerization with Docker"
      }), "\n", createVNode(_components.li, {
        children: "Product, order, and payment management."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "future-improvements",
      children: "Future Improvements"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Create an admin profile to dynamically add information"
      }), "\n", createVNode(_components.li, {
        children: "Improve event management and communication between microservices using advanced messaging design patterns."
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

const url = "src/content/projects/en/microservices.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/microservices.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/microservices.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
