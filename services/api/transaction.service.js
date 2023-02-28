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
        return $fetch.$post(`${config.public.api_url}/transaction/respond-to-offer`, {
            headers: payload.headers,
            body: payload.data
        })
    },
    //Confirm Payment Reciept
    confirmPaymentReciept(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/confirm-receipt-of-payment`, {
            headers: payload.headers,
            body: payload.data
        })
    },
    //Fetch Transactions
    getTransactions(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/transactions`, {
            headers: payload.headers,
            body: payload.data
        })
    },
    //Withdraw from Offer
    withdrawFromOffer(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/withdraw-from-offer`, {
            headers: payload.headers,
            body: payload.data
        })
    },
    //Get Offer from Id
    getOfferFromId(payload) {
        return $fetch.$get(`${config.public.api_url}/transaction/offer/${payload.data}`, {
            headers: payload.headers,
        })
    },
    // Get My Offer
    getMyOffer(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/my-offers`, {
            headers: payload.headers,
            body: payload.data
        })
    },
    // Get My Transactions
    getMyTransactions(payload) {
        return $fetch.$post(`${config.public.api_url}/transaction/my-offers`, {
            headers: payload.headers,
            body: payload.data
        })
    },
    // Get Transactions by Id
    getTransactionsById(payload) {
        return $fetch.$get(`${config.public.api_url}/transaction/${payload.data}`, {
            headers: payload.headers,
        })
    },
})