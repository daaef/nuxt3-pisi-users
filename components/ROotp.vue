<template>
  <div ref="otpCont">
	<vue3-otp-input
		ref="otpInput"
		input-classes="otp-input"
		separator=""
		:num-inputs="4"
		:should-auto-focus="true"
		:is-input-num="true"
		:conditionalClass="['one', 'two', 'three', 'four']"
		:placeholder="['*', '*', '*', '*']"
		@on-change="handleOnChange"
		@on-complete="handleOnComplete"
	/>
  </div>
</template>


<script setup>
const otp1 = ref()
const otp2 = ref()
const otp3 = ref()
const otp4 = ref()

const otpInput = ref(null)

const handleOnComplete = (value) => {
  console.log('OTP completed: ', value);
};

const handleOnChange = (value) => {
  console.log('OTP changed: ', value);
};
</script>

<style lang="scss" scoped>

</style>