<template>
  <div class="dialogs">
  <Dialog v-model:visible="mainDialog" >
	  <div class="flex text-2xl font-medium text-center justify-center w-full">
			Change account details
	  </div>

		<div class="bottom--sect bg-secondary p-3">
			<div class="flex justify-between w-full">
				<span class="text-gray-500"> Account name: </span>
				<span class="text-black font-medium text-lg">
					{{ useAuth()?.$state?.user?.firstName }} {{ useAuth()?.$state?.user?.lastName }}
				</span>
			</div>
			<div class="flex justify-between w-full">
				<span class="text-gray-500"> Account number: </span>
				<span class="text-primary font-medium text-lg"> {{ useAuth()?.$state?.user?.bankAccount?.number ?? 'No Account Number' }} </span>
			</div>
			<div class="flex justify-between w-full">
				<span class="text-gray-500"> Bank: </span>
				<span class="text-black font-medium text-lg">
					{{ useAuth()?.$state?.user?.bankAccount?.bankName ?? 'No Bank Name' }}
				</span>
			</div>
		</div>

		<template #footer>
			<Button label="Continue" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog($event, 'offer')"/>
		</template>
  </Dialog>
  <Dialog v-model:visible="offerDialog" class="back--type">
	<template #header>
	  <a href="#" @click.prevent="openDialog($event, 'back')">
		<i class="iconly-Arrow-Left text-xl icli" />
	  </a>
	</template>
	<div class="flex text-2xl font-medium text-center justify-center w-full">
	  Change account details
	</div>

	<div class="relative custom-input">
	  <label for="accNum" class="block">Account number</label>
	  <InputText inputId="accNum" class="w-full" v-model="accNum" />
	</div>
	<div class="relative custom-input">
	  <label for="accNum" class="block">Bank</label>
	  <Dropdown class="w-full" v-model="bank" :options="store.banks" optionLabel="name" optionValue="name" placeholder="Select a Bank" />
	</div>
	<template #footer>
	  <Button label="Continue" icon="iconly-Arrow-Right text-xl icli" class="primary" iconPos="right" @click="openDialog($event, 'finish')" />
	</template>
  </Dialog>
  <Dialog v-model:visible="finDialog">
	<div
		class="pb-4 flex flex-col items-center justify-center text-center"
	>
	  <img src="/check.svg" alt="success check mark" />
	  <div class="message">
		<h3 class="text-primary text-lg my-2">Account details changed successfully</h3>
		<p>
		  You have successfully changed your account details on Red Onion.
		</p>
	  </div>
	</div>
  </Dialog>
  </div>
</template>

<script>
import { useStore } from "~/stores";
import { userStore } from "../stores/user";

export default {
  name: 'ROChangeDetails',
  setup(){
		const store = useStore()
		const userData = userStore()
		return { store, userData }
  },
  props: {
		dialog: {
			type: Boolean,
			default() {
			return false
			}
		}
  },
  data() {
		return {
			offerDialog: false,
			mainDialog: false,
			finDialog: false,
			bank: '',
			accNum: '',
		}
  },
  watch: {
		dialog(val) {
			this.mainDialog = this.dialog
		},
		mainDialog(val) {
			if (val === false) {
			this.$emit('closeModal')
			}
		}
  },
  methods: {
	async openDialog(_, type) {
			if (type === 'offer') {
			this.mainDialog = false
			this.offerDialog = true
			} else if (type === 'back') {
			this.offerDialog = false
			this.mainDialog = true
			} else {
			const formData = {
				"bankName": this.bank,
				"number": this.accNum
			}

			await this.userData.addBank(formData)
			await this.$auth.fetchUser()
			/*this.offerDialog = false
			this.finDialog = true*/
			}
		}
  }
}
</script>

<style lang="scss" scoped>
.p-dialog-content {
  display: grid;
  grid-gap: 15px;
  .top--sect {
	border-radius: 10px;
	width: 100%;
	display: grid;
	grid-gap: 7px;
	.flex {
	  flex: none !important;
	}
	img {
	  height: 10px;
	}
	hr {
	  border-top: solid 1px #2936ac;
	}
  }
  .bottom--sect {
	border-radius: 10px;
	width: 100%;
	display: grid;
	grid-gap: 7px;

	.flex {
	  flex: none !important;
	}
  }
}
</style>