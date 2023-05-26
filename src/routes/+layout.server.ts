import type { LayoutServerLoad } from './$types';

export const load = (async ({}) => {
    return {
        serverLayoutData: "something for the layout (and possibly all child pages) that should only be fetched on the server"
    };
}) satisfies LayoutServerLoad;