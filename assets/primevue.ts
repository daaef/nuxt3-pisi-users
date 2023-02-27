/*
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
<FormKit
    type="form"
:actions="false"
@submit="register"
>
<FormKit
    label="First name"
name="firstName"
type="text"
placeholder="Jon"
validation="required"
validation-visibility="live"
>
<template #suffix="{ value, state }">
<div class="loader" v-if="state.validating" />
<div class="done" v-if="value && state.complete" />
    </template>
    </FormKit>
    <FormKit
  label="Last name"
name="lastName"
type="text"
placeholder="Snow"
validation="required"
validation-visibility="live"
>
<template #suffix="{ value, state }">
<div class="loader" v-if="state.validating" />
<div class="done" v-if="value && state.complete" />
    </template>
    </FormKit>
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
    <!-- <FormKitSchema :schema="schema" :data="data" />-->
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
    class="absolute pass-eye inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
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
    <FormKit
type="submit"
label="Log in"
:input-class="loading ? 'loading' : ''"
    />
    </FormKit>
    </div>
    <div class="w-full mt-4">
<div class="form-control w-full basic">
<label class="label" for="country">
<span class="label-text text-lg">Country</span>
    </label>
    <Dropdown input-id="country" v-model="selCountry" :options="store.countries" optionLabel="name" placeholder="Select a Country" />
    </div>
    </div>
    <div class="w-full mt-4">
<div class="form-control w-full">
<label class="label">
<span class="label-text text-lg">Phone Number</span>
</label>
<input
v-model="signup.phoneNumber"
type="tel"
:pattern="selCountry?.regex"
placeholder="23409063546780"
class="input bg-base-content/10 input-bordered w-full"
    />
    </div>
    </div>
    <div class="w-full mt-4">
<div class="form-control w-full">
<label class="label">
<span class="label-text text-lg">Other Names</span>
</label>
<input
v-model.trim="signup.otherNames"
type="text"
placeholder="Jane Catherine"
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
<!--          <button
    class="w-full btn btn-primary flex items-center"
:class="loading ? 'loading' : ''"
@click.prevent="$router.push('/kyc/')"
>
<span>Continue</span> <ic name="Arrow-Right" /></button
>-->
<button
    class="w-full btn btn-primary flex items-center"
:class="usrStore.loading ? 'loading' : ''"
@click.prevent="userSignup"
    >
    <span>Continue</span> <ic name="Arrow-Right" />
    </button>
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
</div>
</template>

<script setup>
import {useFetch} from "nuxt/app";
import {error as errorPop} from "../../components/ROToastAndConfirmService";
import {useStore} from "~/stores";
import {userStore} from "../../stores/user";
import {computed} from "vue";
import register from "~/server/api/auth/register";
import { FormKitSchema } from '@formkit/vue'

definePageMeta({
  layout: 'authentication',
  auth: 'guest'
});
/!*
  const schema = reactive(
      [
          {
              $el: 'h1',
              children: ['Register ', '$email'],
          },
          {
              $el: 'h3',
              children: 'Header Text H3',
          },
          {
              $formkit: 'primeInputText',
              name: 'email',
              label: 'Email',
              help: 'This will be used for your account.',
              validation: 'required|email',
          },
          {
              $formkit: 'select',
              name: 'country',
              label: 'Select Country',
              options: {
                  refresh: 'Every page load',
                  hourly: 'Ever hour',
                  daily: 'Every day',
              },
              help: 'How often should we display a cookie notice?',
          },
      ],
  )*!/

const router = useRouter()
const route = useRoute()
const store = useStore()
const usrStore = userStore()

const show = ref(false);
const show1 = ref(false);
const loading = ref(false);
const message = ref(false);
const countries = ref([]);
const selCountry = ref({});
const notification = ref('');
const password1 = ref('');
const signup = ref({
  firstName: '',
  lastName: '',
  email: '',
  otherNames:"",
  countryId: 1,
  phoneNumber: '',
  password: ''
})

watch(() => signup.value.otherNames, () => signup.value.otherNames = signup.value.otherNames.replace(/\s+/g, ' ').trim().trim())
const cid = computed(()=> selCountry.value.id)
onMounted(async ()=> {
  // await useFetch('/api/get-countries')
  // 	.then((res) => {
  //   countries.value = res.data.value.countries
  // })
  await store.fetchCountries()
  console.log('store is', store)
})

async function userSignup() {
  loading.value = true
  signup.value.phoneNumber = `${signup.value.phoneNumber}`
  signup.value.countryId = cid.value
  const formData = {...signup.value}
  await usrStore?.register(formData)
  loading.value = false
}
</script>
*/
