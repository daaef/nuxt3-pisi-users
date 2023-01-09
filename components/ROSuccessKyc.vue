<template>
  <div class="">
    <div class="card auth--card bg-base-100/40 backdrop-blur">
      <div class="card-body items-start">
        <div class="flex justify-center mb-5 w-full">
          <img class="check" src="/check.svg" alt="" />
        </div>
        <h2
          class="card-title w-full justify-center items-center text-primary font-medium text-h5"
        >
          {{ title }}
        </h2>
        <p class="text-center">
          {{ message }}
        </p>
        <div class="w-full">
          <nuxt-link
            :to="buttonUrl"
            class="w-full btn btn-primary flex items-center"
          >
            <span class="text-white text-lg">{{ buttonText }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ROSuccessKyc',

  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'continue'
    },
    buttonUrl: {
      type: String,
      default: '/'
    }
  }
}
</script>
<style>
.check {
  width: 60px;
}
</style>
