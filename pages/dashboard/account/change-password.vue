<script setup>
	import {useStore} from "~/stores";
	import {confirm, error, success} from "~/components/ROToastAndConfirmService";
	import {userStore} from "~/stores/user";
  import {ref} from "vue";
	const store = useStore()
	const usrStore = userStore()
	const auth = useAuth()
  const show = ref(false);
  const show1 = ref(false);
  const resetPassword = async (e) => {
      await usrStore.changePassword({
          password: e?.password,
          token: e?.token
      })
  }
  await useAsyncData(
      "stuff",
      async ({ $pinia })=> {
          const store = userStore($pinia)
          await store.resetPassword({email: useAuth()?.$state?.user?.email})
      }
  )
</script>

<template>
    <div class="account--auth-app">

        <div class="pass--data">
            <h3 class="text-3xl mb-5 font-medium">
                Account Information
            </h3>
        <FormKit
            type="form"
            :actions="false"
            @submit="resetPassword"
        >
            <FormKit
                label="Token Code"
                name="token"
                type="text"
                placeholder="123456"
                validation="required|number|length:6"
            />
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
                    class="absolute pass-eye right-0 pr-3 flex items-center text-sm leading-5"
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
            <div class="relative">
                <FormKit
                    :type="show1 ? 'text' : 'password'"
                    name="password_confirm"
                    label="Confirm Password"
                    placeholder="Confirm password"
                    validation="required|confirm"
                    validation-visibility="live"
                    validation-label="Password confirmation"
                />
                <div
                    class="absolute pass-eye right-0 pr-3 flex items-center text-sm leading-5"
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
      display: flex;
      justify-content: center;
      .pass--data {
          text-align: center;
          max-width: 400px;
          .pass-eye {
              color: red;
          }
      }
  }
</style>