import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Artesano del Sur",
  "description": "A bilingual artisan website showcasing handmade products from southern Argentina.",
  "tags": ["astro", "tailwind"],
  "pageTags": ["astro", "tailwind", "i18n", "gsap"],
  "descriptionTags": ["Built with Astro, Tailwind and GSAP.", "Supports English and Spanish."],
  "lang": "en",
  "demoLink": "https://artesanodelsur.com/"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "artesano-del-sur",
    "text": "Artesano del sur"
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
    br: "br",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "artesano-del-sur",
      children: "Artesano del sur"
    }), "\n", createVNode(_components.p, {
      children: ["This project is a digital catalog for ", createVNode(_components.strong, {
        children: "‘Artesano del Sur’"
      }), ", a brand of handcrafted products.", createVNode(_components.br, {}), "\nThe website is built with ", createVNode(_components.strong, {
        children: "Astro"
      }), " to optimize performance, ", createVNode(_components.strong, {
        children: "Tailwind CSS"
      }), " for fast layout styling, and ", createVNode(_components.strong, {
        children: "GSAP"
      }), " to add smooth animations that complement the artisanal aesthetic.", createVNode(_components.br, {}), "\nThe site is bilingual and allows visitors to explore unique handmade pieces."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/img-2.webp",
        alt: "Screenshot of Artesano del sur website"
      })
    }), "\n", createVNode(_components.h2, {
      id: "challenge-and-solutions",
      children: "Challenge and Solutions"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Implemented an accessible multilingual structure using dynamic routes."
      }), "\n", createVNode(_components.li, {
        children: "Achieved smooth animations with GSAP without compromising performance."
      }), "\n", createVNode(_components.li, {
        children: "Leveraged Astro Islands to render only what’s needed and improve load times."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Responsive design with mobile-first focus"
      }), "\n", createVNode(_components.li, {
        children: "GSAP animations for smooth and engaging transitions"
      }), "\n", createVNode(_components.li, {
        children: "Bilingual navigation"
      }), "\n", createVNode(_components.li, {
        children: "Sections like story, blog, and product catalog"
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

const url = "src/content/projects/en/artesanos-del-sur.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/artesanos-del-sur.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/en/artesanos-del-sur.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
