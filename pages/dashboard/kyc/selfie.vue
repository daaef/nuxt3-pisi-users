<template>
    <div class="kyc--view flex justify-center">
        <div class="auth--card bg-base-100/40 backdrop-blur">
            <div class="card-body items-start">
                <a href="#" @click="() => $router.go(-1)">
                    <i class="iconly-Arrow-Left icli"></i>
                </a>
                <div class="camera--case">
                    <div class="camera--holder">
                        <ClientOnly>
                            <camera v-if="!(imgSrc.length)" autoplay ref="camera">
                            </camera>
                            <div v-if="imgSrc.length" class="img--preview">
                                <img :src="imgSrc" alt="">
                            </div>
                        </ClientOnly>
                    </div>
                    <a v-if="!(imgSrc.length)" href="#" @click.prevent="snapshot" class="cam--container">
                        <i class="iconly-Camera icli"></i>
                    </a>
                    <a v-if="imgSrc.length" href="#" @click.prevent="imgSrc = ''" class="cam--container">
                        <i class="iconly-Close-Square icli"></i>
                    </a>
                </div>
                <h2 class="card-title w-full justify-center font-medium text-h5">
                    Image Upload
                </h2>
                <p class="text-center w-full">
                    Please ensure you take a clear selfie to ensure a succesful validation.
                </p>
                <div class="w-full mt-5">
                    <a
                            href="#"
                            ref="uploadBtn"
                            class="w-full btn btn-primary flex items-center"
                            :class="loading ? 'loading' : ''"
                            @click="uploadSelfie"
                    >
                        <span>Upload Selfie</span> <i class="icli iconly-Arrow-Right" />
                    </a>
                </div>
            </div>
        </div>
        <!--	<ROSuccessKyc
            title="We are now verifying your details"
            message="We will send you an email and in-app notification once we’re done verifying your documents."
            button-text="Continue to dashboard"
            button-url="/dashboard/kyc/"
          ></ROSuccessKyc>-->
    </div>

</template>

<script lang="ts">
import Camera from "simple-vue-camera";
import {kycStore} from "~/stores/kyc";
import {uploadFile} from "~/composables/firebase-init";

export default {
    setup(){
        const store = kycStore()
        const camera = ref<InstanceType<typeof Camera>>();
        const imgSrc = ref('')
        const image:any = ref(null)
        const imageFile:any = ref(null)

        const blobToFile = (theBlob: Blob, fileName:string): File => {
            return new File(
                [theBlob as any], // cast as any
                fileName,
                {
                    lastModified: new Date().getTime(),
                    type: theBlob.type
                }
            )
        }
        const snapshot = async () => {
            const blob:any = await camera.value?.snapshot();
            image.value = blob
            // To show the screenshot with an image tag, create a url
            imgSrc.value = URL.createObjectURL(blob)
            imageFile.value = blobToFile(image.value, "selfie.png")
        }

        // const selfieBtn =

        return { snapshot, camera, imgSrc, image, store, imageFile }
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
            successful: false,
            selectedId: '',
            selectedCountry: ''
        }
    },
    methods: {
        async uploadSelfie() {
            // this.loading = true
            await uploadFile(this.image, 'selfie.png')
                .then(res => this.store.updateSelfieUrl({url: res}))
                .catch(e => console.error(e))
        }
    }
}
</script>
<style lang="scss">
input[type='file'] {
  line-height: 42px;
}

.camera--case {
  .icli {
    font-size: 3rem;
    transition: .3s ease-in-out;
    &:hover {
      font-size: 3.4rem;
    }
    &:active {
      font-size: 3.1rem;
    }
    &.iconly-Close-Square {
      color: red;
    }
    &.iconly-Camera {
      color: darkblue;
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

