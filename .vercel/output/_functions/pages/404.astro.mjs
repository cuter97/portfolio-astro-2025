import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CymEa2WV.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon, g as getRelativeLocaleUrl } from '../chunks/Layout_CNYjXPqU.mjs';
import { ChevronsLeft } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const currentLang = Astro2.currentLocale || "es";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error 404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-6xl mx-auto px-4 min-h-[70vh] flex items-center justify-center"> <div class="flex flex-col items-center justify-center space-y-6 sm:space-y-8 relative"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "404", "size": 100, "class": "text-light sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] drop-shadow-lg" })} <div class="text-light space-y-4 sm:space-y-6 flex flex-col items-center text-center px-4 max-w-2xl"> <h1 class="font-titan-one text-2xl sm:text-3xl md:text-4xl leading-tight">
Page Not Found
</h1> <p class="font-space-grotesk text-base sm:text-lg md:text-xl text-light/80 max-w-md">
Oops! The page you're looking for seems to have wandered off into the
          digital void.
</p> <a${addAttribute(getRelativeLocaleUrl(currentLang, "/"), "href")} class="inline-flex items-center gap-2 px-6 py-2 bg-muted-foreground/10 hover:bg-foreground hover:text-background rounded-full text-sm font-medium transition-colors"> ${renderComponent($$result2, "ChevronsLeft", ChevronsLeft, { "size": 20 })}
Go to Home
</a> <div class="pt-6 text-sm text-light/60"> <p>You might want to check the URL or return to the homepage.</p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
