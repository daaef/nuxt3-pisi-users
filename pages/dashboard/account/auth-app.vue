<script setup>
	import {useStore} from "~/stores";
	import {confirm, error, success} from "~/components/ROToastAndConfirmService";
	import {userStore} from "~/stores/user";
	const store = useStore()
	const usrStore = userStore()
	const auth = useAuth()
  await useAsyncData(
      "stuff",
      async ({ $pinia })=> {
          const store = userStore($pinia)
          await store.enable2FA({
              twoFactorAuthType: "AUTH_APP",
              twoFactorEnabled: true
          })
      }
  )
</script>

<template>
  <div class="account--auth-app">
      <a href="#" @click.prevent="$router.go(-1)" class="back-link text-primary block mb-5">
          <i class="iconly-Arrow-Left text-4xl icli"></i>
      </a>
      <div class="app--data">
          <h3 class="text-3xl font-medium">
              Scan the code below with an Authenticator App
          </h3>
          <p class="max-w-3xl my-5 text-xl">Use an authentication app like Google Authenticator, Microsoft Authenticator
              or Authy
              to scan
              this QR
              Code.
          </p>
          <img v-if="usrStore?.twoFA"
                  :src="usrStore?.twoFA?.qrCode" alt="QR Code">
          <p class="text-xl mb-5">Alternatively, enter this code into your authentication app</p>
          <p class="text-primary text-lg max-w-3xl">
              {{ $filters?.authCode(usrStore?.twoFA?.base32) ?? 'Generating...'}}
          </p>
          <nuxt-link class="mt-3 btn btn-primary auth-btn" to="/dashboard/account/verify-code">Continue</nuxt-link>
      </div>
  </div>
</template>
<style lang="scss">
  .account--auth-app {
    img {
      width: 300px;
    }

      .app--data {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          .auth-btn {
              min-width: 200px;
              font-size: 1.1rem;
          }
      }
  }
</style>