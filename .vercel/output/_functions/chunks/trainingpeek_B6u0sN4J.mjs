import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "TrainingPeek",
  "description": "Plataforma de entrenamiento en línea que ofrece diversas actividades de entrenamiento.",
  "tags": ["next", "node"],
  "pageTags": ["next", "tailwind", "node", "typescript", "mercadopago", "nextui"],
  "descriptionTags": ["Construido con Next.js y Node.js.", "Integración de Mercado Pago para pagos."],
  "lang": "es",
  "demoLink": "https://trainingpeek2-0.vercel.app/"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "trainingpeek",
    "text": "TrainingPeek"
  }, {
    "depth": 2,
    "slug": "desafíos-y-soluciones",
    "text": "Desafíos y Soluciones"
  }, {
    "depth": 2,
    "slug": "características",
    "text": "Características"
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
      children: ["TrainingPeek es una plataforma de entrenamiento en línea desarrollada para ofrecer una experiencia de usuario intuitiva y accesible. Incluye funciones de registro de usuarios y administradores, permitiendo una gestión eficiente de cuentas y contenido de la plataforma.\r\n", createVNode(_components.img, {
        src: "/src/assets/img-1.webp",
        alt: "Screenshot de TrainingPeek website"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "desafíos-y-soluciones",
      children: "Desafíos y Soluciones"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Optimización de rendimiento: Implementé técnicas de optimización como carga diferida de imágenes y generación estática de sitios (SSG) para mejorar la velocidad de carga."
      }), "\n", createVNode(_components.li, {
        children: "Diseño responsivo: Adapté el diseño para que se vea y funcione correctamente en dispositivos móviles y de escritorio utilizando CSS Grid y Flexbox."
      }), "\n", createVNode(_components.li, {
        children: "Integración de pasarela de pago: Incorporé la pasarela de pago de Mercado Pago para facilitar las transacciones de los usuarios."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "características",
      children: "Características"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Registro de usuarios y administradores"
      }), "\n", createVNode(_components.li, {
        children: "Integración con Mercado Pago para pagos"
      }), "\n", createVNode(_components.li, {
        children: "Plataforma de entrenamiento accesible y fácil de usar"
      }), "\n", createVNode(_components.li, {
        children: "Diseño responsivo para dispositivos móviles y de escritorio."
      }), "\n", createVNode(_components.li, {
        children: "Componentes de interfaz desarrollados con NextUI."
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

const url = "src/content/projects/es/trainingpeek.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/trainingpeek.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/trainingpeek.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
