<template>
  <div class="kyc--view flex justify-center">
    <div v-if="!successfull" class="auth--card bg-base-100/40 backdrop-blur">
      <div v-if="loading" class="loader-component">
        <v-skeleton-loader
          v-bind="attrs"
          type="table-heading, list-item-two-line, image, table-tfoot"
        ></v-skeleton-loader>
      </div>
      <div v-else class="card-body items-start">
        <a href="#" @click="() => $router.go(-1)">
          <i class="iconly-Arrow-Left icli"></i>
        </a>
        <h2 class="card-title w-full justify-center font-medium text-h5">
          Required Identification
        </h2>
        <p class="text-center">
          Please ensure you selected the right ID type that matches the ID you
          intend to upload
        </p>
        <div class="w-full">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Country</span>
            </label>
            <select
              v-model="selectedCountry"
              class="select bg-base-content/10 input-bordered w-full"
            >
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Nigeria</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
        </div>
        <div class="w-full">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Select ID</span>
            </label>
            <select
              v-model="selectedId"
              class="select bg-base-content/10 input-bordered w-full"
            >
              <option disabled selected></option>
              <option>NIN ID</option>
              <option>NIN Slip</option>
              <option>Voter's Card</option>
              <option>Passport</option>
              <option>Driver's Licence</option>
            </select>
          </div>
        </div>

        <div v-if="showFileUpload" class="w-full m-1 mt-2">
          {{ selectedId }}
          <!-- example ID image  -->
          <div class="flex justify-center my-5 p-5 bg-base-content/10 rounded">
            <img src="/nin.png" alt="" />
          </div>

          <div class="w-full">
            <div class="form-control w-full">
              <input
                type="file"
                class="input bg-base-content/10 input-bordered w-full"
              />

              <button
                class="w-full btn btn-secondary my-3 flex items-center"
                :class="loading ? 'loading' : ''"
              >
                <span class="text-primary text-base">Upload ID</span>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full mt-5">
          <button
            class="w-full btn btn-primary flex items-center"
            :class="loading ? 'loading' : ''"
            @click="simulate"
          >
            <span>Start Verification</span> <ic name="Arrow-Right" />
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
	<ROSuccessKyc
		v-else
		title="We are now verifying your details"
		message="We will send you an email and in-app notification once we’re done verifying your documents."
		button-text="Continue to dashboard"
		button-url="/kyc/"
	></ROSuccessKyc>
  </div>

</template>

<script>
export default {
  name: 'KycHome',
  data() {
    return {
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2
      },
      show: false,
      loading: false,
      message: false,
      notification: '',
      successfull: false,

      selectedId: '',
      selectedCountry: ''
    }
  },
  computed: {
    showFileUpload: function () {
      // return true if selectedId and selectedCountry are not empty
      return this.selectedId && this.selectedCountry
    }
  },
  methods: {
    simulate() {
      this.loading = true
      setTimeout(() => {
        this.successfull = true
        this.loading = false
      }, 2000)
    }
  }
}
</script>
<style>
input[type='file'] {
  line-height: 42px;
}

input[type='file']:active {
  outline: none;
}

input::file-selector-button {
  font-weight: bold;
  color: dodgerblue;
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  display: none;
  width: 100%;
}
</style>
