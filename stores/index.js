import { defineStore } from "pinia";
import apiService from "~/services/api.service";
import {Handler} from "~/services/api.handle";
import {usePisiFetch} from "~/composables/pisiFetch";


const handler = new Handler()
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
    fiatCurrencies: [],
    countries: [],
    countryCurr: [
        {
          id: 1,
          coin: "Naira",
          name: "NGN",
          country: "NG",
          icon: "₦",
          selected: false,
        },
        {
          id: 2,
          coin: "Euros",
          name: "EUR",
          country: "EU",
          icon: "€",
          selected: false,
        },
        {
          id: 3,
          coin: "Dollars",
          country: "US",
          name: "USD",
          icon: "$",
          selected: false,
        }
      ],
    ngn: {
        id: 1,
        coin: "Naira",
        name: "NGN",
        icon: "₦",
        selected: false,
      },
    eur: {
        id: 2,
        coin: "Euros",
        name: "EUR",
        icon: "€",
        selected: false,
      },
    usd: {
        id: 3,
        coin: "Dollars",
        name: "USD",
        icon: "$",
        selected: false,
      },
    eth: {
        id: 1,
        coin: "Ethereum",
        name: "ETH",
        icon: "eth",
        selected: false,
      },
    trx: {
        id: 2,
        coin: "Tron",
        name: "TRX",
        icon: "trx",
        selected: false,
      },
    matic: {
        id: 3,
        coin: "Polygon",
        name: "MATIC",
        icon: "matic",
        selected: false,
      },
    history: [
      {
        key: 1,
        id: "6728390-465322",
        sentAmount: "765.00",
        recieveAmount: "749.85",
        sendCurrency: "eur",
        recieveCurrency: "usd",
        date: "2022-10-13"
      },
      {
        key: 2,
        id: "6728390-465322",
        sentAmount: "230.00",
        recieveAmount: "63,634.92",
        sendCurrency: "usd",
        recieveCurrency: "ngn",
        date: "2022-10-13"
      },
      {
        key: 3,
        id: "6728390-465322",
        sentAmount: "230.00",
        recieveAmount: "63,634.92",
        sendCurrency: "usd",
        recieveCurrency: "ngn",
        date: "2022-10-13"
      },
      {
        key: 4,
        id: "6728390-465322",
        sentAmount: "765.00",
        recieveAmount: "749.85",
        sendCurrency: "eur",
        recieveCurrency: "usd",
        date: "2022-10-13"
      },
    ],
  }),
  actions: {
    async fetchCryptoCurrencies() {
      await handler
          .handle(usePisiFetch().util.getCryptoCurrencies, {headers: { 'Authorization': useAuth().strategy.token.get() }})
          .then(res => {
            console.log('currencies are', res)
            this.currencies = res.cryptoCurrencies
          })
    },
    async fetchFiatCurrencies() {
      await handler
          .handle(usePisiFetch().util.getCurrencies, {headers: { 'Authorization': useAuth().strategy.token.get() }})
          .then(res => {
            console.log('returned is',res)
            this.fiatCurrencies = res.currencies
          })
    },
    async fetchBanks() {
      await handler
          .handle(usePisiFetch().util.fetchBanks, {headers: { 'Authorization': useAuth().strategy.token.get() }})
          .then(res => this.banks = res.banks)
    },
    async fetchCountries() {
      await handler
          .handle(usePisiFetch().util.getCountries)
          .then(res => {
            this.countries = res.countries
          })
    },
  },
  getters: {
    userCountry: (state) => {
      return useAuth()?.$state?.user?.country?.currency
    }
  }
});
