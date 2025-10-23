import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Shortly API",
  "description": "Una interfaz de usuario web para crear URLs acortadas con la API de rel.ink.",
  "tags": ["react", "sass"],
  "pageTags": ["react", "sass", "css"],
  "descriptionTags": ["Construido con React y SASS.", "Uno de mis primeros proyectos de 2022."],
  "lang": "es",
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
    "slug": "desafíos-y-soluciones",
    "text": "Desafíos y Soluciones"
  }, {
    "depth": 2,
    "slug": "características",
    "text": "Características"
  }, {
    "depth": 2,
    "slug": "mejoras-futuras",
    "text": "Mejoras Futuras"
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
      children: "Este proyecto fue un desafío de Frontend Mentor. El desafío implica integrar la API rel.ink en una interfaz de usuario web para crear URLs acortadas, que deben mostrarse de acuerdo al diseño propuesto. Tomé esta oportunidad para adquirir más experiencia con JavaScript asíncrono. Es uno de mis primeros proyectos y se completó en 2022."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/img-3.webp",
        alt: "Screenshot de Shortly API website"
      })
    }), "\n", createVNode(_components.h2, {
      id: "desafíos-y-soluciones",
      children: "Desafíos y Soluciones"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Aprendí a trabajar con APIs y manejar operaciones asíncronas de manera efectiva."
      }), "\n", createVNode(_components.li, {
        children: "Diseñé la interfaz de usuario para cumplir con las especificaciones del desafío."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "características",
      children: "Características"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Integración con la API rel.ink para acortar URLs"
      }), "\n", createVNode(_components.li, {
        children: "Interfaz de usuario amigable para crear y gestionar URLs acortadas."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "mejoras-futuras",
      children: "Mejoras Futuras"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Mejorar la experiencia del usuario con características adicionales como análisis de enlaces y URLs acortadas personalizadas."
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

const url = "src/content/projects/es/shortly-api.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/shortly-api.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/shortly-api.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
