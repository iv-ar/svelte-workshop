import type { Handle } from "@sveltejs/kit";

export const handle: Handle = ({ resolve, event }) => {
    // event.locals is availabe as a parameter to the load function in all subsequent .server.ts files
    // All properties on locals should be defined in your app.d.ts file, assuming you are using typescript
    event.locals.handled = true;
    // With event.cookies you have full control over the cookies the client sends with the users request
    const session = event.cookies.get("session");
    // you are also free to set and update the cookies
    event.cookies.delete("session");
    event.cookies.set("guid", crypto.randomUUID());
    // event.request gives you the web native Request object for the given request, that you can use to read headers for example
    const isAdmin = event.request.headers.get("X-IsAdmin");
    return resolve(event);
}