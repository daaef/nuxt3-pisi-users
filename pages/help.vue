<script setup>
import {useStore} from "~/stores";

const store = useStore()
const email = ref('');
const subject = ref('');
const transId = ref('');
const what = ref('');
</script>

<template>
  <div class="page-content help--page">
	<div class="flex justify-between items-end">
	  <h4 class="header--title">Help</h4>
	</div>
	<form action="">
	  <div class="relative custom-input mt-16">
		<label for="email" class="block">Email</label>
		<InputText id="email" v-model="email" class="w-full"/>
	  </div>
	  <div class="relative custom-input mt-6">
		<label for="subject" class="block">Subject</label>
		<InputText id="subject" v-model="subject" class="w-full"/>
	  </div>
	  <div class="relative custom-input mt-6">
		<label for="trans" class="block">Transaction ID (If applicable)</label>
		<InputText id="trans" v-model="transId" class="w-full"/>
	  </div>
	  <div class="relative custom-input mt-6">
		<label for="help" class="block">What do you need help with?</label>
		<Textarea class="w-full" id="help" v-model="what" rows="5" cols="30" />
	  </div>
	  <div class="flex justify-end w-full mt-10">
		<Button label="Submit" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right"/>
	  </div>
	</form>
  </div>
</template>

<style lang="scss">
	.page-content {
	  &.help--page {
		//display: flex;
		//flex-direction: column;
		//justify-content: space-between;
		//padding-bottom: 70px;
	  }
	}
</style>