export default ($fetch, config) => ({
    // Fetch banks
    fetchBanks(payload) {
        console.log('fecthing banks', payload)
        return $fetch.$get(`${config.public.api_url}/user/get-banks`, {
            headers: payload.headers
        })
    },

    //Fetch Countries
    getCountries() {
        return $fetch.$get(`${config.public.api_url}/user/get-countries`)
    },

    //Fetch Currencies
    getCurrencies(payload) {
        return $fetch.$get(`${config.public.api_url}/user/get-currencies`, {
            headers: payload.headers
        })
    },

    //Fetch CryptoCurrencies
    getCryptoCurrencies(payload) {
        return $fetch.$get(`${config.public.api_url}/user/get-crypto-currencies`, {
            headers: payload.headers
        })
    },
})