import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        serverData: "something that should be fetched from the server, usually because of credentials (for example: sanity api keys)"
    };
}) satisfies PageServerLoad;