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
    async updateSelfieUrl(payload) {
        this.loading = true
      console.log('uploading selfie', payload)
      await handler
          .handle(usePisiFetch().kyc.uploadSelfieUrl, {
              headers: {
                  'Authorization': useAuth().strategy.token.get(),
            },
              data: payload
            })
          .then(res => {
            success(undefined, 'Successfully updated Selfie')
              useAuth()?.fetchUser()
            // this.currencies = res.data.cryptoCurrencies
              useRouter().push('/dashboard/kyc')
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
          .handle(usePisiFetch().kyc.uploadIDUrl, {
              headers: { 'Authorization': useAuth().strategy.token.get() },
              data: payload
          })
          .then(res => {
            console.log('returned for uploadIdDocumet', res)
            success(undefined, 'Successfully Uploaded Id Document')
              useAuth()?.fetchUser()
              // this.currencies = res.data.cryptoCurrencies
              useRouter().push('/dashboard/kyc')

            this.loading = false
            // useRouter().push({
            //   path: '/auth/verify-email',
            //   query: { email: payload?.email },
            // })
            // this.currencies = res.data.cryptoCurrencies
          }).catch(e => {
              this.loading = false
              if (typeof e !== 'string'){
                  e.forEach(err => {
                      error(undefined, err)
                  })
              } else {
                  error(undefined, e)
              }
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
