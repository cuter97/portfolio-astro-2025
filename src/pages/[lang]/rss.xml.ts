import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, site }) => {
	const lang = params.lang; // 'es' or 'en'

	const posts = await getCollection('blog');

	const filteredPosts = posts.filter(post => post.data.lang === lang);

	const allItems = [
		...filteredPosts.map(({ data, id }) => ({
			title: data.title ?? '',
			description: data.description ?? '',
			link: `/${lang}/blog/${id.split("/")[1]}/`,
		})),
	];

	return rss({
		title: lang === 'es' ? 'Portfolio - Español' : 'Portfolio - English',
		description: lang === 'es' ? 'Blog sobre actualizaciones y proyectos.' : 'Blog about updates and projects.',
		site: site ?? '',
		xmlns: {
			media: 'http://search.yahoo.com/mrss/',
		},
		items: allItems,
	});
}
