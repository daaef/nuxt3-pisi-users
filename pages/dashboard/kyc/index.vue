<template>
  <div class="kyc--view flex justify-center">
    <div class="">
      <div class="card-body items-start bg-base-100/40 backdrop-blur">
        <h2
          class="card-title w-full justify-center text-center font-medium text-h5"
        >
          Welcome! Click on a step to perform the task
        </h2>
        <div class="w-full mt-2 kyc--panel-container">
          <!--            :class="
            useAuth()?.$state?.user?.selfieImage
            ? 'pointer-events-none active&#45;&#45;panel'
            : ''
            "-->
          <nuxt-link to="/dashboard/kyc/selfie" class="kyc--panel w-full">
            <div class="number--text-container">
              <span class="number block">1</span>
              <span class="block ml-3 panel--title">Upload a Selfie</span>
            </div>
            <i class="iconly-Arrow-Right-2 text-white icli"></i>
          </nuxt-link>
          <nuxt-link
            to="/dashboard/kyc/identity"
            class="kyc--panel w-full"
            :class="
              useAuth()?.$state?.user?.identityDocument
                ? 'pointer-events-none active--panel'
                : ''
            "
          >
            <div class="number--text-container">
              <span class="number block">2</span>
              <span class="block ml-3 panel--title">Upload an ID Document</span>
            </div>
            <i class="iconly-Arrow-Right-2 text-white icli"></i>
          </nuxt-link>
          <nuxt-link
            to="/dashboard/kyc/utility"
            class="kyc--panel w-full"
            :class="
              useAuth()?.$state?.user?.utilityBill
                ? 'pointer-events-none active--panel'
                : ''
            "
          >
            <div class="number--text-container">
              <span class="number block">3</span>
              <span class="block ml-3 panel--title">Upload a Utility Bill</span>
            </div>
            <i class="iconly-Arrow-Right-2 text-white icli"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KycHome",
  data() {
    return {
      show: false,
      show1: false,
      loading: false,
      message: false,
      notification: "",
      password1: "",
      signup: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      },
    };
  },
  methods: {
    async userSignup() {
      this.loading = true;
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log("Response is", response.data);
        this.notification = response.data.data.msg;
        this.message = true;
        this.$auth.setUser(response.data.data.user);
        this.$auth.setUserToken(response.data.data.accessToken).then(() =>
          this.$toast.success("User set!", {
            theme: "bubble",
            position: "top-right",
            duration: 1000,
          })
        );
        this.loading = false;
      } catch (err) {
        console.log("We got an error folks", err);
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
.kyc--view {
  width: calc(100% - 270px);
  @media (max-width: 1024px) {
    width: 100%;
  }
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
