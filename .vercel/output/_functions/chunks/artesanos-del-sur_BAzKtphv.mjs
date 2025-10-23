import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Artesano del Sur",
  "description": "Sitio web artesanal bilingüe para mostrar productos hechos a mano en el sur de Argentina.",
  "tags": ["astro", "tailwind"],
  "pageTags": ["astro", "tailwind", "i18n", "gsap"],
  "descriptionTags": ["Construido con Astro, Tailwind y GSAP.", "Soporte para inglés y español."],
  "lang": "es",
  "demoLink": "https://artesanodelsur.com/"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "artesano-del-sur",
    "text": "Artesano del sur"
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
      children: ["Este proyecto es un catálogo digital para ", createVNode(_components.strong, {
        children: "‘Artesano del Sur’"
      }), ", una marca de productos artesanales.", createVNode(_components.br, {}), "\nEl sitio web está construido con ", createVNode(_components.strong, {
        children: "Astro"
      }), " para optimizar el rendimiento, ", createVNode(_components.strong, {
        children: "Tailwind CSS"
      }), " para estilizar rápidamente los diseños, y ", createVNode(_components.strong, {
        children: "GSAP"
      }), " para añadir animaciones suaves que complementan la estética artesanal.", createVNode(_components.br, {}), "\nEl sitio es bilingüe y permite a los visitantes explorar piezas únicas hechas a mano."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/src/assets/img-2.webp",
        alt: "Captura de pantalla del sitio web Artesano del sur"
      })
    }), "\n", createVNode(_components.h2, {
      id: "desafíos-y-soluciones",
      children: "Desafíos y Soluciones"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Implementé una estructura multilingüe accesible utilizando rutas dinámicas."
      }), "\n", createVNode(_components.li, {
        children: "Logré animaciones fluidas con GSAP sin comprometer el rendimiento."
      }), "\n", createVNode(_components.li, {
        children: "Aproveché Astro Islands para renderizar solo lo necesario y mejorar los tiempos de carga."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "características",
      children: "Características"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Diseño responsivo con enfoque mobile-first"
      }), "\n", createVNode(_components.li, {
        children: "Animaciones GSAP para transiciones suaves y atractivas"
      }), "\n", createVNode(_components.li, {
        children: "Navegación bilingüe"
      }), "\n", createVNode(_components.li, {
        children: "Secciones como historia, blog y catálogo de productos"
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

const url = "src/content/projects/es/artesanos-del-sur.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/artesanos-del-sur.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/projects/es/artesanos-del-sur.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
