<template>
  <div class="kyc--view flex justify-center">
    <div v-if="!showSuccess"  class="auth--card bg-base-100/40 backdrop-blur">

      <div class="card-body items-start">

       <a href="#" @click="() => $router.go(-1)">
          <i class="iconly-Arrow-Left icli"></i>
        </a>
          <h2 class="card-title w-full justify-center font-medium text-h5">
            Add account details
        </h2>
        <p class="text-center">
          All FIAT gotten through Exchange will be sent to this account
        </p>
        <div class="w-full ">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Account Name</span>
            </label>
            <input

              type="text"
              placeholder=""
              class="input bg-base-content/10 input-bordered w-full"
            />
          </div>
        </div>
        <div class="w-full ">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Account Number</span>
            </label>
            <input

              type="text"
              placeholder="123456789"
              class="input bg-base-content/10 input-bordered w-full"
            />
          </div>
        </div>
        <div class="w-full ">
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-lg">Bank</span>
            </label>
            <select class="select  bg-base-content/10 input-bordered w-full">
              <option disabled selected></option>
              <option>Access Bank</option>
              <option>Access Bank</option>
              <option>Access Bank</option>
              <option>Access Bank</option>
              <option>Access Bank</option>
              <option>Access Bank</option>
            </select>
          </div>
        </div>

        <div class="w-full mt-5">
          <button
            class="w-full btn btn-primary flex items-center"
            :class="loading ? 'loading' : ''"
            @click.prevent="addAccount"
          >
            <span>Add Account</span>
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
	<ROSuccessKyc v-else title="Welcome to Exchange" buttonText="Continue to dashboard"  ></ROSuccessKyc>
  </div>




</template>

<script>
export default {
  name: 'KycHome',
  data() {
    return {
      showSuccess: false,
      loading:false,
      message: false,
      notification: '',
    }
  },

  methods: {

    addAccount(){
        this.showSuccess = true
    }

  }
}
</script>
