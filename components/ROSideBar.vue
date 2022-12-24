<template>
  <div class="ro--sidebar">
	<div class="logo--holder">
	  <img src="/auth-logo.png" alt="Logo">
	</div>
	<div class="user--info">
	  <div tabindex="0" class="collapse collapse-arrow rounded-box">
		<input type="checkbox" class="peer" />
		<div class="collapse-title">
		  <span class="text-lg font-medium">Focus me to see content</span>
		</div>
		<div class="collapse-content">
		  <p>tabindex="0" attribute is necessary to make the div focusable</p>
		</div>
	  </div>
	</div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
	.ro--sidebar {
	  padding: 30px 0 30px 30px;
	  height: 100vh;
	  width: 270px;
	  background: #e8e8f3;
	  transition: .3s ease-in-out;
	  translate: none;
	  .logo--holder {
		img {
		  height: 35px;
		}
	  }
	}
</style>