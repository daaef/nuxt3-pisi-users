export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event)
    try {
        return await $fetch(`${config.public.api_url}/auth/sign-up`, {
            method: "POST",
            body
        })
    } catch (e) {
        throw e
    }
})