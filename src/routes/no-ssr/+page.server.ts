import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        text: "asdf"
    };
}) satisfies PageServerLoad;