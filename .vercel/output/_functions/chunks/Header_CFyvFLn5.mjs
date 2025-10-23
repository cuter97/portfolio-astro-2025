import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_CymEa2WV.mjs';
import 'kleur/colors';
import './index_CYyG6us9.mjs';
import { $ as $$Image } from './_astro_assets_-n0YpEIq.mjs';
import { Check, Mail, Github, Linkedin, FileText, Globe } from 'lucide-react';
import { u as useTranslation, B as Button, c as github, l as linkedin, e as email, g as getRelativeLocaleUrl, a as $$Icon } from './Layout_CNYjXPqU.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { C as CustomTooltip } from './CustomTooltip_B_CykPEC.mjs';
import { useState } from 'react';
import { toast } from 'sonner';

const img = new Proxy({"src":"/_astro/portfolio_img.BQ36AsY3.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/assets/portfolio_img.webp";
							}
							
							return target[name];
						}
					});

const ButtonsInfo = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const t = useTranslation(lang);
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3e3);
    });
    toast(t("sonner.title"), {
      description: email,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo")
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
    /* @__PURE__ */ jsx(CustomTooltip, { asChild: true, description: t("tooltips.copyEmail"), children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: handleCopy, className: copied ? "bg-chart-2  " : "", children: copied ? /* @__PURE__ */ jsx(Check, { className: "w-6 h-6 text-foreground" }) : /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-terciary" }) }) }),
    /* @__PURE__ */ jsx(CustomTooltip, { description: t("tooltips.viewGithub"), children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, children: /* @__PURE__ */ jsx("a", { href: github, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Github, { className: "w-6 h-6 text-terciary" }) }) }) }),
    /* @__PURE__ */ jsx(CustomTooltip, { description: t("tooltips.viewLinkedin"), children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, children: /* @__PURE__ */ jsx("a", { href: linkedin, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Linkedin, { className: "w-6 h-6 text-terciary" }) }) }) }),
    /* @__PURE__ */ jsx(CustomTooltip, { description: t("tooltips.viewResume"), children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, children: /* @__PURE__ */ jsx("a", { href: lang === "es" ? "/pdf/cv-es.pdf" : "/pdf/cv-en.pdf", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 text-terciary" }) }) }) })
  ] });
};

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const currentLang = Astro2.currentLocale || "en";
  const t = useTranslation(currentLang);
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`${className} flex flex-col items-center px-4 md:pb-20`, "class")}> <figure class="mb-5 border-2 rounded-xl border-terciary group relative overflow-hidden"> <a${addAttribute(getRelativeLocaleUrl(currentLang, "/about"), "href")} class="relative block"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "Foto de perfil de Agustin Castets", "width": 168, "class": "rounded-xl shadow-[0_0_300px_20px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:brightness-50" })} <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "idCard", "class": "w-14 h-14 text-white drop-shadow-lg" })} </div> </a> </figure> <div class="overflow-hidden text-center font-roboto-mono"> <h1 class="text-3xl font-titan-one mb-2"> ${t("header.name")} </h1> <h2 class="text-base text-balance text-muted-foreground mb-3"> ${t("header.profession")} </h2> </div> <div class="flex items-center text-sm text-muted-foreground mb-3"> ${renderComponent($$result, "Globe", Globe, { "className": "w-4 h-4 inline mr-1" })} ${t("header.place")} </div> ${renderComponent($$result, "ButtonsInfo", ButtonsInfo, { "client:load": true, "lang": currentLang, "client:component-hydration": "load", "client:component-path": "@/components/common/ButtonsInfo", "client:component-export": "ButtonsInfo" })} <div class="flex mt-4 items-center justify-center gap-2"> <span class="relative flex h-3 w-3"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span> </span> <span class="text-sm font-medium text-green-600 dark:text-green-400"> ${t("header.available")} </span> </div> </header>`;
}, "C:/Users/agusc/OneDrive/Escritorio/Portfolio/portfolio-astro/src/components/Header.astro", void 0);

export { $$Header as $ };
