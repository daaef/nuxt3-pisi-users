<template>
  <div ref="otpCont">
	<div class="grid grid-cols-4 gap-4 mx-auto w-full max-w-xs">
	  <div class="w-16 h-16 ">
		<input ref="move1" @keyup="$refs.move2.focus()" class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-secondary focus:bg-gray-50 focus:ring-1 ring-blue-700" v-model="otp1" maxlength="1">
	  </div>
	  <div class="w-16 h-16">
		<input ref="move2" @keyup="$refs.move3.focus()" class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-secondary focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" v-model="otp2" maxlength="1">
	  </div>
	  <div class="w-16 h-16">
		<input ref="move3" @keyup="$refs.move4.focus()" class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-secondary focus:bg-gray-50 focus:ring-1 ring-blue-700" v-model="otp3" maxlength="1">
	  </div>
	  <div class="w-16 h-16 ">
		<input ref="move4" @keyup="$refs.move1.focus()" class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-secondary focus:bg-gray-50 focus:ring-1 ring-blue-700" v-model="otp4" maxlength="1">
	  </div>
	</div>
  </div>
</template>

<script setup>
const otp1 = ref()
const otp2 = ref()
const otp3 = ref()
const otp4 = ref()
</script>

<style lang="scss" scoped>

</style>