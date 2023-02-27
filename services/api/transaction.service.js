export default ($fetch, config) => ({
    //Create Offer
    createOffer(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/create-offer`, {
            headers: payload.headers,
            body: payload.data
        })
    },
    //Get Offers
    fetchOffers(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/get-offers`, {
            headers: payload.headers,
            body: payload.data
        })
    },
    //Respond to Offer
    respondToOffer(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/get-offers`, {
            headers: payload.headers,
            body: payload.data
        })
    },
})