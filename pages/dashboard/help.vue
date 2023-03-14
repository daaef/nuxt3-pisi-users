<script>
import {useStore} from "~/stores";
export default {
	setup(){
		const store = useStore()
		const email = ref('');
		const subject = ref('');
		const transId = ref('');
		const what = ref('')
		return {
			store
		}
	},
	methods: {
		async submitRequest(e){
			await this.store.sendMessage(e)
			console.log('message', this.store.message)
			this.$formkit.reset('helpForm')
		}
	}
}

</script>
<template>
  <div class="page-content help--page">
		<div class="flex justify-between items-end mb-10">
			<h4 class="header--title">Help</h4>
		</div>
		<FormKit
				type="form"
				id="helpForm"
				#default="{ value }"
				submit-label="Submit Request"
				@submit="submitRequest"
		>
			<FormKit
					type="select"
					label="Category"
					name="supportType"
					:classes="{
						input: 'bg-base-content/10 input-bordered'
					}"
					:options="[
						{ label: 'Transactions (Disputes)', value: 'DISPUTE_LODGING'},
						{ label: 'Account', value: 'ACCOUNT' },
						{ label: 'Verification', value: 'VERIFICATION' },
						{ label: 'General Enquiries', value: 'OTHERS' },
					]"
					help="Select an Issue Category"
					validation="required"
			/>
			<FormKit
					v-if="value.supportType === 'DISPUTE_LODGING'"
					type="text"
					name="transId"
					model-value="' '"
					label="Transaction ID (Optional)"
			/>
			<FormKit
					type="textarea"
					:classes="{
						input: 'bg-base-content/10 input-bordered'
					}"
					label="What do you need help with?"
					rows="5"
					name="content"
					placeholder="Remember to write in complete sentences."
					help="Please describe your issue in detail"
					validation="required"
			/>
		</FormKit>
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