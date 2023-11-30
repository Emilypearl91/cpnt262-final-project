import { error } from '@sveltejs/kit';
import { patterns }  from '../data.js';


export function load({ params }) {
	const post = patterns.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
};