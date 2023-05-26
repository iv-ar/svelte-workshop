import type { PageLoad } from './$types';

export const ssr = false;
export const load = (async ({ data }) => {
    return { more: "data", ...data };
}) satisfies PageLoad;