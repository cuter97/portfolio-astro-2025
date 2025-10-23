import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_CymEa2WV.mjs';
import 'kleur/colors';
import { $ as $$Header } from '../../chunks/Header_CFyvFLn5.mjs';
import { u as useTranslation, $ as $$Layout, a as $$Icon } from '../../chunks/Layout_CNYjXPqU.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const currentLang = Astro2.currentLocale || "en";
  const t = useTranslation(currentLang);
  const workAreas = [
    {
      icon: "computer",
      title: t("about.areas.fullstack.title"),
      description: t("about.areas.fullstack.description"),
      color: "bg-chart-2"
    },
    {
      icon: "uxui",
      title: t("about.areas.design.title"),
      description: t("about.areas.design.description"),
      color: "bg-chart-1"
    },
    {
      icon: "sparkles",
      title: t("about.areas.learning.title"),
      description: t("about.areas.learning.description"),
      color: "bg-chart-3"
    },
    {
      icon: "setting",
      title: t("about.areas.optimization.title"),
      description: t("about.areas.optimization.description"),
      color: "bg-chart-5"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("navbar.about.title") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto relative"${addAttribute(renderTransition($$result2, "x7mpykye", "fade", "transition"), "data-astro-transition-scope")}> ${renderComponent($$result2, "Header", $$Header, { "className": "col-span-3 lg:sticky top-30 self-start" })} <article class="col-span-8 lg:col-start-5 mt-8 space-y-6 px-4 pb-16"> <header class="space-y-4"> <h3 class="text-3xl md:text-6xl font-titan-one"> ${t("about.greeting")}<span class="text-terciary">!</span> </h3> <p class="text-lg text-muted-foreground leading-relaxed"> ${t("about.intro.paragraph1")} </p> <div class="space-y-3"> <div class="space-y-1"> <h4 class="text-xl md:text-2xl font-titan-one text-terciary"> ${t("about.intro.title2")} </h4> <p class="text-base text-muted-foreground leading-relaxed"> ${t("about.intro.paragraph2")} </p> </div> <div class="space-y-1"> <h4 class="text-xl md:text-2xl font-titan-one text-terciary"> ${t("about.intro.title3")} </h4> <p class="text-base text-muted-foreground leading-relaxed"> ${t("about.intro.paragraph3")} </p> </div> </div> </header> <section class="space-y-6 pt-8"> <div class="flex items-center gap-3"> <span class="w-2 h-8 bg-terciary rounded-full"></span> <h3 class="text-3xl md:text-4xl font-titan-one"> ${t("about.areas.title")} </h3> </div> <ul class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${workAreas.map((area, index) => renderTemplate`<li${addAttribute(`group relative overflow-hidden rounded-2xl border-l-4 
                       hover:scale-105 hover:shadow-2xl 
                       transition-all duration-300 
                       animate-fade-in-up bg-card`, "class")}${addAttribute(`animation-delay: ${index * 100}ms`, "style")}>  <div${addAttribute(`absolute inset-0 ${area.color}`, "class")}> <svg class="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M0,0 C150,60 350,0 600,50 C850,100 1050,40 1200,80 L1200,0 L0,0 Z" fill="rgba(255,255,255,0.1)"></path> </svg> </div>  <div class="relative flex justify-between items-start p-6 pb-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": area.icon, "class": "w-12 h-12 md:w-14 md:h-14 text-background" })} </div>  <div${addAttribute(`relative p-6 pt-0 space-y-3 ${area.color} text-background`, "class")}> <h3 class="text-xl md:text-2xl font-titan-one"> ${area.title} </h3> <p class="text-sm md:text-base leading-relaxed opacity-95"> ${area.description} </p> </div> </li>`)} </ul> </section> </article> </main> ` })}`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/pages/[lang]/about.astro", "self");

const $$file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/pages/[lang]/about.astro";
const $$url = "/[lang]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
