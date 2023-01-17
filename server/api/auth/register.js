export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    console.log('event is', event.node.req)
    const body = await readBody(event)
   /* const { data } = await $fetch(`${config.public.api_url}/auth/sign-up`, {
        method: "POST",
        body
    })*/
    return data;
})