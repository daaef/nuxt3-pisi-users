<script setup>
import {useStore} from "~/stores";
import {userStore} from "~/stores/user";
import {useUtils} from "~/composables/utils";
const store = useStore()
const usrStore = userStore()
const auth = useAuth()
const otpInput = ref(null)

const clearInput = () => {
  otpInput.value.clearInput()
}
const updateUser = async (e) => {
	await usrStore?.updateUser(e)
	await auth?.fetchUser()
}
const userData = ref({
  firstName: auth?.$state?.user?.firstName,
  lastName: auth?.$state?.user?.lastName,
  email: auth?.$state?.user?.email,
  middleName: auth?.$state?.user?.middleName,
  country: useUtils()?.getCountry(auth?.$state?.user?.countryId),
  phoneNumber: auth?.$state?.user?.phoneNumber,
})
</script>

<template>
	<div class="account--auth-app">

		<div class="update--data">
			<h3 class="text-3xl mb-5 font-medium">
				Account Information
			</h3>
			<FormKit
					type="form"
					submit-label="Update User"
					@submit="updateUser"
			>
				<FormKit
						label="First Name"
						name="firstName"
						type="text"
						:value="userData?.firstName"
						validation="required|text"
				/>
				<FormKit
						name="countryId"
						type="hidden"
						:value="userData?.country?.id"
				/>
				<FormKit
						label="Last Name"
						name="lastName"
						type="text"
						:value="userData?.lastName"
						validation="required|text"
				/>
				<FormKit
						label="Other Names"
						name="otherNames"
						type="text"
						:value="userData?.middleName"
						validation="required|text"
				/>
				<FormKit
						label="Email"
						name="email"
						type="email"
						:value="userData?.email"
						validation="required|email"
				/>
				<FormKit
						label="Country"
						name="country"
						type="text"
						disabled
						:value="userData?.country?.name"
						validation="required|text"
				/>
				<FormKit
						label="Phone Number"
						name="phoneNumber"
						type="text"
						:value="userData?.phoneNumber"
						validation="required|text"
				/>
			</FormKit>
		</div>
	</div>
</template>
<style lang="scss">
.update--data {
	max-width: 450px;
	width: 100%;
	text-align: center;
}
</style>