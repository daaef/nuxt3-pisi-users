<template>
  <div class="flex justify-center auth--view">
    <div class="card auth--card bg-base-100/40 backdrop-blur">
      <div class="items-center card-body">
        <h2 class="font-medium text-center card-title text-h5">
          Log in to get started
        </h2>
        <div class="w-full mt-4">
            <FormKit
                    type="form"
                    :actions="false"
                    @submit="userLogin"
            >
                <FormKit
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jon@snow.guard"
                    validation="required|email"
                    validation-visibility="live"
                >
                  <template #suffix="{ value, state }">
                      <div class="loader" v-if="state.validating" />
                      <div class="done" v-if="value && state.complete" />
                  </template>
                </FormKit>
                <div class="relative">
                  <FormKit
                      :type="show ? 'text' : 'password'"
                      name="password"
                      label="Password"
                      placeholder="Enter password"
                      validation="required"
                      validation-visibility="live"
                      />
                  <div
                          class="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 pass-eye"
                  >
                      <i
                              class="iconly-Show icbo text-primary"
                              :class="{ hidden: show, block: !show }"
                              @click="show = !show"
                      ></i>
                      <i
                              class="iconly-Hide icbo text-primary"
                              :class="{ block: show, hidden: !show }"
                              @click="show = !show"
                      ></i>
                  </div>
                </div>
                <div class="flex justify-end w-full my-1">
                    <nuxt-link to="/auth/forgot-password">Forgot password</nuxt-link>
                </div>
                <FormKit
                    type="submit"
                    label="Log in"
                    :input-class="loading ? 'loading' : ''"
                    />
            </FormKit>
            <div class="w-full mt-5">
                <div class="w-full mt-5">
                  <p class="text-center">
                    By clicking continue, you agree to Exchange's
                    <a href="#">Terms of Service</a> and
                    <a href="#">Privacy Policy.</a>
                  </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {error, success} from "~/services/ROToastAndConfirmService";

definePageMeta({
  layout: 'authentication',
  auth: 'guest'
});
export default {
  name: 'LoginView',
  setup(){
	const auth = useAuth()
	return {
	  auth
	}
  },
  data() {
    return {
      show: false,
      loading: false,
      message: false,
      notification: '',
      login: {
        email: '',
        password: ''
      }
    }
  },
  async mounted() {
  },
  methods: {
    async userLogin(e) {
      this.loading = true
	  console.log('login data is', e)
        await this.$auth.loginWith('local', {
          body: e
        })
            .then(res => {
                this.loading = false
                // this.currencies = res.data.cryptoCurrencies
            }).catch(e => {
                error('Login Failed!', e?.data?.msg)
                this.loading = false
            })
    }
  }
}
</script>
<style>
  .pass-eye {
      top: 47px;
      height: 42px;
  }
</style>
