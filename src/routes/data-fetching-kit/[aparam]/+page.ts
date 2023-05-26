import type { PageLoad } from './$types';

export const load = (async ({ params, parent, data, url }) => {
    // data from your +layout.ts (and in this case +layout.server.ts because we pass it from +layout.ts)
    const layout = await parent()
    layout.layoutData;
    layout.serverLayoutData;
    // url is a web api URL object you can for example get search params from
    const query = url.searchParams.get("q");
    // params contains the params availabe from the current route, in this case we have on called aparam (since we are in a folder named [aparam])
    const {aparam} = params
    return {
        slug: aparam,
        query: query,
        slugFromServer: data.param,
        dataFromLayout: layout
    };
}) satisfies PageLoad;