<template>
  <div class="ro--sidebar">
	<div class="nav-top">
	  <div class="logo--holder">
		<img src="/auth-logo.png" alt="Logo">
	  </div>
	  <div class="user--info">
		<div tabindex="0" class="collapse collapse-arrow">
		  <nuxt-link active-class="exact-active-link" to="/dashboard/account" class="collapse-title pl-0">
			<span class="text-lg font-medium">{{ auth?.$state?.user?.firstName }} {{ auth?.$state?.user?.lastName }}</span>
			<div class="text-gray-500 flex items-center">
			  <i class="iconly-Location mr-1 text-xl icli" />
			  <!--                  <el-icon><location /></el-icon>-->
			  <span>{{ store?.userCountry?.name }}</span>
			</div>
		  </nuxt-link>
		</div>
	  </div>
	</div>
	<div class="nav-bottom">
	  <ul class="mt-5">
		<li class="page-nav">
		  <nuxt-link active-class="exact-active-link" to="/dashboard/transactions">
			<i class="iconly-Activity mr-2 text-xl icli" />
			<span>Transactions</span>
		  </nuxt-link>
		</li>
	  </ul>
	  <div class="rem--nav">
	  	<ul class="mt-5">
		<li class="page-nav">
		  <r-o-link to="/dashboard/">
          	<i class="iconly-Swap mr-2 text-xl icli" />
          	<span>Buy</span>
		  </r-o-link>
		</li>
		<li class="page-nav">
		  <nuxt-link active-class="exact-active-link" to="/dashboard/history">
			<i class="iconly-Time-Circle mr-2 text-xl icli" />
			<span>History</span>
		  </nuxt-link>
		</li>
		<li class="page-nav">
		  <nuxt-link active-class="exact-active-link" class="persist" to="/dashboard/kyc">
			<i class="iconly-Shield-Fail text-error icli mr-2" />
			<span class="text-error">Complete KYC</span>
		  </nuxt-link>
		</li>
	  </ul>
	  	<ul class="mt-5">
		<li class="page-nav">
		  <nuxt-link active-class="exact-active-link" to="/dashboard/help">
			<i class="iconly-Info-Circle mr-2 text-xl icli" />
			<span>Help Center</span>
		  </nuxt-link>
		</li>
		<li class="page-nav">
		  <a @click.prevent="logoutBtn = true" href="#" class="link-type">
			<i class="iconly-Logout mr-2 text-xl icli" />
			<span>Logout</span>
		  </a>
		</li>
	  </ul>
	  </div>
	</div>
	<Dialog v-model:visible="logoutBtn">
	  <div
		  class="pb-4 flex flex-col items-center justify-center text-center"
	  >
		<i class="iconly-Logout large-icon text-primary icbo"></i>
		<div class="message">
		  <h3 class="text-lg my-2">Are you sure you want to log out?</h3>
		</div>
	  </div>
	  <template #footer>
		<Button label="Log out" class="primary" @click.prevent="auth.logout()"/>
	  </template>
	</Dialog>
  </div>
</template>

<script lang="ts" setup>
	import {useStore} from "~/stores";

	const logoutBtn = ref(false)
	const router = useRouter()
	const auth = useAuth()
	const store = useStore()
</script>

<style lang="scss" scoped>
	.ro--sidebar {
	  padding: 30px 0 30px 30px;
	  height: 100vh;
	  width: 270px;
	  background: #e8e8f3;
	  transition: .3s ease-in-out;
	  translate: none;
	  display: grid;
	  grid-auto-rows: auto 1fr;
	  overflow-y: auto;
	  &.open {
		transform: none;
	  }
	  .logo--holder {
		img {
		  height: 35px;
		}
	  }
	  .user--info {
		padding-top: 35px;
		.collapse-title {
		  display: flex;
		  flex-direction: column;
		}
	  }
	  .nav-bottom {
		display: grid;
		grid-template-rows: 105px 1fr;
	  }
	  .page-nav {
		a {
		  position: relative;
		  display: flex;
		  align-items: center;
		  color: #3063E9;
		  margin-bottom: 20px;
		  padding: 15px;
		  overflow: hidden;
		  cursor: pointer;
		  transition: .3s ease-in-out;
		  i {
			font-size: 1.4rem;
		  }
		  & > *{
			position: relative;
		  }
		  &:before {
			position: absolute;
			content: '';
			left: 0;
			top: 0;
			background: #3063E9;
			width: 100%;
			height: 100%;
			border-radius: 8px 0 0 8px;
			transition: .3s ease-in-out;
			transform: translateX(100%);
		  }
		  &.persist {
			&:before {
			  position: absolute;
			  content: '';
			  left: 0;
			  top: 0;
			  background: rgba(230, 26, 26, 0.2);
			  width: 100%;
			  height: 100%;
			  border-radius: 8px 0 0 8px;
			  transition: .3s ease-in-out;
			  transform: translateX(100%);
			}
		  }
		  &.exact-active-link, &:hover:not(.link-type) {
			color: #fafafa;
			&:before {
			  transform: none;
			}
		  }
		  &.link-type {
			padding-bottom: 0;
			margin-bottom: 0;
		  }
		}
	  }

	  a.collapse-title {
		position: relative;
		cursor: pointer;
		transition: .3s ease-in-out;
		&.exact-active-link {
		  .text-gray-500 {
			color: #fafafa;
		  }
		}
		i {
		  font-size: 1.4rem;
		}
		& > *{
		  position: relative;
		}
		&:before {
		  position: absolute;
		  content: '';
		  left: 0;
		  top: 0;
		  background: #3063E9;
		  width: 100%;
		  height: 100%;
		  border-radius: 8px 0 0 8px;
		  transition: .3s ease-in-out;
		  transform: translateX(100%);
		}
		&.exact-active-link, &:hover:not(.link-type) {
		  color: #fafafa;
		  padding-left: 10px;
		  i, span {
			color: #fafafa;
		  }
		  &:before {
			transform: none;
		  }
		}
		&.link-type {
		  padding-bottom: 0;
		  margin-bottom: 0;
		}
	  }
	  .rem--nav {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	  }
	}
	.large-icon {
	  font-size: 5.5rem;
	  transform: rotate(180deg);
	}
</style>