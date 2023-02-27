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
          <div class="mt-4 w-full">
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
                          label="Other names"
                          name="otherNames"
                          type="text"
                          placeholder="Snow Leopard"
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
                  <FormKit
                          outer-class='custom--prime'
                          :type="rodrop"
                          label="Country"
                          id="country"
                          name="countryId"
                          v-model="selCountry"
                          :options="store?.countries"
                          optionLabel="name"
                          optionValue="id"
                          placeholder="Select a Country"
                          validation="required"
                  />
                  <FormKit
                          type="tel"
                          name="phoneNumber"
                          label="Phone number"
                          placeholder="xxx-xxx-xxxx"
                          validation="length:9,20"
                          validation-messages="number is too short"
                          validation-visibility="live"
                  />
<!--                  :validation="`matches:/${setCountry?.regex}/`"
                  :validation-messages="{
                  matches: 'Phone number must be in the format xxx-xxx-xxxx',
                  }"-->
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
                          label="Continue"
                          :input-class="usrStore.loading ? 'loading' : ''"
                  />
              </FormKit>
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
  import {userStore} from "~/stores/user";
  import {computed, reactive, ref, watch} from "vue";
  import {createInput} from '@formkit/vue'
  import ROPrimeDropdown from "~/components/ROPrimeDropdown.vue";

  definePageMeta({
	layout: 'authentication',
	auth: 'guest'
  });

  let schema = reactive(
      [],
  )

  const router = useRouter()
  const route = useRoute()
  const store = useStore()
  const usrStore = userStore()

  const rodrop =createInput(ROPrimeDropdown)

  const show = ref(false);
  const show1 = ref(false);
  const loading = ref(false);
  const message = ref(false);
  const countries = ref([]);
  const selCountry = ref(2);
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
  const options = computed(()=> {
      return store.countries.map(country => {
          return {
              label: country?.name,
              value: country?.id,
              validation: country?.regex
          }
      })
  })
  const setCountry = computed(()=> {
      return store.countries.find(country => {
          return country.id === selCountry.value
      })
  })
  onMounted(async ()=> {
      schema = [
          {
              $formkit: 'primeDropdown',
              name: 'country',
              label: 'Select Country',
              options: options.value,
              help: 'Cookie notice frequency ?',
              attrs: {
                  '@select': '$setCountry'
              }
          },
      ]
	await store.fetchCountries()
	console.log('store is', store)
  })

  async function register(e) {
    loading.value = true
    e.phoneNumber = `${e.phoneNumber}`
    e.otherNames = e.otherNames.replace(/\s+/g, ' ').trim().trim()
    await usrStore?.register(e)
    loading.value = false
  }
</script>
