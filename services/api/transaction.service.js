export default ($fetch, config) => ({
    //Create Offer
    createOffer(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/create-offer`, {
            headers: payload.headers,
            body: payload.data
        })
    },
})