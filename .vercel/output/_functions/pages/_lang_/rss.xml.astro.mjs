import rss from '@astrojs/rss';
import { g as getCollection } from '../../chunks/_astro_content_DgMNNbIt.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ params, site }) => {
  const lang = params.lang;
  const posts = await getCollection("blog");
  const filteredPosts = posts.filter((post) => post.data.lang === lang);
  const allItems = [
    ...filteredPosts.map(({ data, id }) => ({
      title: data.title ?? "",
      description: data.description ?? "",
      link: `/${lang}/blog/${id.split("/")[1]}/`
    }))
  ];
  return rss({
    title: lang === "es" ? "Portfolio - Español" : "Portfolio - English",
    description: lang === "es" ? "Blog sobre actualizaciones y proyectos." : "Blog about updates and projects.",
    site: site ?? "",
    xmlns: {
      media: "http://search.yahoo.com/mrss/"
    },
    items: allItems
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
