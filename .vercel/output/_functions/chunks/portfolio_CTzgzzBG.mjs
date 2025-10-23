import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Portfolio",
  "description": "Este es mi portfolio web, donde muestro mis proyectos y habilidades.",
  "tags": ["react", "astro"],
  "pageTags": ["react", "astro", "tailwind"],
  "descriptionTags": ["Built with Next.js and Tailwind.", "Supports English and Spanish."],
  "githubLink": "https://github.com/cuter96",
  "demoLink": "https://agustincastets.vercel.app/",
  "lang": "es"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "portfolio-website",
    "text": "Portfolio Website"
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
      children: "Este proyecto es una plataforma personalizada para mostrar mi trabajo, habilidades y experiencia en desarrollo web. Diseñado con un enfoque moderno y minimalista, el portfolio ofrece una experiencia de usuario intuitiva y visualmente atractiva."
    }), "\n", createVNode(_components.h2, {
      id: "desafíos-y-soluciones",
      children: "Desafíos y Soluciones"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Modo Oscuro: Implementé un sistema dinámico para cambiar entre modos claro y oscuro, mejorando la accesibilidad y la personalización de la experiencia de usuario."
      }), "\n", createVNode(_components.li, {
        children: "Soporte Multilingüe: Añadí soporte para inglés y español, permitiendo a los usuarios cambiar fácilmente entre idiomas."
      }), "\n", createVNode(_components.li, {
        children: "Diseño Responsivo: El portfolio está totalmente optimizado para dispositivos móviles, garantizando una visualización suave y receptiva en todos los tamaños de pantalla."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "características",
      children: "Características"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Construido con Astro, React, Tailwind CSS y Shadcn/ui"
      }), "\n", createVNode(_components.li, {
        children: "Animaciones creadas con GSAP y Astro Transition"
      }), "\n", createVNode(_components.li, {
        children: "Intercambio de idiomas implementado con i18n"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "mejoras-futuras",
      children: "Mejoras Futuras"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Perfil Administrador: Quiero implementar un perfil administrador para agregar y gestionar contenido dinámicamente."
      }), "\n", createVNode(_components.li, {
        children: "Sección de Proyectos Dinámica: Automatizar la carga de proyectos desde un repositorio de GitHub."
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

const url = "src/content/projects/es/portfolio.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/portfolio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/portfolio.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
