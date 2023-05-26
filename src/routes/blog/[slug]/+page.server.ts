import type { PageServerLoad } from './$types';
import { sanity } from '$lib/sanity-client';

export const load = (async ({ params }) => {
    const client = sanity();
    const { slug } = params;
    return {
        content: client.blog.find(slug)
    };
}) satisfies PageServerLoad;