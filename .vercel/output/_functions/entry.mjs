import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_dJEZF-k3.mjs';
import { manifest } from './manifest_CKiTeB26.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/robot.txt.astro.mjs');
const _page3 = () => import('./pages/_lang_/about.astro.mjs');
const _page4 = () => import('./pages/_lang_/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/_lang_/blog.astro.mjs');
const _page6 = () => import('./pages/_lang_/projects/_slug_.astro.mjs');
const _page7 = () => import('./pages/_lang_/rss.xml.astro.mjs');
const _page8 = () => import('./pages/_lang_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/robot.txt.ts", _page2],
    ["src/pages/[lang]/about.astro", _page3],
    ["src/pages/[lang]/blog/[slug].astro", _page4],
    ["src/pages/[lang]/blog/index.astro", _page5],
    ["src/pages/[lang]/projects/[slug].astro", _page6],
    ["src/pages/[lang]/rss.xml.ts", _page7],
    ["src/pages/[lang]/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f28f27a4-e171-4774-a272-620bddf82ae6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
