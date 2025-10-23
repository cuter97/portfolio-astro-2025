import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "TrainingPeek",
  "description": "Online training platform offering various training activities.",
  "tags": ["next", "node"],
  "pageTags": ["next", "tailwind", "node", "typescript", "mercadopago", "nextui"],
  "descriptionTags": ["Built with Next.js and Node.js.", "Integrated Mercado Pago for payment."],
  "lang": "en",
  "demoLink": "https://trainingpeek2-0.vercel.app/"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "trainingpeek",
    "text": "TrainingPeek"
  }, {
    "depth": 2,
    "slug": "challenge-and-solutions",
    "text": "Challenge and Solutions"
  }, {
    "depth": 2,
    "slug": "features",
    "text": "Features"
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
      id: "trainingpeek",
      children: "TrainingPeek"
    }), "\n", createVNode(_components.p, {
      children: ["TrainingPeek is an online training platform developed to offer an intuitive and accessible user experience. It includes user and admin registration features, allowing efficient management of accounts and platform content.\r\n", createVNode(_components.img, {
        src: "/src/assets/img-1.webp",
        alt: "Screenshot of TrainingPeek website"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "challenge-and-solutions",
      children: "Challenge and Solutions"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Performance Optimization: Implemented optimization techniques like lazy loading of images and static site generation (SSG) to improve load speed."
      }), "\n", createVNode(_components.li, {
        children: "Responsive Design: Adapted the design to look and function correctly on mobile and desktop devices using CSS Grid and Flexbox."
      }), "\n", createVNode(_components.li, {
        children: "Payment Gateway Integration: Incorporated the Mercado Pago payment gateway to facilitate user transactions."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "User and admin registration"
      }), "\n", createVNode(_components.li, {
        children: "Integration with Mercado Pago for payments"
      }), "\n", createVNode(_components.li, {
        children: "Accessible and user-friendly training platform"
      }), "\n", createVNode(_components.li, {
        children: "Responsive design for mobile and desktop devices."
      }), "\n", createVNode(_components.li, {
        children: "UI components developed with NextUI."
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

const url = "src/content/projects/en/trainingpeek.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/trainingpeek.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/trainingpeek.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
