<template>
  <div class="kyc--view flex justify-center">
    <div class="">
      <div class="card-body items-start bg-base-100/40 backdrop-blur">
        <a href="#" @click="() => $router.go(-1)">
          <i class="iconly-Arrow-Left icli"></i>
        </a>
        <h2
          class="card-title w-full justify-center text-center font-medium text-h5"
        >
          Welcome to Exchange! Let's get your profile set up
        </h2>
        <div class="w-full mt-2 kyc--panel-container">
          <nuxt-link to="/dashboard/kyc/identity" class="kyc--panel w-full active--panel">
            <div class="number--text-container">
              <span class="number block">1</span>
              <span class="block ml-3 panel--title">Verify your identity</span>
            </div>
            <i class="iconly-Arrow-Right-2 text-white icli"></i>
          </nuxt-link>
          <nuxt-link to="/dashboard/kyc/addAccount" class="kyc--panel w-full">
            <div class="number--text-container">
              <span class="number block">2</span>
              <span class="block ml-3 panel--title">Add account details</span>
            </div>
            <i class="iconly-Arrow-Right-2 text-white icli"></i>
          </nuxt-link>
          <div class="kyc--panel w-full">
            <div class="number--text-container">
              <span class="number block">3</span>
              <span class="block ml-3 panel--title">Set Transaction Pin</span>
            </div>
            <i class="iconly-Arrow-Right-2 text-white icli"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KycHome',
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

<style lang="scss">
.kyc--view {
  width: 100%;
  .kyc--panel-container {
	display: grid;
	grid-gap: 15px;

	.kyc--panel {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 10px 15px;
	  gap: 10px;
	  border-radius: 10px;
	  min-height: 55px;
	  background: #e8e8f3;
	  cursor: pointer;

	  & > * {
		display: block;

		&.number--text-container {
		  display: flex;
		  align-items: center;

		  .number {
			background: #fafafa;
			color: #2936ac;
			width: 30px;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			font-weight: bold;
		  }
		}

		.panel--title {
		  color: #202020;
		}
	  }

	  &.active--panel {
		background: #2936ac;

		.panel--title {
		  color: #fafafa;
		}
	  }
	}
  }
}
</style>
