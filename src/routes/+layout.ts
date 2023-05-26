import type { LayoutLoad } from './$types';

export const load = (async ({data}) => {
    return {
        layoutData: "",
        ...data
    };
}) satisfies LayoutLoad;