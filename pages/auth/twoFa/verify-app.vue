<script setup>
import { userStore } from "~/stores/user";
definePageMeta({
  layout: "authentication",
  auth: "guest",
});
const usrStore = userStore();
onMounted(() => {
  usrStore.loading = false;
});
const verifyToken = async (e) => {
  await usrStore.verifyAppToken({
    ...e,
    userId: useRoute()?.query?.userId,
  });
};
</script>

<template>
  <div class="account--auth-app">
    <div class="app--data">
      <h3 class="text-3xl mb-5 font-medium">
        Enter the code generated by the Authenticator App
      </h3>
      <FormKit type="form" :actions="false" @submit="verifyToken">
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
