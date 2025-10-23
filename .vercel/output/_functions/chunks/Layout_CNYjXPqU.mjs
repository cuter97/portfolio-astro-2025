import { c as createComponent, a as createAstro, d as addAttribute, f as renderScript, b as renderTemplate, m as maybeRenderHead, s as spreadAttributes, r as renderComponent, F as Fragment, u as unescapeHTML, g as renderSlot, h as renderHead } from './astro/server_CymEa2WV.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                         */
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { getIconData, iconToSVG } from '@iconify/utils';
import { Menu, X } from 'lucide-react';
import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_Bff-QcyA.mjs';
import './index_CYyG6us9.mjs';
import { $ as $$Image } from './_astro_assets_-n0YpEIq.mjs';

const $$Astro$6 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/node_modules/astro/components/ClientRouter.astro", void 0);

const labels = {
  en: {
    sonner: {
      title: "Email copied to clipboard"
    },
    navbar: {
      home: {
        title: "Home",
        description: "Discover my journey and what drives me to keep learning."
      },
      experience: {
        title: "Experience",
        description: "Work experience and roles I have held."
      },
      projects: {
        title: "Projects",
        description: "Highlighted projects I have worked on."
      },
      skills: {
        title: "Skills",
        description: "Technical skills and proficiencies."
      },
      education: {
        title: "Education",
        description: "Academic background and qualifications."
      },
      about: {
        title: "About",
        description: "Learn more about me."
      },
      blog: {
        title: "Blog",
        description: "Read my latest articles and learnings."
      }
    },
    tooltips: {
      copyEmail: "Copy email",
      viewGithub: "View GitHub Profile",
      viewLinkedin: "View LinkedIn Profile",
      viewResume: "View Resume",
      viewWebsite: "View Website",
      viewCode: "View Code",
      viewCompany: "View Company Website",
      viewCarrer: "View Carrer",
      viewCourse: "View Course",
      viewCert: "View Certification",
      themeToggle: "Toggle theme"
    },
    buttons: {
      showMore: "Show more",
      showLess: "Show less",
      readMore: "Read more",
      myBlog: "My Blog",
      backToTop: "Back to top",
      home: "Home",
      back: "Back"
    },
    header: {
      name: "Agustin Castets",
      profession: "Full Stack Developer",
      place: "Rio Negro, Argentina",
      available: "Available for work"
    },
    index: {
      experience: {
        title: "Work Experience",
        cardExp: {
          summary: "Summary",
          responsibilities: "Responsibilities",
          achievements: "Achievements"
        }
      },
      projects: {
        title: "Projects",
        projectSlug: {
          website: "Website",
          code: "Code",
          technology: "Technologies"
        }
      },
      skills: "Skills and Tools",
      education: "Education",
      certifications: "Certifications",
      driveText: "All my certifications in my"
    },
    blog: {
      title: "Blog, news and updates.",
      onThisPage: "On this page"
    },
    about: {
      title: "About me",
      greeting: "Hello",
      intro: {
        paragraph1: "I focus on full stack development and UX/UI design, combining the technical side with the visual aspect of projects. I enjoy learning, experimenting, and understanding how things work — from new technologies and programming languages to topics like artificial intelligence, automation, and experience design. I really enjoy the process of building and improving, both professionally and personally.",
        title2: "Outside of work",
        paragraph2: "Outside of coding, I love reading —especially fiction, philosophy, and psychology books— and spending time in nature. I live in a mountainous area with a lake, so I enjoy going to the beach to share mates with friends or heading into the mountains to build small shelters. I'm also passionate about woodworking, games, and good moments with coffee or mate.",
        title3: "My philosophy",
        paragraph3: "I see development as a way to bring ideas to life and give them structure, without losing the human and creative side of the process."
      },
      areas: {
        title: "Areas I work in",
        fullstack: {
          title: "Full Stack Development",
          description: "I'm interested in the whole process of building an application, from backend to frontend. I aim to write clean, functional, and maintainable code."
        },
        design: {
          title: "UX/UI Design",
          description: "I enjoy thinking about how people interact with a product. I focus on making interfaces simple, consistent, and visually pleasant."
        },
        learning: {
          title: "Learning and Exploration",
          description: "I like exploring new technologies, programming languages, and tools such as n8n, MCP, or artificial intelligence. I'm always looking for ways to improve, and learn."
        },
        optimization: {
          title: "Integration and Optimization",
          description: "I'm interested in connecting systems, improving performance, and finding practical solutions to real problems. I like when things work well, not just when they look good."
        }
      }
    },
    footer: {
      title: "Footer",
      description: "Building software with ♥ from Bariloche to the world.",
      nav: {
        navegation: "Navegation",
        links: "Links",
        resources: "Resources",
        resume: "Resume",
        talk: "Let's Talk?"
      },
      power: "Powered by"
    },
    meta: {
      index: {
        title: "Agustin Castets",
        description: "Agustin Castets, Full Stack Developer with experience in creating efficient and scalable web applications. Specialized in modern technologies in both the frontend and backend.",
        keys: "Full Stack Developer, UX/UI Design, Learning, Optimization, React, Next.js, Node.js, Express, MongoDB, MySQL, PostgreSQL, Docker, Git, GitHub, npm, yarn, Vercel, Netlify, AWS, Azure, Google Cloud, Firebase, RESTful APIs, GraphQL, TypeScript, JavaScript, HTML, CSS, Sass, Tailwind CSS, Bootstrap, Material UI, Reactstrap, React Hooks, React Context API, React Router, Redux, State Management, Form Handling, Validation, Responsive Design, Performance Optimization, Accessibility, SEO, Cross-Browser Compatibility, Unit Testing, Integration Testing, End-to-End Testing, Continuous Integration, Continuous Deployment, Agile Methodology, Scrum, Kanban, Project Management, Team Collaboration, Communication, Problem Solving, Attention to Detail, Adaptability, Flexibility, Creativity, Innovation, Passion for Technology, Continuous Learning"
      }
    }
  },
  es: {
    sonner: {
      title: "Correo copiado al portapapeles"
    },
    navbar: {
      home: {
        title: "Inicio",
        description: "Descubrí mi recorrido y lo que me impulsa a seguir aprendiendo."
      },
      experience: {
        title: "Experiencia",
        description: "Experiencia laboral y roles que he desempeñado."
      },
      projects: {
        title: "Proyectos",
        description: "Proyectos destacados en los que he trabajado."
      },
      skills: {
        title: "Habilidades",
        description: "Competencias y conocimientos técnicos."
      },
      education: {
        title: "Educación",
        description: "Formación académica y calificaciones."
      },
      about: {
        title: "Sobre mí",
        description: "Conocé más acerca de quién soy."
      },
      blog: {
        title: "Blog",
        description: "Leé mis últimos artículos y aprendizajes."
      }
    },
    tooltips: {
      copyEmail: "Copiar correo",
      viewGithub: "Ver perfil de GitHub",
      viewLinkedin: "Ver perfil de LinkedIn",
      viewResume: "Ver currículum",
      viewWebsite: "Ver sitio web",
      viewCode: "Ver código",
      viewCompany: "Ver sitio de la empresa",
      viewCarrer: "Ver carrera",
      viewCourse: "Ver curso",
      viewCert: "Ver certificación",
      themeToggle: "Cambiar tema"
    },
    buttons: {
      showMore: "Ver más",
      showLess: "Ver menos",
      readMore: "Leer más",
      myBlog: "Mi Blog",
      backToTop: "Volver arriba",
      home: "Inicio",
      back: "Volver"
    },
    header: {
      name: "Agustin Castets",
      profession: "Desarrollador Full Stack",
      place: "Río Negro, Argentina",
      available: "Disponible para trabajo"
    },
    index: {
      experience: {
        title: "Experiencia Laboral",
        cardExp: {
          summary: "Resumen",
          responsibilities: "Responsabilidades",
          achievements: "Logros"
        }
      },
      projects: {
        title: "Proyectos",
        projectSlug: {
          website: "Sitio Web",
          code: "Código",
          technology: "Tecnologías"
        }
      },
      skills: "Habilidades y Herramientas",
      education: "Educación",
      certifications: "Certificaciones",
      driveText: "Todas mis certificaciones en mi"
    },
    blog: {
      title: "Blog, noticias y actualizaciones.",
      onThisPage: "En esta página"
    },
    about: {
      title: "Sobre mí",
      greeting: "Hola",
      intro: {
        paragraph1: "Me dedico al desarrollo full stack y al diseño UX/UI, combinando la parte técnica con la parte visual de los proyectos. Me gusta aprender, experimentar y entender cómo funcionan las cosas: desde nuevas tecnologías y lenguajes de programación, hasta temas como inteligencia artificial, automatización o diseño de experiencias. Disfruto mucho el proceso de construir y mejorar, tanto en lo profesional como en lo personal.",
        title2: "Fuera del trabajo",
        paragraph2: "Fuera del código, me encanta leer —especialmente libros de ficción, filosofía y psicología— y pasar tiempo en la naturaleza. Vivo en una zona montañosa con lago, por lo que disfruto ir a la playa a tomar mates con amigos o aventurarme a hacer refugios en la montaña. También me apasiona la carpintería, los juegos y los buenos momentos acompañados de café o mate.",
        title3: "Mi filosofía",
        paragraph3: "Veo el desarrollo como una forma de materializar ideas y darles estructura, sin dejar de lado la parte humana y creativa del proceso."
      },
      areas: {
        title: "Áreas en las que trabajo",
        fullstack: {
          title: "Desarrollo Full Stack",
          description: "Me interesa todo el proceso de creación de una aplicación, desde el backend hasta el frontend. Busco escribir código claro, funcional y fácil de mantener."
        },
        design: {
          title: "Diseño UX/UI",
          description: "Disfruto pensar cómo las personas interactúan con un producto. Me enfoco en que las interfaces sean simples, coherentes y visualmente agradables."
        },
        learning: {
          title: "Aprendizaje y exploración",
          description: "Me gusta investigar nuevas tecnologías, lenguajes de programación y herramientas como n8n, MCP o inteligencia artificial. Siempre estoy buscando formas de mejorar y aprender."
        },
        optimization: {
          title: "Integración y optimización",
          description: "Me interesa conectar sistemas, mejorar rendimiento y encontrar soluciones prácticas a problemas reales. Me gusta que las cosas funcionen bien, más allá de que se vean bien."
        }
      }
    },
    footer: {
      title: "Pie de página",
      description: "Construyendo software con ♥ desde Bariloche para el mundo.",
      nav: {
        navegation: "Navegación",
        links: "Enlaces",
        resources: "Recursos",
        resume: "Currículum",
        talk: "¿Hablamos?"
      },
      power: "Desarrollado con"
    },
    meta: {
      index: {
        title: "Agustin Castets",
        description: "Agustin Castets, Desarrollador Full Stack con experiencia en la creación de aplicaciones web eficientes y escalables. Especializado en tecnologías modernas tanto en el frontend como en el backend.",
        keys: "Full Stack Developer, UX/UI Design, Learning, Optimization, React, Next.js, Node.js, Express, MongoDB, MySQL, PostgreSQL, Docker, Git, GitHub, npm, yarn, Vercel, Netlify, AWS, Azure, Google Cloud, Firebase, RESTful APIs, GraphQL, TypeScript, JavaScript, HTML, CSS, Sass, Tailwind CSS, Bootstrap, Material UI, Reactstrap, React Hooks, React Context API, React Router, Redux, State Management, Form Handling, Validation, Responsive Design, Performance Optimization, Accessibility, SEO, Cross-Browser Compatibility, Unit Testing, Integration Testing, End-to-End Testing, Continuous Integration, Continuous Deployment, Agile Methodology, Scrum, Kanban, Project Management, Team Collaboration, Communication, Problem Solving, Attention to Detail, Adaptability, Flexibility, Creativity, Innovation, Passion for Technology, Continuous Learning"
      }
    }
  }
};

const defaultLang = "en";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function useTranslation(lang) {
  return function t(key) {
    const keys = key.split(".");
    let value = labels[lang];
    for (const k of keys) {
      value = value?.[k];
      if (value === void 0) break;
    }
    if (typeof value === "string") return value;
    value = labels[defaultLang];
    for (const k of keys) {
      value = value?.[k];
      if (value === void 0) break;
    }
    return typeof value === "string" ? value : key;
  };
}

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-accent-foreground/10 text-secondary-foreground hover:bg-foreground hover:text-background",
        ghost: "hover:text-accent-foreground hover:bg-foreground/10",
        link: "text-primary underline-offset-4 hover:underline hover:decoration-dotted hover:text-terciary",
        customLink: "text-terciary underline-offset-4 hover:underline hover:decoration-dotted"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-12",
        link: "px-0 text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

function ModeToggle({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return "system";
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "theme-light") {
        return stored;
      }
    } catch (e) {
    }
    return "system";
  });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      if (theme === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", theme);
      }
    } catch {
    }
  }, [theme]);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "theme-light" : "dark";
    const applyTheme = () => setThemeState(newTheme);
    applyTheme();
  };
  if (!mounted) {
    return /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "mx-2", disabled: true, children: [
      children,
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] });
  }
  return /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", onClick: toggleTheme, className: "mx-2", children: [
    children,
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
  ] });
}

function ModeLang({ currentLocale, currentPath }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleSelect = (newLocale) => {
    if (newLocale === currentLocale || isLoading) return;
    setIsLoading(true);
    try {
      const segments = currentPath.split("/").filter(Boolean);
      const pathWithoutLocale = segments.slice(1).join("/");
      const newPath = pathWithoutLocale ? `/${newLocale}/${pathWithoutLocale}` : `/${newLocale}`;
      window.location.href = newPath;
    } catch (error) {
      console.error("Error changing locale:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center align-middle", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => handleSelect("en"),
        className: cn(
          currentLocale === "en" && "text-terciary underline",
          "text-xl"
        ),
        disabled: isLoading,
        variant: "link",
        children: "EN"
      }
    ),
    /* @__PURE__ */ jsx("span", { children: "|" }),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => handleSelect("es"),
        className: cn(
          currentLocale === "es" && "text-terciary underline",
          "text-xl"
        ),
        disabled: isLoading,
        variant: "link",
        children: "ES"
      }
    )
  ] });
}

const icons = {"local":{"prefix":"local","lastModified":1761158168,"icons":{"404":{"body":"<g fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M12.276 15.59c-.277-.662-2.117-.054-2.874 1.706a5.39 5.39 0 0 0 .964 5.877 2.99 2.99 0 0 0 4.592-1.473 7.12 7.12 0 0 0-.94-5.43c-.414-.458-1.353-.988-1.742-.68m-.136.496a2.17 2.17 0 0 0-1.713 1.603 4.5 4.5 0 0 0 .727 4.404 1.69 1.69 0 0 0 2.567-.83c.33-.883.375-4.492-1.263-4.906a.43.43 0 0 1-.318-.271M13.019.337c-.2-.458-1.431-.39-2.078-.146a9.2 9.2 0 0 0-3.608 4.108c-3.192 5.907-3.78 9.218 2.746 9.734 2.484.177 4.98-.078 7.377-.754a2.44 2.44 0 0 0 1.705-2.763C18.929 8.668 14.624-.528 13.019.336m-.2.536a.4.4 0 0 1-.276.028C9.386.25 6.273 9.22 6.32 10.718c.082 2.829 8.758 2.105 10.629 1.342.69-.276 1.014-.596.93-1.41a25 25 0 0 0-1.657-4.49C13.502.143 13.062 1.527 12.82.875z\"/><path d=\"M12.46 9.179c-.25-.702-2.486-.172-1.914 1.533a1.381 1.381 0 0 0 2.567.141c.406-.975-.238-1.666-.652-1.674zm-.121-1.13c1.177-5.432-2-8.29-.83-.03a.416.416 0 0 0 .563.416.415.415 0 0 0 .267-.386m7.579 13.383c.243 2.04.23 2.62.754 2.565.525-.056.329-.415.276-2.708.83-.133 1.758-.108 1.692-.694-.067-.585-.813-.356-1.71-.298-.042-2.263-.034-2.21-.147-4.24-.166-2.507-5.338 3.336-4.68 4.745.45.926 2.782.744 3.815.63m-.122-1.077c-.11-1.105-.15-1.735-.237-2.926a10 10 0 0 0-1.79 2.27c-.46.896-.49.515.276.595.58.06 1.167.078 1.75.053zM5.35 21.07c.222 1.882.206 2.763.772 2.71s.326-.477.277-2.781c.878-.07 1.76-.022 1.693-.62-.058-.513-.552-.353-1.713-.367-.038-2.183-.036-2.166-.143-4.17a.666.666 0 0 0-1.028-.513A19.2 19.2 0 0 0 1.38 20.34a.67.67 0 0 0 .627.845s1.724-.027 3.343-.116m-.117-1.077c-.097-1.01-.12-1.382-.213-2.647a30 30 0 0 0-1.934 2.583c.602.022 1.38.047 2.147.064\"/></g>","width":24},"astro":{"body":"<g fill=\"none\"><rect width=\"256\" height=\"256\" fill=\"url(#a)\" rx=\"60\"/><path fill=\"#31274a\" fill-rule=\"evenodd\" d=\"M157.719 33.011c1.634 2.028 2.466 4.765 4.132 10.237l36.396 119.561a151.5 151.5 0 0 0-43.513-14.732l-23.697-80.08a3.086 3.086 0 0 0-4.809-1.593c-.533.4-.922.962-1.109 1.602l-23.411 80.031A151.5 151.5 0 0 0 58 162.791l36.573-119.57c1.673-5.464 2.507-8.195 4.141-10.219a13.44 13.44 0 0 1 5.449-4.032c2.414-.97 5.27-.97 10.984-.97h26.123c5.721 0 8.581 0 10.997.972a13.45 13.45 0 0 1 5.452 4.04\" clip-rule=\"evenodd\"/><path fill=\"#ff5d01\" fill-rule=\"evenodd\" d=\"M162.074 168.499c-6 5.131-17.976 8.629-31.77 8.629-16.931 0-31.122-5.271-34.887-12.359-1.346 4.063-1.648 8.712-1.648 11.683 0 0-.887 14.585 9.257 24.729a9.54 9.54 0 0 1 9.538-9.538c9.028 0 9.018 7.877 9.009 14.268v.57c0 9.7 5.928 18.015 14.359 21.519a19.55 19.55 0 0 1-1.966-8.572c0-9.251 5.432-12.696 11.744-16.698 5.022-3.185 10.602-6.724 14.448-13.824a26.06 26.06 0 0 0 3.145-12.454c0-2.773-.431-5.445-1.229-7.953\" clip-rule=\"evenodd\"/><path fill=\"url(#b)\" fill-rule=\"evenodd\" d=\"M162.074 168.499c-6 5.131-17.976 8.629-31.77 8.629-16.931 0-31.122-5.271-34.887-12.359-1.346 4.063-1.648 8.712-1.648 11.683 0 0-.887 14.585 9.257 24.729a9.54 9.54 0 0 1 9.538-9.538c9.028 0 9.018 7.877 9.009 14.268v.57c0 9.7 5.928 18.015 14.359 21.519a19.55 19.55 0 0 1-1.966-8.572c0-9.251 5.432-12.696 11.744-16.698 5.022-3.185 10.602-6.724 14.448-13.824a26.06 26.06 0 0 0 3.145-12.454c0-2.773-.431-5.445-1.229-7.953\" clip-rule=\"evenodd\"/><defs><linearGradient id=\"a\" x1=\"128\" x2=\"128\" y1=\"0\" y2=\"256\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".193\" stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#fff\"/></linearGradient><linearGradient id=\"b\" x1=\"189.089\" x2=\"153.565\" y1=\"126.765\" y2=\"201.132\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#ff1639\"/><stop offset=\"1\" stop-color=\"#ff1639\" stop-opacity=\"0\"/></linearGradient></defs></g>","height":256},"computer":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\"><path d=\"M21 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21M24 34v8\"/><path d=\"m32 6-4 4 4 4m6-8 4 4-4 4M14 42h20\"/></g>","width":48,"height":48},"css":{"body":"<g fill=\"none\"><rect width=\"256\" height=\"256\" fill=\"#0277bd\" rx=\"60\"/><path fill=\"#ebebeb\" d=\"m53.753 102.651 2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037-35.574-9.605-2.274-25.476H58.042l4.475 50.154 65.431 18.164z\"/><path fill=\"#fff\" d=\"m167.318 134.593-3.708 41.426-35.625 9.616v33.231l65.483-18.148.48-5.397 7.506-84.092.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z\"/></g>","height":256},"darkMode":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m9-9v18m0-12 4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85\"/></g>","width":24},"docker":{"body":"<path fill=\"#2396ed\" d=\"M250.716 70.497c-5.765-4-18.976-5.5-29.304-3.5-1.2-10-6.725-18.749-16.333-26.499l-5.524-4-3.844 5.75c-4.803 7.5-7.205 18-6.485 28 .24 3.499 1.441 9.749 5.044 15.249-3.362 2-10.328 4.5-19.455 4.5H1.155l-.48 2c-1.682 9.999-1.682 41.248 18.014 65.247 14.892 18.249 36.99 27.499 66.053 27.499 62.93 0 109.528-30.25 131.386-84.997 8.647.25 27.142 0 36.51-18.75.24-.5.72-1.5 2.401-5.249l.961-2zM139.986 0h-26.42v24.999h26.42zm0 29.999h-26.42v24.999h26.42zm-31.225 0h-26.42v24.999h26.42zm-31.225 0H51.115v24.999h26.421zM46.311 59.998H19.89v24.999h26.42zm31.225 0H51.115v24.999h26.421zm31.225 0h-26.42v24.999h26.42zm31.226 0h-26.422v24.999h26.422zm31.225 0H144.79v24.999h26.422z\"/>","height":185},"express":{"body":"<g fill=\"none\"><rect width=\"256\" height=\"256\" fill=\"#f4f2ed\" rx=\"60\"/><path fill=\"#0f0f0f\" d=\"M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257 10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292 9.619-34.195 48.818-48.43 75.785-27.245 15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972 52.26 52.26 0 0 1-60.884-7.784 54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98-24.02-.334-41.201 17.458-42.258 43.869z\"/></g>","height":256},"framermotion":{"body":"<path fill=\"currentColor\" d=\"M22.684 0h84.253v42.667H64.81zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333z\"/>","width":128,"height":128},"git":{"body":"<path fill=\"#e64a19\" d=\"M13.172 2.828 11.78 4.22l1.91 1.91 2 2A2.986 2.986 0 0 1 20 10.81a3.25 3.25 0 0 1-.31 1.31l2.06 2a2.68 2.68 0 0 1 3.37.57 2.86 2.86 0 0 1 .88 2.117 3.02 3.02 0 0 1-.856 2.109A2.9 2.9 0 0 1 23 19.81a2.93 2.93 0 0 1-2.13-.87 2.694 2.694 0 0 1-.56-3.38l-2-2.06a3 3 0 0 1-.31.12V20a3 3 0 0 1 1.44 1.09 2.92 2.92 0 0 1 .56 1.72 2.88 2.88 0 0 1-.878 2.128 2.98 2.98 0 0 1-2.048.871 2.981 2.981 0 0 1-2.514-4.719A3 3 0 0 1 16 20v-6.38a2.96 2.96 0 0 1-1.44-1.09 2.9 2.9 0 0 1-.56-1.72 2.9 2.9 0 0 1 .31-1.31l-3.9-3.9-7.579 7.572a4 4 0 0 0-.001 5.658l10.342 10.342a4 4 0 0 0 5.656 0l10.344-10.344a4 4 0 0 0 0-5.656L18.828 2.828a4 4 0 0 0-5.656 0\"/>","width":32,"height":32},"graphql":{"body":"<path fill=\"#e10098\" d=\"M4.781 22.746 16.232 2.914l1.028.593L5.81 23.34z\"/><path fill=\"#e10098\" d=\"M4.545 21.162h22.902v1.187H4.545z\"/><path fill=\"#e10098\" d=\"m4.999 21.828.593-1.028 11.455 6.614-.594 1.028zM14.95 4.59l.594-1.027 11.455 6.614-.594 1.028z\"/><path fill=\"#e10098\" d=\"M5.002 10.174 16.456 3.56l.594 1.028-11.455 6.614z\"/><path fill=\"#e10098\" d=\"m14.743 3.508 1.028-.594 11.45 19.833-1.027.593zM5.454 9.386h1.187v13.228H5.454z\"/><path fill=\"#e10098\" d=\"M25.36 9.386h1.187v13.228H25.36z\"/><path fill=\"#e10098\" d=\"m15.734 27.042 9.962-5.752.519.898-9.963 5.752z\"/><path fill=\"#e10098\" d=\"M28.12 23a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 28.12 23M8.2 11.5a2.5 2.5 0 1 1-.915-3.411A2.5 2.5 0 0 1 8.2 11.5M3.88 23a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 3.88 23M23.8 11.5a2.5 2.5 0 1 1 3.411.915A2.5 2.5 0 0 1 23.8 11.5M16 30a2.5 2.5 0 1 1 2.5-2.5A2.493 2.493 0 0 1 16 30m0-23.009a2.5 2.5 0 1 1 2.5-2.5 2.493 2.493 0 0 1-2.5 2.5\"/>","width":32,"height":32},"gsap":{"body":"<path fill=\"currentColor\" d=\"M9.83 7.59c.817.005 1.437.238 1.842.692.383.431.567 1.054.547 1.85l-.014.061a.16.16 0 0 1-.148.095h-1.659a.2.2 0 0 1-.199-.195q.002-.634-.39-.71l-.12-.011c-.342 0-.564.211-.57.579-.007.41.225.783.885 1.423.868.816 1.217 1.539 1.2 2.493-.027 1.544-1.077 2.543-2.673 2.543-.815 0-1.438-.219-1.853-.649-.42-.437-.612-1.078-.572-1.906a.17.17 0 0 1 .049-.112.16.16 0 0 1 .112-.045h1.716a.2.2 0 0 1 .069.017.17.17 0 0 1 .083.098q.008.03.002.06c-.019.298.034.521.151.645a.4.4 0 0 0 .311.121c.317 0 .503-.225.51-.615.006-.337-.102-.634-.682-1.232-.751-.734-1.424-1.492-1.403-2.684a2.48 2.48 0 0 1 .774-1.781c.514-.482 1.216-.737 2.032-.737m-5.783.028c.747-.006 1.334.224 1.742.685.432.487.651 1.221.652 2.182a.16.16 0 0 1-.161.158H4.479a.13.13 0 0 1-.084-.036.13.13 0 0 1-.035-.085c-.014-.623-.188-.946-.532-.984l-.071-.004c-.69.001-1.097.938-1.313 1.458a5.5 5.5 0 0 0-.426 2.301c.015.366.074.88.42 1.093.308.189.747.064 1.013-.146.265-.209.479-.571.569-.901q.02-.07.001-.098-.01-.011-.032-.015l-.504-.004a.18.18 0 0 1-.129-.06.1.1 0 0 1-.025-.05.1.1 0 0 1 0-.056l.316-1.374a.18.18 0 0 1 .157-.134v-.003h3.035l.021.001c.079.01.135.084.134.164v.004l-.316 1.371c-.017.078-.095.135-.184.135h-.381a.064.064 0 0 0-.061.046c-.352 1.194-.829 2.016-1.458 2.509-.536.42-1.195.616-2.077.616-.792 0-1.326-.255-1.779-.758-.598-.666-.845-1.754-.695-3.067.27-2.463 1.546-4.948 4.004-4.948m16.969.132c2.01 0 3.014.912 2.983 2.711-.037 2.108-1.321 3.658-3.254 4.016q-.413.073-.833.068l-.934-.004a.06.06 0 0 0-.058.057q0 .015.008.029a.1.1 0 0 0 .022.021l.794.414q.098.053.076.164l-.207.933c-.017.078-.08.123-.171.123h-1.703a.2.2 0 0 1-.071-.015.2.2 0 0 1-.058-.044.12.12 0 0 1-.025-.107l1.896-8.241c.019-.086.1-.124.172-.124zm-3.743.012a.2.2 0 0 1 .051.033.2.2 0 0 1 .034.052.2.2 0 0 1 .011.059l-.011 8.213a.14.14 0 0 1-.003.058.14.14 0 0 1-.081.091.14.14 0 0 1-.064.013h-1.813a.16.16 0 0 1-.111-.045.2.2 0 0 1-.033-.051.2.2 0 0 1-.012-.06l.039-.797c.002-.087 0-.111-.051-.117l-.068-.002h-1.714c-.124 0-.133.011-.177.125l-.356.857q-.048.09-.192.09h-1.795c-.109 0-.187-.108-.146-.209l3.718-8.199c.025-.049.063-.123.149-.123h2.566q.03 0 .059.012M15.5 9.985c-.008-.032-.034-.029-.055.013a1 1 0 0 0-.04.093l-1.284 3.183-.016.048q-.002.01-.001.019l.007.017a.04.04 0 0 0 .015.012.04.04 0 0 0 .017.006l1.072.014c.119-.01.125-.016.137-.137.002-.043.154-3.231.148-3.268m4.612-.403a.06.06 0 0 0-.04.017.06.06 0 0 0-.018.04.06.06 0 0 0 .03.051l.842.445c.042.023.043.063.029.132-.007.031-.54 2.375-.539 2.377.003.003.019.011.099.011h.036c.895-.036 1.383-1.094 1.401-2.121.009-.555-.18-.896-.523-.946l-.071-.006z\"/>","width":24},"html":{"body":"<g fill=\"none\"><rect width=\"256\" height=\"256\" fill=\"#e14e1d\" rx=\"60\"/><path fill=\"#fff\" d=\"m48 38 8.61 96.593h110.71l-3.715 41.43-35.646 9.638-35.579-9.624-2.379-26.602H57.94l4.585 51.281 65.427 18.172 65.51-18.172 8.783-98.061H85.824l-2.923-32.71h122.238L208 38z\"/><path fill=\"#ebebeb\" d=\"M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647-.041.014-35.579-9.624-2.379-26.602H57.94l4.585 51.281 65.427 18.172.049-.014z\"/></g>","height":256},"i18n":{"body":"<path fill=\"currentColor\" d=\"M14.936 2.487v4.517l5.076 13.036s1.55 3.184-2.882 3.96H7.02s-4.132-.431-3.141-3.702L9.213 7.004V2.487zm2.09 13.108c-4.43-1.374-8.155-.637-9.975-.079l-1.836 4.419c-.783 2.499 2.273 2.941 2.597 2.98l.028.004h8.444c3.54-.598 2.511-2.972 2.415-3.177l-.007-.014zm-7.814.777c.79 0 1.43.386 1.43.865 0 .476-.64.864-1.43.864-.788 0-1.427-.388-1.427-.864 0-.479.639-.865 1.427-.865m5.084 0c.787 0 1.427.386 1.427.865 0 .476-.64.864-1.427.864-.79 0-1.429-.388-1.429-.864 0-.479.638-.865 1.43-.865m-4.5-5.213c-.552 0-1 .54-1 1.205 0 .666.448 1.205 1 1.205s1-.54 1-1.205c0-.666-.448-1.205-1-1.205m3.641-1.297c-.655 0-1.186.638-1.186 1.43 0 .786.531 1.426 1.186 1.426.653 0 1.187-.64 1.187-1.427 0-.79-.533-1.429-1.187-1.429m6.037-2.738s-2.122 1.546-4.086-.42V4.556s2.724-.6 4.086 2.568m-14.844 0c1.36-3.168 4.085-2.568 4.085-2.568v2.148c-1.965 1.966-4.085.42-4.085.42M15.044 0c.495 0 .895.439.895.981s-.4.98-.895.98h-6.09c-.492 0-.894-.438-.894-.98S8.462 0 8.955 0z\"/>","width":24},"idCard":{"body":"<path fill=\"currentColor\" d=\"M9.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM9 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-2.39-3C6.61 7.328 5.891 8 5 8s-1.61-.672-1.61-1.5S4.109 5 5 5s1.61.672 1.61 1.5M5 8h-.04c-.92 0-1.72.585-1.94 1.42-.08.295.16.582.485.582h3c.326 0 .565-.286.486-.582C6.768 8.586 5.971 8 5.051 8h-.04z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M.327 3.64C0 4.282 0 5.12 0 6.8v2.4c0 1.68 0 2.52.327 3.16a3.02 3.02 0 0 0 1.31 1.31c.642.327 1.48.327 3.16.327h6.4c1.68 0 2.52 0 3.16-.327a3 3 0 0 0 1.31-1.31c.327-.642.327-1.48.327-3.16V6.8c0-1.68 0-2.52-.327-3.16a3 3 0 0 0-1.31-1.31c-.642-.327-1.48-.327-3.16-.327h-6.4c-1.68 0-2.52 0-3.16.327a3.02 3.02 0 0 0-1.31 1.31m10.9-.638h-6.4c-.857 0-1.44 0-1.89.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819-.037.45-.038 1.03-.038 1.89v2.4c0 .857.001 1.44.038 1.89.036.438.101.663.18.819.192.376.498.682.874.874.156.08.381.145.819.18.45.036 1.03.037 1.89.037h6.4c.857 0 1.44 0 1.89-.037.438-.036.663-.101.819-.18.376-.192.682-.498.874-.874.08-.156.145-.381.18-.82.037-.45.038-1.03.038-1.89v-2.4c0-.856-.001-1.44-.038-1.89-.036-.437-.101-.662-.18-.818a2 2 0 0 0-.874-.874c-.156-.08-.381-.145-.819-.18-.45-.037-1.03-.038-1.89-.038\" clip-rule=\"evenodd\"/>","width":16,"height":16},"java":{"body":"<path fill=\"#0074bd\" d=\"M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969m-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336\"/><path fill=\"#ea2d2e\" d=\"M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187\"/><path fill=\"#0074bd\" d=\"M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468M49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643m40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617\"/><path fill=\"#ea2d2e\" d=\"M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587\"/><path fill=\"#0074bd\" d=\"M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331\"/>","width":128,"height":128},"javascript":{"body":"<g fill=\"none\"><rect width=\"256\" height=\"256\" fill=\"#f0db4f\" rx=\"60\"/><path fill=\"#323330\" d=\"m67.312 213.932 19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576 19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258 0-18.044 13.748-31.792 35.229-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574\"/></g>","height":256},"maven":{"body":"<defs><linearGradient id=\"m\" x1=\"-7274.8\" x2=\"-7243.872\" y1=\"2082.507\" y2=\"2046.343\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#f69923\"/><stop offset=\".312\" stop-color=\"#f79a23\"/><stop offset=\".838\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"q\" x1=\"-7503.689\" x2=\"-7283.036\" y1=\"2086.595\" y2=\"2086.595\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"r\" x1=\"-7477.053\" x2=\"-7345.566\" y1=\"2064.42\" y2=\"2064.42\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#282662\"/><stop offset=\".095\" stop-color=\"#662e8d\"/><stop offset=\".788\" stop-color=\"#9f2064\"/><stop offset=\".949\" stop-color=\"#cd2032\"/></linearGradient><linearGradient id=\"s\" x1=\"-7491.296\" x2=\"-7270.643\" y1=\"2088.633\" y2=\"2088.633\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"t\" x1=\"-7475.203\" x2=\"-7359.244\" y1=\"2085.61\" y2=\"2085.61\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#282662\"/><stop offset=\".095\" stop-color=\"#662e8d\"/><stop offset=\".788\" stop-color=\"#9f2064\"/><stop offset=\".949\" stop-color=\"#cd2032\"/></linearGradient><linearGradient id=\"u\" x1=\"-7491.296\" x2=\"-7270.643\" y1=\"2065.799\" y2=\"2065.799\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"v\" x1=\"-7504.984\" x2=\"-7284.331\" y1=\"2066.905\" y2=\"2066.905\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"x\" x1=\"-7491.296\" x2=\"-7270.643\" y1=\"2058.959\" y2=\"2058.959\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"z\" x1=\"-7491.296\" x2=\"-7270.643\" y1=\"2059.762\" y2=\"2059.762\" gradientTransform=\"matrix(-.092 -.464 -.464 .092 318.72 -3557.936)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"A\" x1=\"-8307.632\" x2=\"-8276.704\" y1=\"2040.008\" y2=\"2003.844\" gradientTransform=\"matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#f69923\"/><stop offset=\".312\" stop-color=\"#f79a23\"/><stop offset=\".838\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"D\" x1=\"-8536.521\" x2=\"-8315.868\" y1=\"2044.096\" y2=\"2044.096\" gradientTransform=\"matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"E\" x1=\"-8509.885\" x2=\"-8378.397\" y1=\"2021.921\" y2=\"2021.921\" gradientTransform=\"matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#282662\"/><stop offset=\".095\" stop-color=\"#662e8d\"/><stop offset=\".788\" stop-color=\"#9f2064\"/><stop offset=\".949\" stop-color=\"#cd2032\"/></linearGradient><linearGradient id=\"F\" x1=\"-8524.128\" x2=\"-8303.475\" y1=\"2046.134\" y2=\"2046.134\" gradientTransform=\"matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"G\" x1=\"-8508.035\" x2=\"-8392.076\" y1=\"2043.111\" y2=\"2043.111\" gradientTransform=\"matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#282662\"/><stop offset=\".095\" stop-color=\"#662e8d\"/><stop offset=\".788\" stop-color=\"#9f2064\"/><stop offset=\".949\" stop-color=\"#cd2032\"/></linearGradient><linearGradient id=\"H\" x1=\"-8524.128\" x2=\"-8303.475\" y1=\"2023.3\" y2=\"2023.3\" gradientTransform=\"matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"I\" x1=\"-8537.816\" x2=\"-8317.163\" y1=\"2024.407\" y2=\"2024.407\" gradientTransform=\"matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><linearGradient id=\"K\" x1=\"-8524.128\" x2=\"-8303.475\" y1=\"2016.46\" y2=\"2016.46\" gradientTransform=\"matrix(.296 -.448 -.448 -.296 3456.332 -3102.04)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".323\" stop-color=\"#9e2064\"/><stop offset=\".63\" stop-color=\"#c92037\"/><stop offset=\".751\" stop-color=\"#cd2335\"/><stop offset=\"1\" stop-color=\"#e97826\"/></linearGradient><path id=\"k\" d=\"M0 0h128v128H0z\"/><path id=\"b\" fill=\"#be202e\" d=\"M43.695 53.98c-.265.293-.543.567-.824.844.145-.133.293-.289.43-.433q.209-.194.394-.41Zm0 0\"/><path id=\"e\" fill=\"#be202e\" d=\"M41.602 49.426c.046-.04.082-.086.125-.121.18-.18.363-.36.511-.543-.199.218-.425.43-.64.664Zm0 0\"/><path id=\"f\" fill=\"#be202e\" d=\"M43.309 54.398c-.133.149-.282.278-.43.434a6 6 0 0 1 .43-.434m0 0\"/><path id=\"g\" fill=\"#be202e\" d=\"M41.602 49.438c.046-.04.082-.086.14-.133-.047.035-.082.082-.14.133m0 0\"/><path id=\"h\" fill=\"#be202e\" d=\"M79.602 62.586c-.45.023-.895.023-1.336.023h.687q.322.006.649-.023m0 0\"/><path id=\"i\" fill=\"#be202e\" d=\"M81.535 57.258h.2c.288 0 .578 0 .85-.035-.339 0-.69 0-1.046.023Zm0 0\"/><path id=\"j\" fill=\"#be202e\" d=\"M78.953 62.621h-.687a7 7 0 0 1 .687 0m0 0\"/><g id=\"n\" clip-path=\"url(#a)\"><use href=\"#b\"/></g><g id=\"p\" clip-path=\"url(#a)\"><use href=\"#e\"/></g><g id=\"w\" clip-path=\"url(#a)\"><use href=\"#f\"/></g><g id=\"y\" clip-path=\"url(#a)\"><use href=\"#g\"/></g><g id=\"B\" clip-path=\"url(#a)\"><use href=\"#h\"/></g><g id=\"C\" clip-path=\"url(#a)\"><use href=\"#i\"/></g><g id=\"J\" clip-path=\"url(#a)\"><use href=\"#j\"/></g><clipPath id=\"a\"><use href=\"#k\"/></clipPath><filter id=\"l\" width=\"100%\" height=\"100%\" x=\"0%\" y=\"0%\" filterUnits=\"objectBoundingBox\"><feColorMatrix in=\"SourceGraphic\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"/></filter><mask id=\"o\"><g filter=\"url(#l)\"><use fill-opacity=\".349\" href=\"#k\"/></g></mask></defs><path fill=\"url(#m)\" d=\"M23.902 10.133a38 38 0 0 0-1.597 10.62l5.707 2.763a72 72 0 0 1 .398-10.164c.024-.23.047-.368.047-.368 0 .125-.035.243-.047.368a64 64 0 0 0-.012 10.027 111 111 0 0 0 8.457-8 12.17 12.17 0 0 0-6.37-6.805s-5.055-2.039-6.583 1.559m0 0\"/><use href=\"#b\"/><use href=\"#n\" mask=\"url(#o)\"/><use href=\"#e\"/><use href=\"#p\" mask=\"url(#o)\"/><path fill=\"url(#q)\" d=\"M29.52 40.367a232 232 0 0 1-.72-5.597 112 112 0 0 1-.523-5.633c0-.114-.02-.227 0-.325a90 90 0 0 1-.277-5.3l-5.7-2.746c0 .343-.038.699-.054 1.074-.055 1.363-.098 2.8-.11 4.34 0 1.718 0 3.511.032 5.386.039 1.73.113 3.532.203 5.364.094 1.566.195 3.148.324 4.765v.184l7.625 3.86c-.254-1.801-.53-3.594-.8-5.372m0 0\"/><path fill=\"url(#r)\" d=\"M40.8 85.45c.4 1.421.848 2.89 1.313 4.378v.059c.063.218.114.422.196.629.304 1.004.593 1.894 1.226 3.937A7.7 7.7 0 0 1 47.91 95.5a6.24 6.24 0 0 0-4.164-2.266 13.38 13.38 0 0 0 7.309-11.906 16 16 0 0 0-.188-1.305 5.39 5.39 0 0 1-3.062 4.61 15.06 15.06 0 0 0 2.437-9.492 30 30 0 0 0-.297-2.477 12.23 12.23 0 0 1-7.09 9.848l-2.312 2.129c.086.265.156.53.258.808Zm0 0\"/><path fill=\"url(#s)\" d=\"M37.813 78.941c-.485-1.808-.97-3.644-1.461-5.496A361 361 0 0 1 35 68.06c-.445-1.817-.871-3.645-1.297-5.47-.422-1.827-.84-3.737-1.23-5.6-.395-1.864-.762-3.723-1.13-5.575-.132-.672-.25-1.324-.37-2-.211-1.14-.403-2.293-.61-3.45a.6.6 0 0 0-.039-.187l-7.582-3.87q.028.18.031.366c.153 1.715.297 3.457.504 5.2.203 1.738.422 3.558.688 5.363.223 1.52.465 3.027.715 4.55.05.301.113.618.164.915a110 110 0 0 0 2.555 10.828c.328 1.101.652 2.168.984 3.176.289.847.601 1.699.902 2.539a74 74 0 0 0 2.399 5.754l7.66 3.879q-.6-2.114-1.2-4.293c-.113-.418-.214-.825-.331-1.243Zm0 0\"/><path fill=\"url(#t)\" d=\"M31.79 80.832a59 59 0 0 0 3.523 6.508c.042.062.085.152.132.215a15.5 15.5 0 0 0-5.84-.45 21.45 21.45 0 0 1 9.41 5.485 9.9 9.9 0 0 1-4.449 2.23 9.84 9.84 0 0 0 4.883-.433 12 12 0 0 0-2.969 5.789 12.34 12.34 0 0 1 4.82-5.106c2.302 7.625 5.067 15.89 8.138 24.563.476-.617.609-1.43.359-2.164-.567-1.559-4.219-11.871-8.383-25.871-.117-.403-.223-.801-.355-1.203-.036-.114-.063-.215-.098-.336a750 750 0 0 1-1.305-4.528c-.097-.36-.199-.695-.297-1.058l-7.66-3.88c.024.083.051.16.09.239Zm0 0\"/><path fill=\"url(#u)\" d=\"M31.223 45.902c.047.258.093.485.136.746.149.758.282 1.528.438 2.301.16.844.336 1.703.504 2.586.082.445.168.89.261 1.344.278 1.36.579 2.754.887 4.187.399 1.766.797 3.579 1.242 5.465.403 1.785.871 3.645 1.344 5.535.461 1.805.926 3.653 1.438 5.567.449 1.691.93 3.43 1.418 5.199 0 .082.058.176.074.262a632 632 0 0 0 1.543 5.41.3.3 0 0 0 .035.117l2.312-2.129c-.058 0-.101.051-.18.082a22.18 22.18 0 0 0 5.634-12.453 29.8 29.8 0 0 0-.075-6.95 47 47 0 0 0-1.109-5.944 79 79 0 0 0-1.7-5.825 11.6 11.6 0 0 1-1.765 2.551l-.398.438c-.133.148-.282.277-.43.433a13.5 13.5 0 0 0 1.664-10.027 12.7 12.7 0 0 1-2.289 3.965c-.152.183-.332.363-.512.543-.047.035-.082.082-.144.133a14 14 0 0 0 1.484-3.258c.07-.223.13-.45.172-.68.082-.348.137-.7.188-1.05.02-.235.058-.45.078-.684a10 10 0 0 0 0-1.653c0-.183 0-.347-.043-.52-.047-.257-.078-.495-.125-.73a41 41 0 0 0-.598-2.8c-.102-.399-.2-.766-.305-1.098-.047-.133-.07-.262-.117-.403-.125-.363-.226-.699-.336-.976a10 10 0 0 0-.422-.969 2 2 0 0 1-.168.457 15 15 0 0 1-2.597 3.739l2.129-1.95-2.145 1.938a.08.08 0 0 0-.035.05 5 5 0 0 0-.313.348c0-.027.04-.05.043-.074l-7.28 6.66c.058.05.066.09.062.117m0 0\"/><path fill=\"url(#v)\" d=\"M28.398 23.379c.09 1.601.23 3.394.403 5.379.004.101.015.207.035.308.164 1.735.375 3.602.648 5.637.23 1.758.489 3.602.801 5.602.258 1.73.578 3.543.906 5.468l7.282-6.668a11.97 11.97 0 0 0 1.828-6.59c0-.57-.043-1.171-.09-1.788A56 56 0 0 0 39.578 25a49 49 0 0 0-1.082-5.148 28 28 0 0 0-.836-2.614 33 33 0 0 0-.8-1.812 116 116 0 0 1-8.462 7.953m0 0\"/><use href=\"#f\"/><use href=\"#w\" mask=\"url(#o)\"/><path fill=\"url(#x)\" d=\"M43.309 54.398c-.133.149-.282.278-.43.434a6 6 0 0 1 .43-.434m0 0\"/><use href=\"#g\"/><use href=\"#y\" mask=\"url(#o)\"/><path fill=\"url(#z)\" d=\"M41.602 49.438c.046-.04.082-.086.14-.133-.047.035-.082.082-.14.133m0 0\"/><path fill=\"url(#A)\" d=\"M98.508 11.563a43.2 43.2 0 0 0-9.707 7.289l2.398 6.761a80 80 0 0 1 8.403-7.86c.203-.167.328-.265.328-.265-.106.098-.227.168-.328.266a72 72 0 0 0-8 8.05c4.375.325 8.765.423 13.152.29a13.78 13.78 0 0 0 .281-10.559s-2.445-5.656-6.527-3.973Zm0 0\"/><use href=\"#h\"/><use href=\"#B\" mask=\"url(#o)\"/><use href=\"#i\"/><use href=\"#C\" mask=\"url(#o)\"/><path fill=\"url(#D)\" d=\"M79.004 40.363a319 319 0 0 1 3.871-5.086 139 139 0 0 1 4.055-4.949c.078-.101.164-.195.238-.277a135 135 0 0 1 4-4.465l-2.398-6.742c-.286.27-.59.535-.899.82a137 137 0 0 0-3.535 3.402 222 222 0 0 0-4.258 4.368 221 221 0 0 0-4.09 4.472 261 261 0 0 0-3.527 4.098l-.137.156 3.067 9.164c1.222-1.652 2.418-3.324 3.613-4.96Zm0 0\"/><path fill=\"url(#E)\" d=\"M52.254 85.602c-.8 1.476-1.602 3-2.422 4.566 0 .02-.027.039-.031.059-.121.23-.242.433-.34.66-.555 1.05-1.023 2-2.137 4.144a8.7 8.7 0 0 1 2.692 4.32 7.08 7.08 0 0 0-1.551-5.128c6.23 1.203 11.89.402 15.344-3.778.3-.379.597-.777.882-1.203a6.09 6.09 0 0 1-6.129 1.274 17.04 17.04 0 0 0 9.504-5.715 36 36 0 0 0 1.727-2.235 13.82 13.82 0 0 1-13.531 2.297l-3.555-.125c-.152.305-.309.575-.453.864m0 0\"/><path fill=\"url(#F)\" d=\"M55.031 78c1.047-1.844 2.117-3.703 3.2-5.602a296 296 0 0 1 3.203-5.406c1.097-1.808 2.195-3.625 3.3-5.437a282 282 0 0 1 3.47-5.5c1.175-1.825 2.347-3.598 3.515-5.383a87 87 0 0 1 1.3-1.914c.739-1.09 1.497-2.18 2.254-3.262.032-.059.082-.121.114-.184l-3.028-9.136a3 3 0 0 1-.265.316c-1.242 1.504-2.504 3.024-3.739 4.598-1.23 1.57-2.488 3.2-3.707 4.867a265 265 0 0 0-3.039 4.23c-.199.282-.402.586-.593.868-1.2 1.797-2.364 3.558-3.387 5.25a113 113 0 0 0-3.156 5.5 134 134 0 0 0-1.735 3.34c-.441.91-.867 1.843-1.289 2.757a85 85 0 0 0-2.644 6.535l3.082 9.2c.8-1.461 1.625-2.914 2.445-4.403.219-.394.469-.8.7-1.234Zm0 0\"/><path fill=\"url(#G)\" d=\"M48.68 74.742a68 68 0 0 0-2.332 8.043c0 .086-.051.192-.063.278a17.5 17.5 0 0 0-4.344-5.004 24.35 24.35 0 0 1 3.22 11.894 11.2 11.2 0 0 1-5.356-1.742 11.1 11.1 0 0 0 4.27 3.531 13.6 13.6 0 0 0-6.985 2.301 13.93 13.93 0 0 1 7.933-.273c-4.222 7.957-8.543 16.808-12.964 26.23a2.6 2.6 0 0 0 2-1.457c.8-1.703 6.043-12.902 13.812-27.488.219-.399.453-.82.672-1.254l.184-.348c.824-1.52 1.671-3.082 2.55-4.68.207-.37.399-.722.602-1.09v-.019l-3.082-9.2q-.07.136-.117.278m0 0\"/><path fill=\"url(#H)\" d=\"M75.977 46.176c-.168.238-.313.465-.48.703-.485.73-.99 1.453-1.477 2.2a208 208 0 0 1-1.653 2.483c-.281.426-.566.848-.855 1.293-.86 1.317-1.723 2.676-2.617 4.075a348 348 0 0 0-3.34 5.383 503 503 0 0 0-3.317 5.523c-1.062 1.816-2.152 3.676-3.261 5.602-.985 1.718-1.977 3.5-3 5.324-.055.078-.094.183-.149.265a530 530 0 0 0-3.058 5.602.3.3 0 0 0-.067.125l3.555.121c-.063-.031-.13-.04-.215-.074a25.1 25.1 0 0 0 14.43-5.559 33.8 33.8 0 0 0 5.472-5.64 55 55 0 0 0 3.825-5.668 87 87 0 0 0 3.257-6.043c-1.113.37-2.27.59-3.441.648l-.676.035h-.687a15.28 15.28 0 0 0 9.304-6.75 14.3 14.3 0 0 1-4.992 1.375c-.27.028-.558.028-.847.031h-.22a16 16 0 0 0 3.778-1.437c.234-.121.465-.254.684-.402.343-.215.664-.453.984-.696.207-.168.402-.32.606-.488q.707-.614 1.304-1.34c.137-.156.266-.293.375-.457.168-.238.332-.457.477-.683a41 41 0 0 0 1.758-2.735q.352-.599.629-1.129c.066-.144.148-.265.218-.398.192-.403.375-.746.508-1.059.16-.36.305-.73.426-1.11a2.3 2.3 0 0 1-.5.235 17 17 0 0 1-5.059.946l3.266.125-3.266-.125q-.036-.018-.066 0a6 6 0 0 0-.516 0c.028 0 .07 0 .094-.032l-11.16-.402c.02.074-.008.113-.031.133m0 0\"/><path fill=\"url(#I)\" d=\"M91.602 25.809a161 161 0 0 0-3.946 4.656q-.124.13-.219.277a179 179 0 0 0-3.957 5.055c-1.199 1.598-2.48 3.297-3.816 5.16-1.168 1.598-2.348 3.316-3.602 5.121l11.16.402a13.55 13.55 0 0 0 6.712-3.847 45 45 0 0 0 1.351-1.508A66 66 0 0 0 99.313 36a56 56 0 0 0 3.199-5.004 30 30 0 0 0 1.402-2.766c.309-.73.566-1.421.8-2.097-4.374.113-8.75.004-13.112-.324m0 0\"/><use href=\"#j\"/><use href=\"#J\" mask=\"url(#o)\"/><path fill=\"url(#K)\" d=\"M78.953 62.621h-.687a7 7 0 0 1 .687 0m0 0\"/>","width":128,"height":128},"mercadopago":{"body":"<defs><linearGradient id=\"a\" x1=\"0%\" x2=\"100%\" y1=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#009EE3\"/><stop offset=\"100%\" stop-color=\"#00B0FF\"/></linearGradient></defs><path fill=\"url(#a)\" d=\"M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155-.04 0-.074.023-.113.059-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126q.008-.062-.03-.092l-.05-.04-.047.043a.728.726 0 0 1-.505.203.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722.364 0 .675.27.721.63l.026.195.11-.165c.01-.018.307-.46.852-.46.102 0 .21.016.316.05.434.13.508.52.519.68.008.094.075.1.09.1.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225q.193 0 .402.09c.69.293.379 1.158.374 1.167-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93.936.934 0 0 1-.94.928m7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07q-.274 0-.58.095c-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258q-.03-.037.04-.125l.008-.008 1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7 7 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66-.962 0-1.925-.229-2.858-.68-.05-.022-1.22-.567-2.44-.57q-.049 0-.096.002c-1.434.033-2.24.536-2.782.976-.528.013-.982.138-1.388.25-.361.1-.673.186-.979.185-.125 0-.35-.01-.37-.012-.35-.01-2.115-.437-3.518-.962q-.213.15-.415.31c1.466.593 3.25 1.053 3.812 1.089.157.01.323.027.491.027.372 0 .744-.103 1.104-.203.213-.059.446-.123.692-.17l-.196.194-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271q.23 0 .43-.044c.427-.095.874-.448 1.349-.82.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472.835.62 4.531 3.815 4.566 3.846.002.002.238.203.22.537-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543-.074-.06-.146-.115-.22-.115a.12.12 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395q.017.367-.35.606a.957.955 0 0 1-.526.171.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.13.13 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012q-.16-.027-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98-.059-.05-.133-.11-.21-.11a.13.13 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.2.2 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576 1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125q-.22 0-.42.075a1.153 1.15 0 0 0-.671-.564 1.52 1.515 0 0 0-.494-.085q-.421 0-.767.242a1.168 1.165 0 0 0-.903-.43 1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189 4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442 1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08q.135 0 .266-.034c.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094q.183 0 .355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41.221.121.688.341 1.163.341q.09.001.175-.01c.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058.255 0 .501-.086.75-.265.244-.174.418-.424.444-.637v-.01q.125.026.251.026c.265 0 .527-.082.773-.242.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194 1.04 1.04 0 0 0 .502-.808 1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492 27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293S.465 15.572.465 11.545 5.63 4.252 12.004 4.252c6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203 7.347 0 12-3.67 12-8.204z\"/>","width":24},"mongodb":{"body":"<g fill=\"none\"><rect width=\"256\" height=\"256\" fill=\"#023430\" rx=\"60\"/><path fill=\"#10aa50\" d=\"M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862-7.047 6.283-36.977 30.673-39.496 83.486-2.347 49.242 36.2 79.605 41.292 82.744 3.916 1.927 8.685.041 11.012-1.728 18.581-12.752 43.969-46.75 35.786-94.773\"/><path fill=\"#b8c4c2\" d=\"M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235 0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397\"/><path fill=\"#12924f\" d=\"M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609 8.203 47.941-17.047 81.849-35.608 94.684\"/></g>","height":256},"nats":{"body":"<path fill=\"#34a574\" d=\"M128 0h128v103.768H128z\"/><path fill=\"#27aae1\" d=\"M0 0h128v103.768H0z\"/><path fill=\"#8dc63f\" d=\"M256 103.863v103.769h-84.193v57.395l-62.622-57.205 18.815-.76V103.863z\"/><path fill=\"#375c93\" d=\"M128 103.863v120.678l-18.815-16.719H0V103.863z\"/><path fill=\"#fff\" d=\"M181.024 134.177V48.273h30.599v111.086H165.25l-93.6-87.424v87.519H40.956V48.273h47.988z\"/>","height":266},"nest":{"body":"<path fill=\"#df234f\" d=\"M75.323.4c-.898 0-1.796.199-2.594.498 1.696 1.098 2.594 2.594 3.093 4.29 0 .2.1.4.1.599 0 .2.1.399.1.598.1 2.894-.799 3.293-1.397 4.989-.998 2.194-.698 4.589.499 6.484.1.2.2.5.399.699-1.297-8.38 5.686-9.578 6.983-12.172.1-2.294-1.795-3.79-3.292-4.888C77.718.599 76.52.399 75.324.399ZM85.8 2.194c-.1.798 0 .599-.1.998 0 .299 0 .598-.1.898-.1.299-.1.499-.2.798s-.199.499-.299.798c-.1.2-.2.399-.3.698-.099.1-.199.3-.298.4-.1.1-.1.199-.2.299-.2.2-.3.498-.499.698l-.598.599c-.2.2-.4.399-.599.498-.698.5-1.496.898-2.195 1.397-.2.2-.499.3-.698.499-.2.2-.4.3-.599.499l-.598.598c-.2.2-.4.4-.5.699-.199.2-.299.499-.498.698-.1.3-.2.499-.399.798-.1.3-.2.5-.3.798-.1.3-.199.599-.199.798 0 .1 0 .3-.1.4 0 .1 0 .299-.1.399v1.396c0 .3 0 .5.1.798 0 .3.1.5.2.799s.2.498.3.798c.099.2.199.299.199.499l-7.583-2.894a53 53 0 0 0-3.79-.997c-.699-.2-1.397-.3-2.096-.5a62 62 0 0 0-5.986-.897h-.2c-1.995-.2-3.89-.3-5.885-.3-1.497 0-2.894.1-4.29.2-1.996.1-3.99.4-5.986.699l-1.497.299c-.997.2-1.995.399-2.993.698-.499.1-.997.3-1.496.4-.499.199-.998.398-1.397.598s-.698.3-1.097.499c-.1 0-.1 0-.2.1-.3.199-.598.299-.898.498-.1 0-.2.1-.2.1-.398.2-.698.4-.997.499-.2.1-.499.2-.698.3-.1.099-.2.099-.3.199-.299.2-.598.299-.898.498-.299.2-.598.3-.798.5-.2.199-.499.299-.698.498 0 0-.1 0-.1.1-.2.1-.399.3-.598.499l-.1.1c-.2.1-.3.299-.499.399-.1 0-.1.1-.2.1-.199.1-.299.299-.498.398 0 .1-.1.1-.1.1l-.599.599-.1.1-.598.598s0 .1-.1.1l-.499.499c-.1.1-.2.1-.2.2l-.598.598c0 .1-.1.1-.1.2l-.798.797-.1.1c-.498.599-1.097 1.098-1.695 1.597s-1.198.997-1.896 1.496-1.297.898-1.995 1.297-1.397.698-2.095.998c-.699.299-1.397.598-2.095.798-1.397.3-2.794.898-3.991.997 0-.498-.3-.399-.599-.399-.299.1-.598.1-.798.2-.3.1-.499.2-.798.3a3 3 0 0 0-.798.398c-.2.2-.499.3-.698.5-.2.199-.5.398-.699.598-.2.2-.499.399-.698.598-.2.2-.4.4-.599.699-.2.299-.399.498-.499.798-.199.2-.299.499-.498.798-.1.3-.3.598-.4.898l-.299.898c-.1.299-.1.498-.2.798v.1c-.1.3-.1.698-.1.898.1-.1.1.1.1.299v.399c0 .2.1.399.1.598.1.2.1.4.2.599.099.2.199.399.398.599.1.2.3.399.4.598.199.2.398.4.598.499.2.2.399.4.598.499.798.698.998.898 1.996 1.496.2.1.299.2.499.3h.1v.2c0 .298.1.498.199.797.1.3.2.599.3.798l.298.599c0 .1.1.1.1.2.1.299.3.498.4.698.199.2.299.499.498.698l.599.599.598.598h.1c.2.2.399.3.599.5s.499.299.698.398c.2.1.499.3.798.4.2.1.4.199.698.199 0 0 .1 0 .1.1.1 0 .3.1.4.1-.1 1.795-.1 3.491.1 4.09.298.698 1.795-1.397 3.192-3.691-.2 2.294-.3 4.988 0 5.786.399.798 2.294-1.796 4.09-4.59 23.345-5.387 44.695 10.775 46.99 33.622-.4-3.592-4.79-5.587-6.884-5.088-.998 2.394-2.694 5.587-5.387 7.482q.3-3.293-.3-6.584c-.698 2.993-2.095 5.886-4.09 8.28-3.093.2-6.285-1.297-7.882-3.591-.1-.1-.2-.3-.299-.4-.1-.199-.2-.498-.3-.698s-.199-.499-.199-.698v-1.197c0-.2.1-.5.2-.699s.1-.499.2-.698c.099-.2.199-.499.398-.698.599-1.597.599-2.894-.499-3.592l-.598-.3c-.1 0-.3-.099-.4-.099s-.199-.1-.299-.1c-.199-.1-.498-.1-.698-.2s-.499-.1-.698-.1c-.2 0-.5-.099-.699-.099h-.498c-.3 0-.5 0-.699.1-.2 0-.499.1-.698.1-.2.1-.499.1-.699.2-.199.099-.399.199-.698.298l-.599.3c-7.682 4.988-3.092 16.76 2.096 20.152-1.996.4-3.991.798-4.59 1.198l-.1.1c1.397.897 2.894 1.596 4.49 2.194 2.095.699 4.39 1.297 5.387 1.597 2.694.598 5.488.798 8.281.598 14.566-.998 26.538-12.171 28.732-26.737.1.3.1.598.2.898.1.598.2 1.197.3 1.895.1.3.1.599.1.898v.1c0 .3.099.599.099.898 0 .399.1.698.1 1.097v4.19c0 .3-.1.5-.1.799v.299c0 .3-.1.599-.1.998-.1.299-.1.598-.2.898v.1c-.1.299-.1.598-.199.897v.1c-.1.3-.1.599-.2.898v.1l-.299.898v.1c-.1.299-.2.698-.299.997-.1.3-.2.599-.4.998-.099.299-.199.698-.398.997-.1.3-.3.599-.4.998-.099.3-.299.599-.398.898 0 .1-.1.2-.1.2s0 .1-.1.1c-2.095 4.289-5.287 8.08-9.278 11.073-.3.2-.499.4-.798.599-.1.1-.2.1-.2.2-.2.199-.499.299-.698.498l.1.2c.498-.1.898-.1 1.396-.2.898-.1 1.696-.3 2.594-.499.2 0 .5-.1.699-.2.2 0 .299-.1.498-.1s.5-.099.699-.099c.2-.1.399-.1.598-.2 3.293-.797 6.485-1.895 9.578-3.192-5.288 7.183-12.271 12.97-20.452 16.76 3.791-.299 7.582-.897 11.273-1.995a52.47 52.47 0 0 0 31.127-24.941c-1.396 7.582-4.39 14.865-8.879 21.25 3.193-2.095 6.086-4.59 8.78-7.283 7.382-7.682 12.27-17.559 13.867-28.034 1.098 5.188 1.497 10.575.998 15.863 23.844-33.222 1.995-67.641-7.183-76.72 0-.1-.1-.1-.1-.2 0 .4 0 .798-.1 1.198-.1.798-.2 1.496-.3 2.194-.199.699-.398 1.497-.598 2.195-.2.699-.499 1.397-.798 2.095s-.599 1.397-.998 1.996-.798 1.297-1.197 1.895-.898 1.197-1.397 1.796c-.498.599-.997 1.097-1.596 1.696-.3.3-.598.599-.997.798-.3.2-.5.4-.799.698-.598.5-1.197.898-1.895 1.297-.599.4-1.297.799-1.995 1.098l-2.096.898c-.698.299-1.396.499-2.095.698-.698.2-1.496.4-2.195.499-.798.1-1.496.2-2.194.3-.5 0-1.098.099-1.597.099-.798 0-1.496-.1-2.194-.1-.799-.1-1.497-.2-2.195-.3a7.9 7.9 0 0 1-2.195-.598c.698-.1 1.496-.1 2.195-.299.798-.1 1.496-.3 2.195-.499.698-.2 1.496-.399 2.095-.698l2.095-.898c.698-.3 1.297-.698 1.995-1.097.599-.4 1.297-.898 1.896-1.297.598-.5 1.197-.998 1.696-1.497.598-.499 1.097-1.097 1.596-1.596.499-.599.998-1.197 1.397-1.796.1-.1.1-.2.2-.3.298-.498.697-1.097.997-1.595a19 19 0 0 0 .997-1.996c.3-.698.6-1.397.799-2.095l.598-2.095c.1-.798.3-1.496.3-2.195.1-.798.1-1.496.1-2.195 0-.498 0-1.097-.1-1.596-.1-.798-.2-1.496-.3-2.195-.1-.798-.3-1.496-.499-2.195-.2-.698-.499-1.396-.698-2.095-.3-.698-.599-1.396-.898-1.995-.399-.698-.698-1.297-1.097-1.995-.4-.599-.898-1.198-1.297-1.796-.499-.599-.998-1.098-1.497-1.696-.299-.3-.598-.599-.898-.798-1.496-1.197-2.993-2.195-4.589-3.193-.2-.1-.399-.2-.698-.3-1.297-1.096-2.295-1.396-3.292-1.795Z\"/>","width":128,"height":128},"next":{"body":"<g fill=\"none\"><rect width=\"256\" height=\"256\" fill=\"#f4f2ed\" rx=\"60\"/><path fill=\"#000\" d=\"M121.451 28.054c-.43.039-1.799.176-3.031.273-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565 0 7.449.098 9.072.9 14.565 5.434 37.556 32.16 69.111 68.406 80.802 6.491 2.092 13.333 3.519 21.114 4.379 3.031.332 16.129.332 19.16 0 13.431-1.486 24.809-4.809 36.031-10.538 1.72-.879 2.053-1.114 1.818-1.309-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639-.078-.019-.156 13.158-.195 29.248-.059 28.172-.078 29.306-.43 29.97-.508.958-.899 1.349-1.721 1.78-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88.04-39.198.058-39.218.606-.763c.313-.41.978-.938 1.447-1.192.801-.391 1.114-.43 4.496-.43 3.989 0 4.653.156 5.69 1.29.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989.802-.528c7.096-4.614 14.604-11.183 20.547-18.026 12.649-14.526 20.802-32.238 23.539-51.124.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801-6.393-2.073-13.196-3.5-20.821-4.36-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306.156.509.195 11.379.156 35.875l-.059 35.152-6.197-9.502-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257.313-1.094.997-1.954 1.936-2.463.801-.41 1.095-.45 4.164-.45 2.894 0 3.402.04 4.047.392\"/></g>","height":256},"nextui":{"body":"<path fill=\"currentColor\" d=\"M6.353 0h11.294A6.353 6.353 0 0 1 24 6.353v11.294A6.353 6.353 0 0 1 17.647 24H6.353A6.353 6.353 0 0 1 0 17.647V6.353A6.353 6.353 0 0 1 6.353 0m7.755 6.913h-.933v6.702a2.9 2.9 0 0 1-.362 1.45c-.24.424-.596.77-1.025 1q-.664.366-1.553.365-.888 0-1.55-.364a2.6 2.6 0 0 1-1.024-1 2.87 2.87 0 0 1-.365-1.45V6.912h-.933v6.767a3.56 3.56 0 0 0 .489 1.862c.327.547.798.994 1.362 1.292q.873.474 2.021.474 1.154 0 2.024-.471a3.47 3.47 0 0 0 1.36-1.293c.33-.565.5-1.21.49-1.864zm3.648 10.22V6.914h-.933v10.22h.933Z\"/>","width":24},"node":{"body":"<path fill=\"#388e3c\" d=\"M15.354 2.831 4.647 8.861A1.25 1.25 0 0 0 4 9.953V22.03a1.26 1.26 0 0 0 .646 1.095l10.709 6.039a1.32 1.32 0 0 0 1.294 0l10.705-6.038A1.26 1.26 0 0 0 28 22.03V9.96a1.25 1.25 0 0 0-.647-1.093L16.65 2.836a1.32 1.32 0 0 0-1.294 0Z\"/><path fill=\"#4caf50\" d=\"M4.305 22.784a1.3 1.3 0 0 0 .381.328l9.185 5.18 1.53.862a1.3 1.3 0 0 0 .745.166 1.4 1.4 0 0 0 .254-.046L27.693 9.082a1.3 1.3 0 0 0-.294-.234L20.38 4.894l-3.705-2.082a1.3 1.3 0 0 0-.335-.13Z\"/><path fill=\"#66bb6a\" d=\"M27.693 22.784a1.3 1.3 0 0 1-.38.328l-9.185 5.18-1.53.862a1.3 1.3 0 0 1-.745.166 1.4 1.4 0 0 1-.254-.046L4.305 9.08a1.3 1.3 0 0 1 .295-.234l7.018-3.952 3.705-2.082a1.3 1.3 0 0 1 .335-.13Z\"/>","width":32,"height":32},"postgres":{"body":"<path fill=\"currentColor\" d=\"M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99q.13-1.094.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351\"/><path fill=\"#336791\" d=\"M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686z\"/><path fill=\"#fff\" d=\"M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28q.423.059.842.058c3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35m88.784.073c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863q.387 0 .78-.054c2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225\"/><path fill=\"#fff\" d=\"M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a530 530 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92q.016.2.035.398a118 118 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36m-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a37 37 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813m-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171 171 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016M66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36 36 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426m22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34m1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526m69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.4 15.4 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25m68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473q.469.383 1.032.756c6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772\"/>","height":264},"react":{"body":"<path fill=\"#00d8ff\" d=\"M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848 156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165 168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923 168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026 347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815 329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627 310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695 359 359 0 0 1 11.036 20.54 330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86\"/>","height":228},"sass":{"body":"<path fill=\"#cb6699\" fill-rule=\"evenodd\" d=\"M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a12 12 0 0 0-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.4 10.4 0 0 0 2.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.7 3.7 0 0 0-.48 1.364 1.737 1.737 0 0 0 1.383 1.971 9.7 9.7 0 0 0 2.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.87.87 0 0 0-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.4 25.4 0 0 0-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a3 3 0 0 0-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.64 11.64 0 0 0-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172 172 0 0 1 1.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.6 2.6 0 0 1-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.5 39.5 0 0 1-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a41 41 0 0 0-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507M54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.7 1.7 0 0 1-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.3 6.3 0 0 1 1.595-.706c.85-.239 1.372.154 1.231 1.006m17.164 21.868 6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203m19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.4 2.4 0 0 1 .093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982\" clip-rule=\"evenodd\"/>","width":128,"height":128},"setting":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M10.55 2.44a2 2 0 0 0 2.9 0l.94-1a2 2 0 0 1 3.41 1.37l-.07 1.4a2 2 0 0 0 .57 1.49 2 2 0 0 0 1.49.57l1.4-.07a2 2 0 0 1 1.41 3.41l-1 .94a2 2 0 0 0 0 2.9l1 .94a2 2 0 0 1-1.41 3.41l-1.4-.07a2 2 0 0 0-2.06 2.06l.07 1.4a2 2 0 0 1-3.41 1.41l-.94-1a2 2 0 0 0-2.9 0l-.94 1a2 2 0 0 1-3.41-1.41l.07-1.4a2 2 0 0 0-.57-1.49 2 2 0 0 0-1.49-.57l-1.4.07a2 2 0 0 1-1.41-3.41l1-.94a2 2 0 0 0 0-2.9l-1-.94A2 2 0 0 1 2.81 6.2l1.4.07A2 2 0 0 0 5.7 5.7a2 2 0 0 0 .57-1.49l-.07-1.4A2 2 0 0 1 9.61 1.4zm-3.8 12.81H18\"/><path d=\"M8 7.75h4v7.5H8zm4 2.75h4v4.75h-4z\"/></g>","width":24},"shadcn":{"body":"<path fill=\"currentColor\" d=\"M22.219 11.784 11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305\"/>","width":24},"sparkles":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"M259.92 262.91 216.4 149.77a9 9 0 0 0-16.8 0l-43.52 113.14a9 9 0 0 1-5.17 5.17L37.77 311.6a9 9 0 0 0 0 16.8l113.14 43.52a9 9 0 0 1 5.17 5.17l43.52 113.14a9 9 0 0 0 16.8 0l43.52-113.14a9 9 0 0 1 5.17-5.17l113.14-43.52a9 9 0 0 0 0-16.8l-113.14-43.52a9 9 0 0 1-5.17-5.17M108 68 88 16 68 68 16 88l52 20 20 52 20-52 52-20zm318.67 49.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144z\"/>","width":512,"height":512},"spring_boot":{"body":"<path fill=\"#6DB33F\" d=\"m23.693 10.706-4.73-8.185c-.41-.71-1.417-1.294-2.24-1.294h-9.45c-.82 0-1.831.584-2.24 1.294L.306 10.706c-.41.71-.41 1.873 0 2.584l4.725 8.189c.41.71 1.417 1.294 2.24 1.294h9.455c.82 0 1.826-.584 2.24-1.294l4.726-8.19c.41-.71.41-1.873 0-2.583zM10.976 5.755c0-.537.438-.975.974-.975s.975.438.975.975v5.821a.976.976 0 0 1-1.948 0zm.974 12.43a6.616 6.616 0 0 1-6.607-6.609A6.64 6.64 0 0 1 8.01 6.272a.866.866 0 0 1 1.214.18.866.866 0 0 1-.178 1.213 4.876 4.876 0 0 0 5.812 7.827 4.88 4.88 0 0 0 1.967-3.916 4.9 4.9 0 0 0-1.986-3.925.87.87 0 0 1-.183-1.214.87.87 0 0 1 1.214-.183 6.63 6.63 0 0 1 2.687 5.322 6.613 6.613 0 0 1-6.608 6.608\"/>","width":24},"spring_framework":{"body":"<path fill=\"#77bc1f\" d=\"M116.452 6.643a59 59 0 0 1-6.837 12.136A64.25 64.25 0 0 0 64.205-.026C28.984-.026 0 28.982 0 64.242a64.32 64.32 0 0 0 19.945 46.562l2.368 2.1a64.22 64.22 0 0 0 41.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7M29.067 111.17a5.5 5.5 0 0 1-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502s2.485-5.501 5.487-5.501c1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735m87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z\"/>","width":128,"height":128},"spring_security":{"body":"<path fill=\"#6DB33F\" d=\"M20.59 2.066 11.993 0 3.41 2.066v6.612h4.557a3.8 3.8 0 0 0 0 .954H3.41v3.106C3.41 19.867 11.994 24 11.994 24s8.582-4.133 8.582-11.258V9.635h-4.545a3.6 3.6 0 0 0 0-.954h4.558zM12 12.262h-.006a3.109 3.109 0 1 1 .006 0m-.006-4.579a.804.804 0 0 0-.37 1.52v.208l.238.237v.159l.159.159v.159l-.14.14.15.246v.159l-.16.189.223.222.246-.246V9.218a.804.804 0 0 0-.346-1.535m0 .836a.299.299 0 1 1 .298-.299.3.3 0 0 1-.298.3z\"/>","width":24},"tailwind":{"body":"<path fill=\"#38bdf8\" d=\"M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0\"/>","width":128,"height":128},"terminal":{"body":"<path fill=\"currentColor\" d=\"M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75M7.48 9.424a.75.75 0 1 0-.96 1.152l.234.195c.659.55 1.09.91 1.366 1.216.262.29.287.427.287.513s-.025.222-.287.513c-.277.306-.707.667-1.366 1.216l-.234.195a.75.75 0 0 0 .96 1.152l.277-.23c.605-.504 1.12-.933 1.476-1.328.378-.42.674-.901.674-1.518s-.296-1.099-.674-1.518c-.356-.395-.871-.824-1.476-1.328z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176\" clip-rule=\"evenodd\"/>","width":24},"typescript":{"body":"<g fill=\"none\"><rect width=\"256\" height=\"256\" fill=\"#007acc\" rx=\"60\"/><path fill=\"#fff\" d=\"m56.611 128.849-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224 2.357 2.52 5.851 7.112 6.136 8.209.081.325-11.053 7.802-17.798 11.987-.244.163-1.22-.894-2.317-2.519-3.291-4.795-6.745-6.868-12.028-7.233-7.761-.529-12.759 3.535-12.718 10.321 0 1.991.284 3.169 1.097 4.795 1.706 3.535 4.876 5.648 14.832 9.955 18.326 7.884 26.168 13.085 31.045 20.48 5.445 8.249 6.664 21.415 2.966 31.208-4.063 10.646-14.141 17.879-28.323 20.277-4.388.772-14.791.65-19.504-.203-10.281-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.121-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.259 2.357-2.154 3.332-4.389 3.332-7.68 0-2.967-.366-4.267-1.91-6.502-1.991-2.844-6.054-5.242-17.595-10.24-13.206-5.689-18.895-9.224-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.616-1.219-12.678-.447-16.335 2.722-12.759 12.353-21.658 26.25-24.3 4.511-.853 14.994-.528 19.424.569\"/></g>","height":256},"uxui":{"body":"<path fill=\"currentColor\" d=\"M6.595 2.084A.75.75 0 0 1 7 2.75c0 1.17.403 1.848.867 2.519q.066.096.138.196C8.448 6.093 9 6.873 9 8a3.5 3.5 0 1 1-7 0c0-.823.084-1.72.649-2.72.552-.977 1.526-1.986 3.17-3.143a.75.75 0 0 1 .776-.053m2.627 3.39A6 6 0 0 1 18.48 10h-2.729a3.75 3.75 0 0 0-3.75 3.75v2.73a6 6 0 0 1-2.012-.53c-.016.489-.05 1.023-.1 1.583a7.5 7.5 0 0 0 2.112.45v2.267a3.75 3.75 0 0 0 3.75 3.75h6.5a3.75 3.75 0 0 0 3.75-3.75v-6.5a3.75 3.75 0 0 0-3.75-3.75h-2.266A7.5 7.5 0 0 0 8.386 4.229c.09.154.192.308.305.471q.057.085.13.184c.118.166.259.362.401.59m13.03 6.026a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25h-6.5a2.25 2.25 0 0 1-2.25-2.25v-2.316a7.504 7.504 0 0 0 6.433-6.434zm-8.75 4.917V13.75a2.25 2.25 0 0 1 2.25-2.25h2.666a6.005 6.005 0 0 1-4.917 4.917M2 15.287c0-1.003.08-2.248.516-3.274.833.62 1.866.987 2.984.987a4.98 4.98 0 0 0 2.986-.989c.435 1.027.514 2.274.514 3.276 0 1.663-.264 4.21-.748 6.35-.24 1.068-.546 2.079-.923 2.84-.187.38-.412.737-.687 1.01-.277.274-.66.513-1.14.513s-.862-.239-1.139-.514c-.275-.272-.5-.629-.688-1.008-.377-.762-.683-1.773-.925-2.84-.485-2.141-.75-4.688-.75-6.35\"/>","width":28,"height":28}},"width":256,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$5 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/node_modules/astro-icon/components/Icon.astro", void 0);

function MobileMenu({ locale, currentPath, children, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: () => setIsOpen(!isOpen),
        "aria-label": "Toggle menu",
        "aria-expanded": isOpen,
        "aria-controls": "mobile-menu",
        className: "relative z-[60]",
        children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6", "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "mobile-menu",
        className: `fixed top-0 right-0 h-screen w-full bg-primary-foreground border-l border-terciary z-[80] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"}`,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Mobile navigation menu",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-6 px-6 pb-6 border-b border-terciary border-dashed", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Menu" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                onClick: () => setIsOpen(false),
                "aria-label": "Close menu",
                className: "h-8 w-8 -mr-2",
                children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5", "aria-hidden": "true" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "nav",
            {
              className: "flex-1 overflow-y-auto px-6 py-4 space-y-1",
              "aria-label": "Primary navigation",
              children: menuItems.map((item) => /* @__PURE__ */ jsxs(
                "a",
                {
                  href: item.href,
                  onClick: () => setIsOpen(false),
                  className: "block px-4 py-3 rounded-md hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-base", children: item.label }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: item.text })
                  ]
                },
                item.href
              ))
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "px-6 py-4 border-t border-terciary border-dashed", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(ModeToggle, { "aria-label": "Toggle theme", children }),
            /* @__PURE__ */ jsx(
              ModeLang,
              {
                currentLocale: locale,
                currentPath,
                "aria-label": "Change language"
              }
            )
          ] }) })
        ] })
      }
    )
  ] });
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "es"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const $$Astro$4 = createAstro();
const $$CustomLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CustomLink;
  const linkVariants = cva("flex items-center space-x-2", {
    variants: {
      variant: {
        default: "hover:underline hover:decoration-dotted hover:text-terciary underline-offset-4 font-titan-one",
        primary: "underline text-terciary underline-offset-4 hover:decoration-dotted hover:text-primary font-titan-one",
        secondary: "h-9 w-max rounded-md bg-background px-4 py-2 text-base font-medium hover:bg-foreground/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
      },
      size: {
        default: "text-lg lg:text-xl",
        xl: "text-lg lg:text-2xl",
        md: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  });
  const {
    variant,
    size,
    href,
    className,
    descriptionTooltip,
    tooltip = true,
    ...rest
  } = Astro2.props;
  return renderTemplate`${tooltip ? renderTemplate`${renderComponent($$result, "CustomTooltip", null, { "client:only": "react", "description": descriptionTooltip ?? "", "client:component-hydration": "only", "client:component-path": "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/components/common/CustomTooltip", "client:component-export": "CustomTooltip" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(cn(linkVariants({ variant, size, class: className })), "class")}${spreadAttributes(rest)}>${renderSlot($$result2, $$slots["default"])}</a>` })}` : renderTemplate`<a${addAttribute(href, "href")}${addAttribute(cn(linkVariants({ variant, size, class: className })), "class")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/components/common/CustomLink.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const pathname = Astro2.url.pathname;
  const currentLang = Astro2.currentLocale || "en";
  const t = useTranslation(currentLang);
  const menuItems = [
    {
      href: getRelativeLocaleUrl(currentLang, "/"),
      label: t("navbar.home.title"),
      text: t("navbar.home.description")
    },
    {
      href: `/${currentLang}/#experience`,
      label: t("navbar.experience.title"),
      text: t("navbar.experience.description")
    },
    {
      href: `/${currentLang}/#projects`,
      label: t("navbar.projects.title"),
      text: t("navbar.projects.description")
    },
    {
      href: `/${currentLang}/#skills`,
      label: t("navbar.skills.title"),
      text: t("navbar.skills.description")
    },
    {
      href: `/${currentLang}/#education`,
      label: t("navbar.education.title"),
      text: t("navbar.education.description")
    },
    {
      href: getRelativeLocaleUrl(currentLang, "/about"),
      label: t("navbar.about.title"),
      text: t("navbar.about.description")
    },
    {
      href: getRelativeLocaleUrl(currentLang, "/blog"),
      label: t("navbar.blog.title"),
      text: t("navbar.blog.description")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" aria-label="Main navigation" class="w-full fixed top-0 left-0 right-0 z-20 transition-all duration-300"> <div class="max-w-7xl mx-auto h-20 flex items-center justify-between space-x-4 px-4"> <a${addAttribute(getRelativeLocaleUrl(currentLang, "/"), "href")} id="portfolio-text" aria-label="Go to homepage" class="opacity-0 -translate-x-4 transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "terminal", "size": 32, "aria-hidden": "true" })} </a> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center gap-2" aria-label="Main navigation"> ${renderComponent($$result, "CustomLink", $$CustomLink, { "href": getRelativeLocaleUrl(currentLang, "/"), "aria-label": "Home page", "tooltip": false, "variant": "secondary", "size": "md", "className": pathname === getRelativeLocaleUrl(currentLang, "/") ? "bg-foreground/10" : "" }, { "default": ($$result2) => renderTemplate`${t("navbar.home.title")}` })} ${renderComponent($$result, "CustomLink", $$CustomLink, { "href": getRelativeLocaleUrl(currentLang, "/about"), "aria-label": "About page", "tooltip": false, "variant": "secondary", "size": "md", "className": pathname === getRelativeLocaleUrl(currentLang, "/about") ? "bg-foreground/10" : "" }, { "default": ($$result2) => renderTemplate`${t("navbar.about.title")}` })} ${renderComponent($$result, "CustomLink", $$CustomLink, { "href": getRelativeLocaleUrl(currentLang, "/blog"), "aria-label": "Blog page", "tooltip": false, "variant": "secondary", "size": "md", "className": pathname === getRelativeLocaleUrl(currentLang, "/blog") ? "bg-foreground/10" : "" }, { "default": ($$result2) => renderTemplate`${t("navbar.blog.title")}` })} ${renderComponent($$result, "ModeToggle", ModeToggle, { "client:load": true, "aria-label": "Toggle theme", "client:component-hydration": "load", "client:component-path": "@/components/common/ModeToggle", "client:component-export": "ModeToggle" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "darkMode", "size": 28, "aria-hidden": "true" })} ` })} ${renderComponent($$result, "ModeLang", ModeLang, { "currentLocale": currentLang, "currentPath": pathname, "client:load": true, "aria-label": "Change language", "client:component-hydration": "load", "client:component-path": "@/components/common/ModeLang", "client:component-export": "ModeLang" })} </div> <!-- Mobile Navigation --> <div class="flex lg:hidden items-center gap-2 z-50"> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "locale": currentLang, "currentPath": pathname, "menuItems": menuItems, "client:component-hydration": "load", "client:component-path": "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/components/common/MobileMenu", "client:component-export": "MobileMenu" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "darkMode", "size": 28, "aria-hidden": "true" })} ` })} </div> </div> </nav> <!-- Espaciador para compensar el navbar fijo --> <div class="h-20" aria-hidden="true"></div> ${renderScript($$result, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/components/common/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/components/common/Navbar.astro", void 0);

const linkedin = "https://www.linkedin.com/in/agustin-castets";
const github = "https://github.com/cuter97";
const email = "aguscastets@gmail.com";
const drive = "https://drive.google.com/drive/u/0/folders/1hXpdzjBKPjZKnH9BEgujEksY69NROcLn";

const img = new Proxy({"src":"/_astro/gato.BC4YU3nx.webp","width":987,"height":831,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/assets/gato.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentLang = Astro2.currentLocale || "en";
  const t = useTranslation(currentLang);
  const navigationLinks = [
    { href: `/${currentLang}`, label: t("navbar.home.title") },
    { href: `/${currentLang}/#experience`, label: t("navbar.experience.title") },
    { href: `/${currentLang}/#projects`, label: t("navbar.projects.title") },
    { href: `/${currentLang}/#skills`, label: t("navbar.skills.title") },
    { href: `/${currentLang}/#education`, label: t("navbar.education.title") },
    { href: `/${currentLang}/about`, label: t("navbar.about.title") },
    { href: `/${currentLang}/blog`, label: t("navbar.blog.title") }
  ];
  const socialLinks = [
    { href: linkedin, label: "LinkedIn" },
    { href: github, label: "GitHub" },
    {
      href: currentLang === "es" ? "/pdf/cv-es.pdf" : "/pdf/cv-en.pdf",
      label: t("footer.nav.resume")
    }
  ];
  const resourceLinks = [
    { href: `/${currentLang}/rss.xml`, label: "RSS Feed" },
    { href: `/sitemap-index.xml`, label: "Sitemap" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-dashed border-gray-500 bg-[#1a1a1a] px-6 py-12"> <div class="mx-auto max-w-7xl"> <!-- Main content --> <div class="mb-12 flex flex-col gap-8 lg:flex-row"> <!-- Left: Tagline + Cat --> <div class="flex-1"> <p class="mb-6 text-base leading-relaxed text-gray-400"> ${t("footer.description")} </p> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "gato logo", "class": "mt-4 h-auto w-44" })} </div> <!-- Divider --> <div class="mx-8 hidden border-l border-dashed border-gray-500 lg:block"></div> <!-- Right: Links grid --> <div class="grid flex-[2] grid-cols-1 gap-8 md:grid-cols-3"> <!-- Navigation --> <nav> <h3 class="mb-4 font-bold text-white">${t("footer.nav.navegation")}</h3> <ul class="space-y-2 text-sm"> ${navigationLinks.map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="text-gray-400 hover:underline hover:decoration-dotted hover:text-terciary hover:underline-offset-4"> ${label} </a> </li>`)} </ul> </nav> <!-- Social Links --> <nav> <h3 class="mb-4 font-bold text-white">${t("footer.nav.links")}</h3> <ul class="space-y-2 text-sm"> ${socialLinks.map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:underline hover:decoration-dotted hover:text-terciary hover:underline-offset-4"> ${label} </a> </li>`)} </ul> </nav> <!-- Resources + Contact --> <div> <h3 class="mb-4 font-bold text-white">${t("footer.nav.resources")}</h3> <ul class="mb-8 space-y-2 text-sm"> ${resourceLinks.map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:underline hover:decoration-dotted hover:text-terciary hover:underline-offset-4"> ${label} </a> </li>`)} </ul> <div class="mt-8"> <p class="mb-2 text-lg font-bold text-white">${t("footer.nav.talk")}</p> <a${addAttribute(`mailto:${email}`, "href")} class="text-sm text-terciary transition-colors hover:text-white"> ${email} </a> </div> </div> </div> </div> <!-- Footer bottom --> <div class="border-t border-dashed border-gray-500 pt-8"> <div class="flex flex-col items-center justify-between gap-4 md:flex-row"> <p class="text-base text-gray-400"> ${t("footer.power")}${" "} <a href="https://astro.build" target="_blank" rel="noopener noreferrer" class="text-terciary transition-colors hover:text-white">
Astro
</a> </p> <p class="text-base text-gray-400">© Agustin Castets 2025</p> </div> </div> <!-- Portfolio logo --> <div class="mt-12"> <svg viewBox="0 0 1300 240" class="w-full opacity-70" fill="#ffffff" aria-label="Portfolio"> <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="titan-one, sans-serif" font-size="220" font-weight="900" letter-spacing="-0.02em">
PORTFOLIO
</text> </svg> </div> </div> </footer>`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/components/common/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const currentLang = Astro2.currentLocale || "es";
  const t = useTranslation(currentLang);
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title = t("meta.index.title"),
    description = t("meta.index.description"),
    image = "/favicon.svg",
    keywords = t("meta.index.keys")
  } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" title="Portfolio | Sitemap (Español)"${addAttribute(new URL("es/rss.xml", Astro2.site), "href")}><link rel="alternate" type="application/rss+xml" title="Portfolio | Sitemap (English)"${addAttribute(new URL("en/rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><!-- <link
  rel="preload"
  href="/fonts/titan-one.woff"
  as="font"
  type="font/woff"
  crossorigin
/>
<link
  rel="preload"
  href="/fonts/roboto-mono.woff"
  as="font"
  type="font/woff"
  crossorigin
/> --><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title} - Portfolio</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:keywords"${addAttribute(keywords, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:keywords"${addAttribute(keywords, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/components/BaseHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLang = Astro2.currentLocale || "en";
  const { description, image, keys, title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "> <head>", "", '<script>\n      // Script que se ejecuta inmediatamente para evitar parpadeo\n      (function () {\n        function applyTheme() {\n          try {\n            var stored = localStorage.getItem("theme");\n            var isDark = false;\n\n            if (stored === "dark") {\n              isDark = true;\n            } else if (stored === "theme-light") {\n              isDark = false;\n            } else {\n              // Sin preferencia almacenada -> seguir system\n              isDark =\n                window.matchMedia &&\n                window.matchMedia("(prefers-color-scheme: dark)").matches;\n            }\n\n            if (isDark) {\n              document.documentElement.classList.add("dark");\n            } else {\n              document.documentElement.classList.remove("dark");\n            }\n          } catch (e) {\n            // localStorage inaccesible -> usar system\n            if (\n              window.matchMedia &&\n              window.matchMedia("(prefers-color-scheme: dark)").matches\n            ) {\n              document.documentElement.classList.add("dark");\n            }\n          }\n        }\n\n        applyTheme();\n      })();\n    <\/script>', '</head> <body class="bg-background font-roboto-mono"> ', " ", " ", " ", " ", "</body></html>"])), addAttribute(currentLang, "lang"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, "keywords": keys }), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Toaster", null, { "client:only": "react", "position": "top-center", "richColors": true, "client:component-hydration": "only", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" }), renderScript($$result, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Button as B, $$Icon as a, $$CustomLink as b, github as c, drive as d, email as e, cn as f, getRelativeLocaleUrl as g, linkedin as l, useTranslation as u };
