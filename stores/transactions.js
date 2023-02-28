import { defineStore } from "pinia";
import {usePisiFetch} from "~/composables/pisiFetch";
import {Handler} from "~/services/api.handle";
import {error, success} from "~/services/ROToastAndConfirmService";

const handler = new Handler()
export const transactionStore = defineStore({
  id: "transaction",
  state: () => ({
    loading: false,
    offers: []
  }),
  actions: {
    async createOffer(payload) {
      await handler
          .handle(usePisiFetch().transaction.createOffer, {
              headers: { 'Authorization': useAuth().strategy.token.get() },
              data: payload
            })
          .then(res => {
            success(undefined, 'Offer Created!')
            // this.currencies = res.data.cryptoCurrencies
          }).catch(e => {
              if (typeof e !== 'string'){
                  e.forEach(err => {
                      error(undefined, err)
                  })
              } else {
                  error(undefined, e)
              }
              this.loading = false
          })
    },
    async getOffers(payload) {
      await handler
          .handle(usePisiFetch().transaction.fetchOffers, {
              headers: { 'Authorization': useAuth().strategy.token.get() },
              data: payload
            })
          .then(res => {
              this.offers = res
            success(undefined, 'Offers Updated')
            // this.currencies = res.data.cryptoCurrencies
          }).catch(e => {
              if (typeof e !== 'string'){
                  e.forEach(err => {
                      error(undefined, err)
                  })
              } else {
                  error(undefined, e)
              }
              this.loading = false
          })
    },
    async respondToOffer(payload) {
      await handler
          .handle(usePisiFetch().transaction.respondToOffer, {
              headers: { 'Authorization': useAuth().strategy.token.get() },
              data: payload
            })
          .then(res => {
            // this.currencies = res.data.cryptoCurrencies
              return Promise.resolve('success')
          }).catch(e => {
              console.log('error!', e)
              if (typeof e !== 'string'){
                  e.forEach(err => {
                      error(undefined, err)
                  })
              } else {
                  error(undefined, e)
              }
              this.loading = false
              return Promise.reject('error')
          })
    },
  }
});
