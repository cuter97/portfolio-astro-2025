import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Microservices",
  "description": "Práctica de microservicios con Nest.js, Docker y NATS como sistema de mensajería.",
  "tags": ["nest", "docker"],
  "pageTags": ["nest", "docker", "postgresql", "nats", "typescript"],
  "descriptionTags": ["Construido con Nest.js y PostgreSQL.", "Usando NATS como sistema de comunicación."],
  "lang": "es",
  "githubLink": "https://github.com/orgs/Nest-Microservices-dev/repositories"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "microservices",
    "text": "Microservices"
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
      children: "Este proyecto es parte de la cursada de microservicios en DevTalles Academy. Utiliza Nest.js para crear servicios escalables, Docker para contenerización, y NATS para comunicación asíncrona entre microservicios. Los servicios incluyen gestión de productos, pedidos, pagos, y autenticación."
    }), "\n", createVNode(_components.h2, {
      id: "características",
      children: "Características"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Microservicios comunicados via NATS"
      }), "\n", createVNode(_components.li, {
        children: "Contenerización con Docker"
      }), "\n", createVNode(_components.li, {
        children: "Gestión de productos, pedidos y pagos."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "mejoras-futuras",
      children: "Mejoras Futuras"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Crear un perfil administrador para agregar información dinámicamente."
      }), "\n", createVNode(_components.li, {
        children: "Mejorar la gestión de eventos y comunicación entre microservicios utilizando patrones de diseño de mensajería avanzados."
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

const url = "src/content/projects/es/microservices.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/microservices.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/microservices.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
