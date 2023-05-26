import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

    return {
        param: params.aparam
    };
}) satisfies PageServerLoad;