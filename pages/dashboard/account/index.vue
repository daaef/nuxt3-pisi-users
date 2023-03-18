<script setup>
	import {useStore} from "~/stores";
	import {confirm, error, success} from "~/components/ROToastAndConfirmService";
	import {userStore} from "~/stores/user";
	const store = useStore()
	const usrStore = userStore()
	const auth = useAuth()
	const otpInput = ref(null)
	const selCountry = ref(null)
	const openOtp = ref(false)
	const account = ref(false)
	const loading = ref(false)
	const changeDetails = ref(false)
	const authenticator = ref(false)
	const show = ref(false);
	const show1 = ref(false);
	const password1 = ref('');
	const password = ref('');
	const otpCode = ref('');

	const clearInput = () => {
		otpInput.value.clearInput()
	}
	const updateUser = () => {
		otpInput.value.clearInput()
	}
	const changePassword = () => {
		try {
		usrStore.changePassword({
			password: password.value,
			token: otpCode
		}).then((res) => {
			authenticator.value = false
			console.log(res)
			success('Successful!', res.msg)
		})
		} catch (err) {
		console.log('We got an error folks', err.data.msg)
		error('Error!', err?.data?.msg)
		}
	}
	const confirm2FA = () => {
		confirm({
		message: 'Are you sure you want to proceed?',
		header: 'Send email OTP',
		icon: 'pi pi-exclamation-triangle',
		accept: () => {
			useRouter().push('/dashboard/account/email-otp')
		},
		reject: () => {
			error('Cancelled', 'You have cancelled email 2FA OTP');
		}
	});
	}
	const confirmAuth = () => {
		confirm({
		message: 'Are you sure you want to proceed?',
		header: 'Confirm password change',
		icon: 'pi pi-exclamation-triangle',
		accept: () => {
			useRouter()?.push('/dashboard/account/change-password')
		},
		reject: () => {
			error('Cancelled', 'You have cancelled password change');
		}
		});
	}
	const userData = computed(()=> {
		return {
			firstName: auth?.$state?.user?.firstName,
			lastName: auth?.$state?.user?.lastName,
			email: auth?.$state?.user?.email,
			otherNames: auth?.$state?.user?.otherNames,
			countryId: auth?.$state?.user?.countryId,
			phoneNumber: auth?.$state?.user?.phoneNumber
		}
	})
	const confirmDeactivate2FA = () => {
		console.log('running', auth?.$state?.user?.twoFactorEnabled)
		if (auth?.$state?.user?.twoFactorEnabled) {
			confirm({
				message: 'Are you sure you want to proceed?',
				header: 'Confirm 2FA Deactivation!',
				icon: 'pi pi-exclamation-triangle',
				accept: async () => {
					try {
						await usrStore.enable2FA({
							twoFactorAuthType: "AUTH_APP",
							twoFactorEnabled: false
						})
						await auth.fetchUser()
					} catch (err) {
						error('Error!', err?.data?.msg)
					}
				},
				reject: () => {
					error('Cancelled', 'You have cancelled 2FA Deactivation');
				}
			});
		}
	}
	onMounted(async () => {
		await store.fetchBanks()
		await auth.fetchUser()
	})
</script>

<template>
  <div>
			<div class="grid gap-4">
				<div @click="confirmDeactivate2FA" tabindex="0" class="collapse border-b w-full border-base-300 bg-base-100">
					<input type="checkbox" class="peer" />
					<div
							 class="collapse-title text-xl font-medium pl-0" :class="auth?.$state?.user?.twoFactorEnabled ? 'active' : ''">
						<div class="flex">
							<i class="iconly-Scan icli text-primary"></i> 2FA
						</div>
						<div class="flex text-gray-400 text-sm">
							{{ auth?.$state?.user?.twoFactorEnabled ? 'Deactivate 2 Factor Authentication' : 'Enable your 2 Factor Authentication' }}
						</div>
						<i v-if="!auth?.$state?.user?.twoFactorEnabled" class="iconly-Arrow-Right-2 icli text-primary"></i>
					</div>
					<div v-if="!auth?.$state?.user?.twoFactorEnabled" class="collapse-content p-0">
						<a href="#" @click.prevent="confirm2FA" class="btn auth-collapse block p-5 w-full">
							<span class="link--title block mb-3">Email</span>
							<span class="link--text text-gray-400">An OTP will be sent to your email.</span>
						</a>
						<nuxt-link to="/dashboard/account/auth-app" class="btn auth-collapse block p-5 w-full">
							<span class="link--title block mb-3">Authenticator app</span>
							<span class="link--text text-gray-400">Generate a code from an authenticator app, e.g. Duo or Google Authenticator.</span>
						</nuxt-link>
					</div>
				</div>
				<a href="#" @click.prevent="confirmAuth()" class="border-b w-full border-base-300 bg-base-100">
					<div class="collapse-title text-xl font-medium pl-0">
						<div class="flex">
						<i class="iconly-More-Square text-primary icli"></i> Password
						</div>
						<div class="flex text-gray-400 text-sm">
						Change your password
						</div>
						<i class="iconly-Arrow-Right-2 icli text-primary"></i>
					</div>
				</a>
				<a tabindex="0" href="#" @click.prevent="changeDetails = true" class="collapse border-b w-full border-base-300 bg-base-100">
					<div class="collapse-title text-xl font-medium pl-0">
						<div class="flex">
						<i class="iconly-Plus text-primary icli"></i> Account details
						</div>
						<div class="flex text-gray-400 text-sm">
						Change account number
						</div>
						<i class="iconly-Arrow-Right-2 icli text-primary"></i>
					</div>
				</a>
				<!--
					<a tabindex="0" href="#" class="collapse border-b w-full border-base-300 bg-base-100">
						<div class="collapse-title text-xl font-medium pl-0">
							<div class="flex">
							<i class="iconly-Wallet text-primary icli"></i> Connect Wallet
							</div>
							<div class="flex text-gray-400 text-sm">
							Connect your crypto wallet
							</div>
							<i class="iconly-Arrow-Right-2 icli text-primary"></i>
						</div>
					</a>
				-->
			</div>
			<ROChangeDetails :dialog="changeDetails" @closeModal="changeDetails= false" />
  </div>
</template>
<style lang="scss">
	.badge {
	  border-radius: 8px;
	  padding: 12px;
	  i {
		font-size: 1.2rem;
	  }
	}
	.account--page {
	  .collapse-title {
			display: flex;
			flex-direction: column;
			position: relative;
			padding-left: 10px;
			margin-bottom: 10px;
			&.active {
				background: #05A753;
				color: #fafafa;
				border-radius: 15px;
				.text-gray-400, i {
					color: #fafafa;
				}
			}
			i {
				font-size: 1.5rem;
				margin-right: 5px;
				&.iconly-Arrow-Right-2 {
					position: absolute;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
					transition: .1s ease-in-out;
					transform-origin: center center;
				}
			}
	  }
	  .collapse-title:after {
		transform: rotate(-45deg) translateY(-50%);
		color: #3063E9FF;
	  }
	  .peer:checked {
		& ~ .collapse-title {
		  .iconly-Arrow-Right-2 {
			transform: rotate(-90deg) translateY(-50%);
		  }
		}
	  }
		.auth-collapse {
			&.active-auth {
				background: #05A753;
				.link--title {
					color: #fafafa;
				}
				.link--text {
					color: #d0cece;
				}
			}
		}
	}
</style>