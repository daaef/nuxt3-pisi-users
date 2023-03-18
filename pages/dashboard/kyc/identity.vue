<script setup>
import {kycStore} from "~/stores/kyc";
import {uploadFile} from "~/composables/firebase-init";
const store = kycStore()
const auth = useAuth()
const uploadId = async (e) => {
console.log('e', e?.id[0].file)
    await uploadFile(e?.id[0].file, e?.id[0].file?.name)
        .then(res => store.uploadIdDocument({url: res}))
        .catch(e => console.error(e))
}
</script>

<template>
    <div class="kyc--view flex justify-center">
        <div class="auth--card bg-base-100/40 backdrop-blur">
            <div class="card-body items-start">
                <a href="#" @click="() => $router.go(-1)">
                    <i class="iconly-Arrow-Left icli"></i>
                </a>
                <div class="app--data">
                    <h3 class="text-3xl mb-5 font-medium">
                        Upload Government Issued Identity Card
                    </h3>
                    <FormKit
                        type="form"
                        :actions="false"
                        @submit="uploadId"
                    >
                        <FormKit
                            label="Id Document"
                            name="id"
                            type="file"
                            help="Please upload a scan of your Id Document"
                            validation="required"
                        />
                    <FormKit
                            type="submit"
                            label="Upload ID Document"
                            :input-class="store?.loading ? 'loading' : ''"
                    />
                </FormKit>
                </div>
    </div>
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