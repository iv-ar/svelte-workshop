// Squelch warnings of image imports from your assets dir
declare module '$assets/images/*' {
    const meta: Object[]
    export default meta
}