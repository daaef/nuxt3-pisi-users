<script setup>
definePageMeta({
    layout: 'authentication',
    auth: 'guest'
});
	import {userStore} from "~/stores/user";
	const usrStore = userStore()
  const auth = useAuth()
  const verifyToken = async (e) => {
      await usrStore.verifyOTP(e?.token)
  }
</script>

<template>
  <div class="account--auth-app">
      <a href="#" @click.prevent="$router.go(-1)" class="back-link text-primary block mb-5">
          <i class="iconly-Arrow-Left text-4xl icli"></i>
      </a>
      <div class="app--data">
          <h3 class="text-3xl mb-5 font-medium">
              Enter the code Sent to your Email
          </h3><FormKit
              type="form"
              :actions="false"
              @submit="verifyToken"
      >
          <FormKit
                  label="Token Code"
                  name="token"
                  type="text"
                  placeholder="123456"
                  validation="required|number"
                  validation-visibility="live"
           />
          <FormKit
                  type="submit"
                  label="Verify Token"
                  :input-class="usrStore?.loading ? 'loading' : ''"
          />
      </FormKit>
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
      }
  }
</style>