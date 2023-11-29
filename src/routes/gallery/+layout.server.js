import { patterns } from "./data.js";

export function load() {
	return {
		summaries: patterns.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
