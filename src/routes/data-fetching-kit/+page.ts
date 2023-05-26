import type { PageLoad } from './$types';

export const load = (async ({ data, fetch, route, setHeaders }) => {
    const dataFromApi = await (await fetch("//data.example")).json()
    // id in the route object is the sveltekit "name" of the route, in this case "/data-fetching-kit"
    const { id } = route;
    return {
        article: {
            title: "Hello...",
            body: "World"
        },
        dataFromApi,
        ...data
    };
}) satisfies PageLoad;