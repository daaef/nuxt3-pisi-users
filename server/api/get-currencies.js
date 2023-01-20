export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const { data } = await $fetch(`${config.public.api_url}/user/get-crypto-currencies`)

    return data;
})