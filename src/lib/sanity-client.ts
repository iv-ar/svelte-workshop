export function sanity() {
    return {
        blog: {
            "apples": {
                title: "Apples",
                content: "They're great!"
            },
            find(name: string): unknown {
                return Object.entries(this).find(e => e[0] == name)?.[1];
            }
        }
    };
}