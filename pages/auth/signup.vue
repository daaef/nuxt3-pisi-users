<template>
  <div class="auth--view flex justify-center">
    <div class="card auth--card bg-base-100/40 backdrop-blur">
      <div class="card-body items-start">
        <a href="#" @click="() => $router.go(-1)">
          <i class="iconly-Arrow-Left icli"></i>
        </a>
        <h2 class="card-title w-full justify-center font-medium text-h5">
          Create an account to get started
        </h2>
        <div class="w-full mt-4">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">First name</span>
            </label>
            <input
              v-model="signup.firstName"
              type="text"
              placeholder="Jon"
              class="input bg-base-content/10 input-bordered w-full"
            />
          </div>
        </div>
        <div class="w-full mt-4">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Last name</span>
            </label>
            <input
              v-model="signup.lastName"
              type="text"
              placeholder="Snow"
              class="input bg-base-content/10 input-bordered w-full"
            />
          </div>
        </div>
        <div class="w-full mt-4">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Email</span>
            </label>
            <input
              v-model="signup.email"
              type="email"
              placeholder="joe@gmail.com"
              class="input bg-base-content/10 input-bordered w-full"
            />
          </div>
        </div>
        <div class="w-full mt-3">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Password</span>
            </label>
            <div class="relative">
              <input
                v-model="signup.password"
                :type="show ? 'text' : 'password'"
                placeholder="**********"
                class="input bg-base-content/10 input-bordered w-full"
              />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
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
          </div>
        </div>
        <div class="w-full mt-3">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Confirm Password</span>
            </label>
            <div class="relative">
              <input
                v-model="password1"
                :type="show1 ? 'text' : 'password'"
                placeholder="**********"
                class="input bg-base-content/10 input-bordered w-full"
              />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                <i
                  class="iconly-Show icbo text-primary"
                  :class="{ hidden: show1, block: !show1 }"
                  @click="show1 = !show1"
                ></i>
                <i
                  class="iconly-Hide icbo text-primary"
                  :class="{ block: show1, hidden: !show1 }"
                  @click="show1 = !show1"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-5">
          <button
            class="w-full btn btn-primary flex items-center"
            :class="loading ? 'loading' : ''"
            @click.prevent="$router.push('/kyc/')"
          >
            <span>Continue</span> <ic name="Arrow-Right" /></button
          ><!--
          <button
            class="w-full btn btn-primary flex items-center"
            :class="loading ? 'loading' : ''"
            @click.prevent="userSignup"
          >
            <span>Continue</span> <ic name="Arrow-Right" />
          </button>-->
        </div>
        <div class="w-full mt-5">
          <p class="text-center">
            By clicking continue, you agree to Exchange's
            <a href="#">Terms of Service</a> and
            <a href="#">Privacy Policy.</a>
          </p>
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
      show1: false,
      loading: false,
      message: false,
      notification: '',
      password1: '',
      signup: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
      }
    }
  },
  methods: {
    async userSignup() {
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
