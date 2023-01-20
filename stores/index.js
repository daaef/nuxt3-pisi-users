import { defineStore } from "pinia";
export const useStore = defineStore({
  id: "main",
  state: () => ({
    loading: false,
    users: [
      {
        id: 1,
        name: "Matthew Ero",
        location: "Nigeria",
        active: false,
      },
      {
        id: 2,
        name: "Jace Rodman",
        location: "Nigeria",
        active: false,
      },
      {
        id: 3,
        name: "Tunde Ojigho",
        location: "Nigeria",
        active: false,
      },
      {
        id: 4,
        name: "Jace Rodman",
        location: "Nigeria",
        active: false,
      },
      {
        id: 5,
        name: "Jace Rodman",
        location: "Nigeria",
        active: false,
      },
      {
        id: 6,
        name: "Jace Rodman",
        location: "Nigeria",
        active: false,
      },
    ],
    payments: [
      {
        id: 1,
        name: "Matthew Ero",
        amount: "₦72,347.50",
        rate: "$1 = ₦433.72",
        payState: "Request",
        country: "NGN",
      },
      {
        id: 2,
        name: "Jace Rodman",
        amount: "₦72,347.50",
        rate: "$1 = ₦433.72",
        payState: "Waiting...",
        country: "NGN",
      },
      {
        id: 3,
        name: "Tunde Ojigho",
        amount: "₦72,347.50",
        rate: "$1 = ₦433.72",
        payState: "Request",
        country: "NGN",
      },
      {
        id: 4,
        name: "Jace Rodman",
        amount: "₦72,347.50",
        rate: "$1 = ₦433.72",
        payState: "Paid",
        country: "NGN",
      },
      {
        id: 5,
        name: "Jace Rodman",
        amount: "₦72,347.50",
        rate: "$1 = ₦433.72",
        payState: "Request",
        country: "NGN",
      },
      {
        id: 6,
        name: "Jace Rodman",
        amount: "₦72,347.50",
        rate: "$1 = ₦433.72",
        payState: "Request",
        country: "NGN",
      },
    ],
    coins: [
      {
        id: 1,
        coin: "Bitcoin",
        name: "BTC",
        icon: "btc",
        selected: false,
      },
      {
        id: 2,
        coin: "Ethereum",
        name: "ETH",
        icon: "eth",
        selected: false,
      },
      {
        id: 3,
        coin: "TRON",
        name: "TRX",
        icon: "tron",
        selected: false,
      },
      {
        id: 4,
        coin: "Tether",
        name: "USDT",
        icon: "tether",
        selected: false,
      },
      {
        id: 5,
        coin: "Yearn",
        name: "YFI",
        icon: "yearn",
        selected: false,
      },
      {
        id: 6,
        coin: "Dogecoin",
        name: "DOGE",
        icon: "dogecoin",
        selected: false,
      },
      {
        id: 7,
        coin: "Polygon",
        name: "MATIC",
        icon: "polygon",
        selected: false,
      },
    ],
    banks: [
      {
        id: 1,
        name: "Guaranty Trust Bank",
      },
      {
        id: 2,
        name: "Access Bank"
      },
      {
        id: 3,
        name: "Wema Bank"
      },
      {
        id: 4,
        name: "First Bank Nigeria"
      },
      {
        id: 5,
        name: "United Bank of Africa"
      },
      {
        id: 6,
        name: "Union Bank"
      },
      {
        id: 7,
        name: "Kuda Bank"
      },
    ],
    currencies: [
      {
        id: 1,
        coin: "Naira",
        name: "NGN",
        icon: "₦",
        selected: false,
      },
      {
        id: 2,
        coin: "Euros",
        name: "EUR",
        icon: "€",
        selected: false,
      },
      {
        id: 3,
        coin: "Dollars",
        name: "USD",
        icon: "$",
        selected: false,
      },
    ],
    countries: [],
    ng: {
        id: 1,
        coin: "Naira",
        name: "NGN",
        icon: "₦",
        selected: false,
      },
    eu: {
        id: 2,
        coin: "Euros",
        name: "EUR",
        icon: "€",
        selected: false,
      },
    us: {
        id: 3,
        coin: "Dollars",
        name: "USD",
        icon: "$",
        selected: false,
      },
    history: [
      {
        key: 1,
        id: "6728390-465322",
        sentAmount: "765.00",
        recieveAmount: "749.85",
        sendCurrency: "eu",
        recieveCurrency: "us",
        date: "2022-10-13"
      },
      {
        key: 2,
        id: "6728390-465322",
        sentAmount: "230.00",
        recieveAmount: "63,634.92",
        sendCurrency: "us",
        recieveCurrency: "ng",
        date: "2022-10-13"
      },
      {
        key: 3,
        id: "6728390-465322",
        sentAmount: "230.00",
        recieveAmount: "63,634.92",
        sendCurrency: "us",
        recieveCurrency: "ng",
        date: "2022-10-13"
      },
      {
        key: 4,
        id: "6728390-465322",
        sentAmount: "765.00",
        recieveAmount: "749.85",
        sendCurrency: "eu",
        recieveCurrency: "us",
        date: "2022-10-13"
      },
      {
        key: 5,
        id: "6728390-465322",
        sentAmount: "765.00",
        recieveAmount: "749.85",
        sendCurrency: "eu",
        recieveCurrency: "us",
        date: "2022-10-13"
      },
      {
        key: 6,
        id: "6728390-465322",
        sentAmount: "230.00",
        recieveAmount: "63,634.92",
        sendCurrency: "us",
        recieveCurrency: "ng",
        date: "2022-10-13"
      },
      {
        key: 7,
        id: "6728390-465322",
        sentAmount: "765.00",
        recieveAmount: "749.85",
        sendCurrency: "eu",
        recieveCurrency: "us",
        date: "2022-10-13"
      },
      {
        key: 8,
        id: "6728390-465322",
        sentAmount: "230.00",
        recieveAmount: "63,634.92",
        sendCurrency: "us",
        recieveCurrency: "ng",
        date: "2022-10-13"
      },
    ],
  }),
  actions: {
    async fetchCurrencies() {

      const config = useRuntimeConfig();
      const auth = useAuth()
      await $fetch(`${config.public.api_url}/user/get-crypto-currencies`, {
        headers: { 'Authorization': auth.strategy.token.get() }
      })
          .then(res => {
            console.log(res.data)
            this.currencies = res.data.cryptoCurrencies
          })
    },
    async fetchBanks() {

      const config = useRuntimeConfig();
      const auth = useAuth()
      await $fetch(`${config.public.api_url}/user/get-banks`, {
        headers: { 'Authorization': auth.strategy.token.get() }
      })
          .then(res => {
            console.log(res.data)
            this.banks = res.data.banks
          })
    },
    async fetchCountries() {
      const config = useRuntimeConfig();
      await $fetch(`${config.public.api_url}/user/get-countries`)
          .then(res => {
            this.countries = res.data.countries
          })
    },
  },
  getters: {
    userCountry: (state) => {
      const auth = useAuth()
      return state?.countries?.find(country => {
        return auth?.$state?.user?.countryId === country?.id
      })
    }
  }
});
