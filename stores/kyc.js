import { defineStore } from "pinia";
import {usePisiFetch} from "~/composables/pisiFetch";
import {Handler} from "~/services/api.handle";
import {error, success} from "~/services/ROToastAndConfirmService";

const handler = new Handler()
export const kycStore = defineStore({
  id: "kyc",
  state: () => ({
    loading: false,
  }),
  actions: {
    async uploadSelfie(payload) {
        this.loading = true
      console.log('uploading selfie', payload)
      await handler
          .handle(usePisiFetch().kyc.uploadSelfie, {
              headers: {
                  'Authorization': useAuth().strategy.token.get(),
                  'Content-Type': 'multipart/form-data'
              },
              data: payload
            })
          .then(res => {
            console.log('returned for bank addition', res)
            success(undefined, 'Successfully uploaded Selfie')
            // this.currencies = res.data.cryptoCurrencies
              this.loading = false
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
    async uploadIdDocument(payload) {
      console.log('Uploading ID document')
      this.loading = true
      await handler
          .handle(usePisiFetch().kyc.uploadIdDocument, {
              headers: { 'Authorization': useAuth().strategy.token.get() },
              data: payload
          })
          .then(res => {
            console.log('returned for uploadIdDocumet', res)
            success(undefined, 'Successfully Uploaded Id Document')

            this.loading = false
            // useRouter().push({
            //   path: '/auth/verify-email',
            //   query: { email: payload?.email },
            // })
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
    async uploadUtilityBill(payload) {
      console.log('Uploading ID document')
      this.loading = true
      await handler
          .handle(usePisiFetch().kyc.uploadUtilityBill, {
              headers: { 'Authorization': useAuth().strategy.token.get() },
              data: payload
          })
          .then(res => {
            console.log('returned for uploadUtilityBill', res)
            success(undefined, 'Successfully Uploaded Utility Bill')

            this.loading = false
            // useRouter().push({
            //   path: '/auth/verify-email',
            //   query: { email: payload?.email },
            // })
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
    }
  }
});
