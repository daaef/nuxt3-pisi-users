export default ($fetch, config) => ({
    //Register Business
    registerBusiness(payload) {
        return $fetch.$post(`${config.public.api_url}/business/register`, {
            headers: payload.headers,
            body: payload.data
        })
    },
})