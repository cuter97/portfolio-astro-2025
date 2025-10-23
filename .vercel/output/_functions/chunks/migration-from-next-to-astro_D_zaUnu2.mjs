import { o as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_CymEa2WV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Migrating from Next.js to Astro",
  "description": "Why I switched from Next.js to Astro and how it made maintaining and updating my site much easier.",
  "date": "21/10/2025",
  "tags": ["article", "news"],
  "lang": "en"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nextjs-is-great-but-not-for-everything",
    "text": "Next.js is great, but not for everything"
  }, {
    "depth": 2,
    "slug": "then-i-found-astro",
    "text": "Then I found Astro"
  }, {
    "depth": 2,
    "slug": "still-using-react-but-as-an-island",
    "text": "Still using React (but as an island)"
  }, {
    "depth": 2,
    "slug": "comparing-the-experience",
    "text": "Comparing the experience"
  }, {
    "depth": 2,
    "slug": "my-current-workflow",
    "text": "My current workflow"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
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
      children: ["For a long time, I used ", createVNode(_components.strong, {
        children: "Next.js"
      }), " for my personal site and blog. I’ve always liked working with ", createVNode(_components.strong, {
        children: "React"
      }), ", so Next felt like the natural choice.", createVNode(_components.br, {}), "\nBut over time, I started to notice something: maintaining a static site with Next.js was way more complicated than it needed to be."]
    }), "\n", createVNode(_components.p, {
      children: "Every time I wanted to add a new post or update some information, I had to touch the code, rebuild everything, and wait. Since I don’t use a CMS or database, all my content is static — and in theory, that should be simple… but with Next, it just wasn’t."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "nextjs-is-great-but-not-for-everything",
      children: "Next.js is great, but not for everything"
    }), "\n", createVNode(_components.p, {
      children: ["No doubt about it: Next.js is a powerful framework.", createVNode(_components.br, {}), "\nIf you’re building a complex app, an admin dashboard, or something that needs SSR, API routes, and authentication, it’s amazing."]
    }), "\n", createVNode(_components.p, {
      children: ["The issue comes when your project ", createVNode(_components.strong, {
        children: "doesn’t need all that"
      }), ".", createVNode(_components.br, {}), "\nA simple blog, portfolio, or static site ends up carrying way more weight than it should."]
    }), "\n", createVNode(_components.p, {
      children: "Some things that frustrated me:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["The ", createVNode(_components.strong, {
          children: "bundle size"
        }), " was large even for simple pages."]
      }), "\n", createVNode(_components.li, {
        children: ["Adding content required setting up ", createVNode(_components.strong, {
          children: "contentlayer"
        }), " or other extra tools."]
      }), "\n", createVNode(_components.li, {
        children: "Each new post meant changing routes or rebuilding everything."
      }), "\n", createVNode(_components.li, {
        children: "The setup felt heavier and heavier over time."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["At some point, it feels like you’re using a ", createVNode(_components.strong, {
        children: "jackhammer to hang a picture frame"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "then-i-found-astro",
      children: "Then I found Astro"
    }), "\n", createVNode(_components.p, {
      children: ["One day, almost by accident, I started experimenting with ", createVNode(_components.strong, {
        children: "Astro"
      }), ", and it completely changed my workflow."]
    }), "\n", createVNode(_components.p, {
      children: ["The first thing that struck me was ", createVNode(_components.strong, {
        children: "how simple it is to build things"
      }), ".", createVNode(_components.br, {}), "\nAstro follows a ", createVNode(_components.em, {
        children: "“content-first”"
      }), " philosophy — it’s designed for sites that prioritize content, not apps."]
    }), "\n", createVNode(_components.p, {
      children: ["I was able to create a fully functional blog in minutes, without installing any extra dependencies.", createVNode(_components.br, {}), "\nNo need to set up contentlayer or routing. You just create a Markdown file in ", createVNode(_components.code, {
        children: "src/content"
      }), ", and Astro handles the rest: it generates routes, provides type safety, and even validates metadata automatically."]
    }), "\n", createVNode(_components.p, {
      children: ["And the ", createVNode(_components.strong, {
        children: "performance is incredible"
      }), ". Astro ships zero JavaScript by default and only loads it when you ask for it, which means blazing-fast pages and super lightweight output."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "still-using-react-but-as-an-island",
      children: "Still using React (but as an island)"
    }), "\n", createVNode(_components.p, {
      children: ["The best part is I didn’t have to abandon React.", createVNode(_components.br, {}), "\nAstro lets me use it ", createVNode(_components.strong, {
        children: "only when I really need it"
      }), ", as an isolated “island” within the page."]
    }), "\n", createVNode(_components.p, {
      children: "For example, if I need an interactive component or a small visual effect, I can use my usual React components — hooks, props, everything — without affecting the performance of the rest of the site."
    }), "\n", createVNode(_components.p, {
      children: ["I didn’t have to rewrite anything in plain TypeScript or change how I think about components.", createVNode(_components.br, {}), "\nAstro just gives me the freedom to choose ", createVNode(_components.strong, {
        children: "when and where"
      }), " to use React."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "comparing-the-experience",
      children: "Comparing the experience"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Aspect"
          }), createVNode(_components.th, {
            children: "Next.js"
          }), createVNode(_components.th, {
            children: "Astro"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Bundle size"
          }), createVNode(_components.td, {
            children: "Large, even for simple sites"
          }), createVNode(_components.td, {
            children: "Minimal by default"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Content management"
          }), createVNode(_components.td, {
            children: "Needs contentlayer or external tools"
          }), createVNode(_components.td, {
            children: ["Built-in ", createVNode(_components.code, {
              children: "content collections"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Learning curve"
          }), createVNode(_components.td, {
            children: "Steeper for static sites"
          }), createVNode(_components.td, {
            children: "Very low"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Performance"
          }), createVNode(_components.td, {
            children: "Good, but heavier with JS"
          }), createVNode(_components.td, {
            children: "Excellent, 0 JS by default"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "React"
          }), createVNode(_components.td, {
            children: "Fully dependent"
          }), createVNode(_components.td, {
            children: "Optional, as needed"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "my-current-workflow",
      children: "My current workflow"
    }), "\n", createVNode(_components.p, {
      children: ["These days, writing a new blog post is literally ", createVNode(_components.strong, {
        children: "just creating a Markdown file"
      }), ".", createVNode(_components.br, {}), "\nAstro takes care of everything else — routing, layouts, type checking, and rendering."]
    }), "\n", createVNode(_components.p, {
      children: ["I use ", createVNode(_components.strong, {
        children: "TailwindCSS"
      }), " for styling and ", createVNode(_components.strong, {
        children: "React"
      }), " for interactive components (like menus or hover effects).", createVNode(_components.br, {}), "\nEverything else is static, clean, and fast."]
    }), "\n", createVNode(_components.p, {
      children: ["I no longer worry about bundle size or unnecessary dependencies.", createVNode(_components.br, {}), "\nI just write and publish."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["Migrating to Astro made my life a lot easier.", createVNode(_components.br, {}), "\nNow, whenever I want to ", createVNode(_components.strong, {
        children: "add new information or update something"
      }), ", I can do it effortlessly — no extra tools, no complex setup."]
    }), "\n", createVNode(_components.p, {
      children: ["With Next, even changing something small like a piece of text or a section felt like too many steps.", createVNode(_components.br, {}), "\nWith Astro, everything is more direct: open a file, change it, done."]
    }), "\n", createVNode(_components.p, {
      children: ["It wasn’t just a change in technology, but a ", createVNode(_components.strong, {
        children: "change in workflow"
      }), ".", createVNode(_components.br, {}), "\nMaintaining my site is now faster, lighter, and much more practical."]
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

const url = "src/content/blog/en/migration-from-next-to-astro.mdx";
const file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/blog/en/migration-from-next-to-astro.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/content/blog/en/migration-from-next-to-astro.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
