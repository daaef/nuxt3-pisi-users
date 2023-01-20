import { defineStore } from "pinia";
export const userStore = defineStore({
  id: "user",
  state: () => ({
    loading: false,
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
    async addBank(payload) {
      console.log('adding bank')
      const config = useRuntimeConfig();
      const auth = useAuth()
      await $fetch(`${config.public.api_url}/user/add-bank-account`, {
        method: "POST",
        headers: { 'Authorization': auth.strategy.token.get() },
        body: payload
      })
          .then(res => {
            console.log(res.data)
            // this.currencies = res.data.cryptoCurrencies
          })
    },
  }
});
