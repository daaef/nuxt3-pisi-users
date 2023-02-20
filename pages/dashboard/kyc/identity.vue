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
          <div class="camera--case">
            <div class="camera--holder">
              <camera autoplay>
              </camera>
            </div>
              <a href="#" @click.prevent="snapshot" class="cam--container">
                  <i class="iconly-Camera icli"></i>
              </a>
          </div>
        <h2 class="card-title w-full justify-center font-medium text-h5">
          Image Upload
        </h2>
        <p class="text-center w-full">
          Please ensure you selected the right ID type that matches the ID you
          intend to upload
        </p>
        <div class="w-full mt-5">
          <button
            class="w-full btn btn-primary flex items-center"
            :class="loading ? 'loading' : ''"
            @click="simulate"
          >
            <span>Upload Selfie</span> <i class="icli iconly-Arrow-Right" />
          </button>
        </div>
      </div>
    </div>
	<ROSuccessKyc
		v-else
		title="We are now verifying your details"
		message="We will send you an email and in-app notification once we’re done verifying your documents."
		button-text="Continue to dashboard"
		button-url="/dashboard/kyc/"
	></ROSuccessKyc>
  </div>

</template>

<script lang="ts">
import Camera from "simple-vue-camera";
export default {
  name: 'KycHome',
    setup(){
        const camera = ref<InstanceType<typeof Camera>>();
        const snapshot = async () => {
            const blob = await camera.value?.snapshot();

            // To show the screenshot with an image tag, create a url
            const url = URL.createObjectURL(blob);
        }

        return { snapshot, camera }
    },
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
<style lang="scss">
input[type='file'] {
  line-height: 42px;
}

.camera--case {
  .iconly-Camera {
    font-size: 3rem;
    transition: .3s ease-in-out;
    &:hover {
      font-size: 3.4rem;
    }
    &:active {
      font-size: 3.1rem;
    }
  }
  .cam--container {
    height: 80px;
  }
}

.camera--case {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.camera--holder {
    width: 500px;
    height: auto;
    max-height: 500px;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto 20px;
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
