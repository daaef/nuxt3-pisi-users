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

    getConversion({from, to1, to2, to3, to4, to5}) {
        return $fetch.$get(`https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to1},${to2},${to3},${to4},${to5}&api_key=5adf62687cf1d417cc32124a57d01b9a369eff2c6130b8ab3c58f190343cc0d0`)
    }
})