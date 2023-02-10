<template>
  <div class="flex justify-center auth--view">
    <div class="card auth--card bg-base-100/40 backdrop-blur">
      <div class="items-center card-body">
        <h2 class="font-medium text-center card-title text-h5">
          Log in to get started
        </h2>
        <div class="w-full mt-4">
          <div class="w-full form-control">
            <label class="label">
              <span class="text-lg label-text">Email</span>
            </label>
            <input
              v-model="login.email"
              type="email"
              placeholder="joe@gmail.com"
              class="w-full input bg-base-content/10 input-bordered"
            />
          </div>
        </div>
        <div class="w-full mt-3">
          <div class="w-full form-control">
            <label class="label">
              <span class="text-lg label-text">Password</span>
            </label>
            <div class="relative">
              <input
                v-model="login.password"
                :type="show ? 'text' : 'password'"
                placeholder="**********"
                class="w-full input bg-base-content/10 input-bordered"
              />
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
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
        <div class="flex justify-end w-full">
          <nuxt-link to="/auth/forgot-password">Forgot password</nuxt-link>
        </div>
        <div class="w-full mt-5">
		  <button
            class="flex items-center w-full btn btn-primary"
            :class="loading ? 'loading' : ''"
            @click.prevent="userLogin"
          >
            <span>Log in</span> <ic name="Arrow-Right" />
          </button>
<!--          <nuxt-link class="flex items-center w-full btn btn-primary" to="/">
            <span>Log in</span> <ic name="Arrow-Right" />
          </nuxt-link>-->
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
    <!--    <v-snackbar :timeout="-1" :value="message" absolute left shaped top>
      {{ notification }}
    </v-snackbar>-->
  </div>
</template>

<script>
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
    async userLogin() {
      this.loading = true
	  console.log('login data is', this.login)
	  const formData = {...this.login}
      try {
        const response = await this.$auth.loginWith('local', {
          body: formData
        })
        console.log('Response is', response)
        this.notification = response.msg
        this.message = true
        this.loading = false
      } catch (err) {
        console.log('We got an error folks', err)
        this.loading = false
      }
    }
  }
}
</script>
