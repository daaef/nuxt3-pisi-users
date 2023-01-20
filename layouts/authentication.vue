<template>
	<section class="auth--app--holder">
	  <nav class="px-7 flex w-full justify-between">
		<nuxt-link class="flex items-center" to="/">
		  <img src="/auth-logo.png" alt="" />
		</nuxt-link>
		<div class="flex items-center flex-grow-0">
		  <nuxt-link
			  v-if="$route.name !== 'auth-login'"
			  class="flex flex-grow-0 items-center text-sm mr-4"
			  to="/auth/login"
		  >
			Login
		  </nuxt-link>
		  <nuxt-link
			  v-if="$route.name !== 'auth-signup'"
			  to="/auth/signup"
			  class="btn btn-primary flex-grow-0"
		  >
			<span class="text-white">Create Account</span>
		  </nuxt-link>
		</div>
	  </nav>
	  <main class="flex items-center main">
		<div class="container px-7">
		  <slot />
		  <ConfirmDialog />
		  <Toast />
		</div>
	  </main>
	</section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
	.auth--app--holder {
	  padding: 80px 0;
	  height: unset !important;
	  min-height: 100vh;
	  .main {
		min-height: 0;
	  }
	  overflow: auto;
	  background-image: url('/auth-shape.png');
	  background-repeat: no-repeat;
	  background-attachment: fixed;
	  background-size: cover;
	  background-position: center center;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  nav {
		height: 60px;
		display: flex;
		align-items: center;
		position: absolute;
		top: 0;
		width: 100%;
		left: 0;
		z-index: 5;
	  }
	}
</style>