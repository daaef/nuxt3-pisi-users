<template>
  <div class="auth--view flex justify-center">
    <div class="card auth--card bg-base-100/40 backdrop-blur">
      <div class="card-body items-center">
        <h2 class="card-title text-center text-primary font-medium text-h5">
          Verify email
        </h2>
        <p class="text-center mb-0">
          Input the verification code sent to <br />
          <span class="text-primary">joe@gmail.com</span>
        </p>
        <div class="w-full">
          <div class="form-control w-full">
            <v-otp-input length="6"></v-otp-input>
          </div>
        </div>
        <div class="w-full flex justify-between">
          <span class="text-primary">
            <span class="countdown font-mono font-medium text-xl">
              <span :style="{ '--value': 10 }"></span>:
              <span :style="{ '--value': 24 }"></span>
            </span>
          </span>
          <a href="#" class="text-primary font-semibold"> Resend code </a>
        </div>
        <div class="w-full mt-5">
          <button
            class="w-full btn btn-primary flex items-center"
            :class="loading ? 'loading' : ''"
            @click.prevent="userLogin"
          >
            <span>Verify OTP</span> <ic name="Arrow-Right" />
          </button>
        </div>
      </div>
    </div>
    <v-snackbar :timeout="-1" :value="message" absolute left shaped top>
      {{ notification }}
    </v-snackbar>
  </div>
</template>

<script>
definePageMeta({
  layout: 'authentication'
});
export default {
  name: 'LoginView',
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
  methods: {
    async userLogin() {
      this.loading = true
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login
        })
        console.log('Response is', response.data)
        this.notification = response.data.data.msg
        this.message = true
        this.$auth.setUser(response.data.data.user)
        this.$auth.setUserToken(response.data.data.accessToken).then(() =>
          this.$toast.success('User set!', {
            theme: 'bubble',
            position: 'top-right',
            duration: 1000
          })
        )
        this.loading = false
      } catch (err) {
        console.log('We got an error folks', err)
        this.loading = false
      }
    }
  }
}
</script>
