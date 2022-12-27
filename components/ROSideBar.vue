
<template>
  <div class="ro--sidebar">
	<div class="nav-top">
	  <div class="logo--holder">
		<img src="/auth-logo.png" alt="Logo">
	  </div>
	  <div class="user--info">
		<div tabindex="0" class="collapse collapse-arrow ">
		  <input type="checkbox" class="peer" />
		  <div class="collapse-title pl-0">
			<span class="text-lg font-medium">Matthew Ero</span>
			<div class="text-gray-500">
			  <i class="iconly-Location mr-1 text-xl icli" />
			  <!--                  <el-icon><location /></el-icon>-->
			  <span>Nigeria</span>
			</div>
		  </div>
		  <div class="collapse-content">
			<ul>
			  <li>Hey</li>
			</ul>
		  </div>
		</div>
	  </div>
	</div>
	<div class="nav-bottom">
	  <ul class="mt-5">
		<li class="page-nav">
		  <a href="#">
			<i class="iconly-Activity mr-2 text-xl icli" />
			<span>Transactions</span>
		  </a>
		</li>
	  </ul>
	  <div class="rem--nav">
	  	<ul class="mt-5">
		<li class="page-nav">
		  <r-o-link to="/">
          	<i class="iconly-Swap mr-2 text-xl icli" />
          	<span>Buy</span>
		  </r-o-link>
		</li>
		<li class="page-nav">
		  <nuxt-link active-class="exact-active-link" to="/history">
			<i class="iconly-Time-Circle mr-2 text-xl icli" />
			<span>History</span>
		  </nuxt-link>
		</li>
	  </ul>
	  	<ul class="mt-5">
		<li class="page-nav">
		  <a href="#">
          <i class="iconly-Info-Circle mr-2 text-xl icli" />
          <span>Help Center</span>
		  </a>
		</li>
		<li class="page-nav">
		  <a href="#" class="link-type">
          <i class="iconly-Logout mr-2 text-xl icli" />
          <span>Logout</span>
		  </a>
		</li>
	  </ul>
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
	  display: grid;
	  grid-auto-rows: 143.5px 1fr;
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
			  border-radius: 8px 0px 0px 8px;
			  transition: .3s ease-in-out;
			  transform: translateX(100%);
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
		.rem--nav {
		  display: flex;
		  flex-direction: column;
		  justify-content: space-between;
		}
	  }
	}
</style>