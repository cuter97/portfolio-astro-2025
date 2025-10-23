import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Migrando de Next.js a Astro",
  "description": "Por qué decidí migrar de Next.js a Astro y cómo me simplificó el mantenimiento de mi sitio y la actualización de contenido.",
  "date": "21/10/2025",
  "tags": ["article", "news"],
  "lang": "es"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nextjs-es-genial-pero-no-para-todo",
    "text": "Next.js es genial, pero no para todo"
  }, {
    "depth": 2,
    "slug": "y-ahí-apareció-astro",
    "text": "Y ahí apareció Astro"
  }, {
    "depth": 2,
    "slug": "sigo-usando-react-pero-como-una-isla",
    "text": "Sigo usando React (pero como una isla)"
  }, {
    "depth": 2,
    "slug": "comparando-la-experiencia",
    "text": "Comparando la experiencia"
  }, {
    "depth": 2,
    "slug": "mi-flujo-actual",
    "text": "Mi flujo actual"
  }, {
    "depth": 2,
    "slug": "conclusión",
    "text": "Conclusión"
  }];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Durante mucho tiempo usé ", createVNode(_components.strong, {
        children: "Next.js"
      }), " para mi sitio personal y mi blog. Siempre me gustó trabajar con ", createVNode(_components.strong, {
        children: "React"
      }), ", así que Next me parecía la opción más natural. Pero con el tiempo empecé a notar algo: mantener un sitio estático con Next era más complicado de lo que debería."]
    }), "\n", createVNode(_components.p, {
      children: "Cada vez que quería agregar un nuevo post o actualizar información, tenía que tocar el código, regenerar todo y esperar el build. Y como no tengo un CMS ni una base de datos conectada, todo era contenido estático. En teoría eso debería ser lo más simple del mundo… pero en Next no lo sentía así."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "nextjs-es-genial-pero-no-para-todo",
      children: "Next.js es genial, pero no para todo"
    }), "\n", createVNode(_components.p, {
      children: "No hay duda: Next.js es una herramienta poderosa. Si estás construyendo una app compleja, un panel administrativo o algo que necesite SSR, API routes y autenticación, es una joya."
    }), "\n", createVNode(_components.p, {
      children: ["El problema es cuando tu proyecto ", createVNode(_components.strong, {
        children: "no necesita todo eso"
      }), ".", createVNode(_components.br, {}), "\nUn simple blog, un portfolio o un sitio con contenido estático termina arrastrando mucho más peso del necesario."]
    }), "\n", createVNode(_components.p, {
      children: "Algunas cosas que me frustraban:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["El ", createVNode(_components.strong, {
          children: "bundle era demasiado grande"
        }), " incluso para páginas simples."]
      }), "\n", createVNode(_components.li, {
        children: ["Agregar contenido requería configurar ", createVNode(_components.strong, {
          children: "contentlayer"
        }), " o alguna otra solución extra."]
      }), "\n", createVNode(_components.li, {
        children: "Cada nuevo post implicaba modificar rutas o hacer rebuild completo."
      }), "\n", createVNode(_components.li, {
        children: "La configuración inicial era cada vez más compleja."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Llega un punto donde sentís que estás usando un ", createVNode(_components.strong, {
        children: "framework demasiado grande para un problema chico"
      }), ".", createVNode(_components.br, {}), "\nComo usar un martillo neumático para clavar una chinche."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "y-ahí-apareció-astro",
      children: "Y ahí apareció Astro"
    }), "\n", createVNode(_components.p, {
      children: ["Un día, sin muchas expectativas, empecé a probar ", createVNode(_components.strong, {
        children: "Astro"
      }), ".", createVNode(_components.br, {}), "\nY fue un cambio total."]
    }), "\n", createVNode(_components.p, {
      children: ["Lo primero que me sorprendió fue ", createVNode(_components.strong, {
        children: "lo fácil que es crear cosas"
      }), ".", createVNode(_components.br, {}), "\nAstro tiene una filosofía muy distinta: ", createVNode(_components.em, {
        children: "“Content-first”"
      }), ".", createVNode(_components.br, {}), "\nEstá pensado para sitios que priorizan el contenido, no las apps."]
    }), "\n", createVNode(_components.p, {
      children: ["Pude crear un blog completamente funcional en minutos, sin instalar nada extra.", createVNode(_components.br, {}), "\nNo necesité configurar contentlayer, ni preocuparme por el routing. Simplemente creás un archivo Markdown en ", createVNode(_components.code, {
        children: "src/content"
      }), ", y Astro se encarga del resto: genera las rutas, te da tipado automático y hasta valida los metadatos."]
    }), "\n", createVNode(_components.p, {
      children: ["Además, el ", createVNode(_components.strong, {
        children: "rendimiento es increíble"
      }), ". Astro genera HTML estático por defecto y no carga nada de JavaScript a menos que vos lo pidas. Eso significa que tu sitio es rápido, liviano y eficiente."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "sigo-usando-react-pero-como-una-isla",
      children: "Sigo usando React (pero como una isla)"
    }), "\n", createVNode(_components.p, {
      children: ["Algo que me encantó es que no tuve que dejar atrás React.", createVNode(_components.br, {}), "\nAstro me permite usarlo ", createVNode(_components.strong, {
        children: "solo cuando realmente lo necesito"
      }), ", como una “isla” dentro del sitio."]
    }), "\n", createVNode(_components.p, {
      children: "Por ejemplo, para un componente interactivo o un efecto visual puntual, puedo seguir usando mis componentes React de siempre, con todo su ecosistema (hooks, props, etc.), pero sin que afecten el rendimiento general del sitio."
    }), "\n", createVNode(_components.p, {
      children: ["No tuve que rehacer todo en TypeScript “vanilla”, ni cambiar mi forma de pensar en componentes.", createVNode(_components.br, {}), "\nAstro simplemente me da la libertad de elegir ", createVNode(_components.strong, {
        children: "cuándo y dónde"
      }), " usar React."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "comparando-la-experiencia",
      children: "Comparando la experiencia"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Aspecto"
          }), createVNode(_components.th, {
            children: "Next.js"
          }), createVNode(_components.th, {
            children: "Astro"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Tamaño del bundle"
          }), createVNode(_components.td, {
            children: "Alto, incluso en sitios simples"
          }), createVNode(_components.td, {
            children: "Mínimo por defecto"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Manejo de contenido"
          }), createVNode(_components.td, {
            children: "Requiere contentlayer u otra herramienta"
          }), createVNode(_components.td, {
            children: ["Integrado con ", createVNode(_components.code, {
              children: "content collections"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Curva de aprendizaje"
          }), createVNode(_components.td, {
            children: "Alta para sitios estáticos"
          }), createVNode(_components.td, {
            children: "Muy baja"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Performance"
          }), createVNode(_components.td, {
            children: "Buena, pero con más JS"
          }), createVNode(_components.td, {
            children: "Excelente, 0 JS por defecto"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "React"
          }), createVNode(_components.td, {
            children: "Totalmente dependiente"
          }), createVNode(_components.td, {
            children: "Opcional, solo donde se necesita"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "mi-flujo-actual",
      children: "Mi flujo actual"
    }), "\n", createVNode(_components.p, {
      children: ["Hoy en día, escribir un nuevo post en mi blog es literalmente ", createVNode(_components.strong, {
        children: "crear un archivo Markdown"
      }), ".", createVNode(_components.br, {}), "\nAstro se encarga de todo: rutas, layouts, tipado y renderizado."]
    }), "\n", createVNode(_components.p, {
      children: ["Uso ", createVNode(_components.strong, {
        children: "TailwindCSS"
      }), " para los estilos y ", createVNode(_components.strong, {
        children: "React"
      }), " para los componentes interactivos (como menús o efectos visuales).", createVNode(_components.br, {}), "\nTodo lo demás es contenido estático, limpio y veloz."]
    }), "\n", createVNode(_components.p, {
      children: ["No tengo que preocuparme por el bundle, ni por dependencias innecesarias.", createVNode(_components.br, {}), "\nSimplemente escribo y publico."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conclusión",
      children: "Conclusión"
    }), "\n", createVNode(_components.p, {
      children: ["Migrar a Astro me simplificó muchísimo las cosas.", createVNode(_components.br, {}), "\nAhora, si quiero ", createVNode(_components.strong, {
        children: "agregar nueva información o actualizar algo"
      }), ", lo puedo hacer sin complicaciones, sin configurar herramientas extra o tocar demasiadas partes del proyecto."]
    }), "\n", createVNode(_components.p, {
      children: ["Antes, con Next, modificar algo tan simple como un texto o una sección implicaba más pasos de los necesarios.", createVNode(_components.br, {}), "\nCon Astro, todo se siente más directo: abrís un archivo, lo cambiás, y listo."]
    }), "\n", createVNode(_components.p, {
      children: ["No fue un cambio solo de tecnología, sino de ", createVNode(_components.strong, {
        children: "flujo de trabajo"
      }), ".", createVNode(_components.br, {}), "\nAhora mantener mi sitio es mucho más ágil, liviano y, sobre todo, práctico."]
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

const url = "src/content/blog/es/migration-from-next-to-astro.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/blog/es/migration-from-next-to-astro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/blog/es/migration-from-next-to-astro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
