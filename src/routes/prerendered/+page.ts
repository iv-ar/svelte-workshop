import type { PageLoad } from './$types';

export const prerender = true;
export const load = (async ({  }) => {
    return { more: "data" };
}) satisfies PageLoad;