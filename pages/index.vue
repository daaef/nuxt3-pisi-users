<script setup>
definePageMeta({
  layout: 'landing',
  auth: 'guest'
});
</script>

<template>
  <section class="page-content landing">
	<header class="relative z-10">
	  <nav class="relative z-10 w-full bg-black">
		<div class="container flex justify-between w-full px-7">
		  <nuxt-link class="flex items-center" to="/">
			<img src="/landing/logo.png" alt="" />
		  </nuxt-link>
		  <div class="flex items-center flex-grow-0">
			<nuxt-link
				v-if="$route.name !== 'auth-login'"
				class="flex text-white items-center flex-grow-0 mr-4 text-sm"
				to="/auth/login"
			>
			  Login
			</nuxt-link>
			<nuxt-link
				v-if="$route.name !== 'auth-signup'"
				to="/auth/signup"
				class="flex-grow-0 btn btn-primary"
			>
			  <span class="text-white">Create Account</span>
			</nuxt-link>
		  </div>
		</div>
	  </nav>
	  <div class="relative header-content">
		<div class="absolute banner--title">
		  <span>Buy, trade,</span>
		  <span class="larger-title">exchange<span class="rotated">!</span>
		  </span>
		  <nuxt-link
			  to="/auth/signup"
			  class="flex-grow-0 btn btn-primary"
		  >
			<span class="text-white">Get Started fro free</span>
		  </nuxt-link>
		</div>
	  	<img class="landing--logo" src="/landing/header.svg" alt="">
	  </div>
	</header>
	<main class="relative">
	  <div class="header--shape">
		<img src="/landing/ellipse-shade1.png" alt="">
		<img src="/landing/ellipse-shade2.png" alt="">
	  </div>
	  <section class="section" id="transactions">
	  	<div class="container relative">
		  <h3 class="section--title">P2P crypto transactions.</h3>
		  <img class="w-full" src="/landing/trans-shape.png" alt="">
		  <p class="text-xl text-white my-8">Sign up now to find your best P2P match for free!</p>
		  <nuxt-link
			  to="/auth/signup"
			  class="flex-grow-0 btn-wide btn btn-primary"
		  >
			<span class="text-white">Get started</span>
		  </nuxt-link>
	  </div>
	  </section>
	  <section class="section" id="cross-border">
		<div class="cross-ellipse">
		  <img src="/landing/cross-2.png" alt="">
		  <img src="/landing/cross-3.png" alt="">
		  <img src="/landing/cross-1.png" alt="">
		</div>
		<div class="container">
		  <div class="text-content text-white">
			<h3 class="section--title">Seamless cross-border value exchange.</h3>
			<p class="text-xl">Choose who you exchange your cash with in simple steps.</p>
			<ul class="steps-transaction">
			  <li>
				<h3 class="num">1</h3>
				<img src="/landing/select.svg" alt="">
				<p class="step-text">
				  Select the currency
				</p>
			  </li>
			  <li>
				<h3 class="num">2</h3>
				<img src="/landing/amount.svg" alt="">
				<p class="step-text">
				  Enter the amount
				</p>
			  </li>
			  <li>
				<h3 class="num">3</h3>
				<img src="/landing/sel-crypto.svg" alt="">
				<p class="step-text">
				  Select the crypto currency you want
				</p>
			  </li>
			  <li>
				<h3 class="num">4</h3>
				<img src="/landing/click-search.svg" alt="">
				<p class="step-text">
				  ...and click search<span class="rotated">!</span>
				</p>
			  </li>
			</ul>
		  </div>
		  <div class="img-content">
			<img src="/landing/phone.png" alt="">
		  </div>
		</div>
	  </section>
	  <section class="section" id="set-rates">
		<div class="cross-ellipse">
		  <img src="/landing/cross-2.png" alt="">
		  <img src="/landing/cross-3.png" alt="">
		</div>
		<div class="container relative">
		  <h3 class="section--title">Set your own rates.</h3>
		  <p class="text-xl text-white">Make an offer for what you want at your own exchange rate.</p>
		  <div class="landing--rates">
			<img src="/landing/rate-1.png" alt="">
			<img src="/landing/rate-2.png" alt="">
			<img src="/landing/rate-3.png" alt="">
			<button class="redirector">
			  <i class="iconly-Arrow-Right text-white icli"></i>
			</button>
		  </div>
		</div>
	  </section>
	  <section class="section" id="marketplace">
		<div class="container">
		  <h3 class="section--title">The Marketplace for the modern professional.</h3>
		  <div class="market--grid mb-14">
			<img src="/landing/market-1.png" alt="">
			<img src="/landing/market-2.png" alt="">
		  </div>
		  <nuxt-link
			  to="/auth/signup"
			  class="flex-grow-0 btn-wide btn btn-primary"
		  >
			<span class="text-white">Get started</span>
		  </nuxt-link>
		</div>
	  </section>
	  <section class="section" id="xchange">
		<div class="container">
		  <h3 class="section--title">The Marketplace for the modern professional.</h3>
		  <div class="xchange--grid mb-14">
			<img src="/landing/exchange-demo.png" alt="">
			<div class="qr-space text-white">
			  <img class="qr-code-img" src="/landing/qr-code.png" alt="">
			  <p>Scan to download</p>
			  <h3>iOS & Android</h3>
			  <div class="store-logos">
				<a href="#">
				  <img src="/landing/appStore.png" alt="">
				</a>
				<a href="#">
				  <img src="/landing/playStore.png" alt="">
				</a>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	  <section class="section" id="verified">
		<div class="cross-ellipse">
		  <img src="/landing/cross-2.png" alt="">
		  <img src="/landing/cross-3.png" alt="">
		  <img src="/landing/cross-1.png" alt="">
		</div>
		<div class="container">
		  <div class="verified--grid mb-14">
			<img src="/landing/lock.png" alt="">
			<div class="verified-text text-white">
			  <h3 class="section--title">All traders are verified by <br>industry-standard methods</h3>
			  <p class="mb-8">At Red Onion, we are very concerned with user protection <br>
				and the safety of your transactions</p>
			  <nuxt-link
				  to="/auth/signup"
				  class="flex-grow-0 btn-wide btn btn-primary"
			  >
				<span class="text-white">Get started with Red Onion</span>
			  </nuxt-link>
			</div>
		  </div>
		</div>
	  </section>
	</main>
	<footer>
	  <div class="container">
		<div class="main--footer">
		  <div class="">
			<h3 class="text-primary mb-4 font-medium text-xl">About us</h3>
			<ul>
			  <li>
				<a href="#">Terms of service</a>
			  </li>
			  <li>
				<a href="#">Privacy policy</a>
			  </li>
			  <li>
				<a href="#">Announcements</a>
			  </li>
			  <li>
				<a href="#">Fees</a>
			  </li>
			</ul>
		  </div>
		  <div class="">
			<h3 class="text-primary mb-4 font-medium text-xl">Support</h3>
			<ul>
			  <li>
				<a href="#">support@redonion.io</a>
			  </li>
			  <li>
				<a href="#">+234 0000 000 000</a>
			  </li>
			  <li>
				<a href="#">Twitter support</a>
			  </li>
			  <li>
				Call lines are open
				08:00 to 17:00 WAT,
				Mondays - Fridays
			  </li>
			</ul>
		  </div>
		  <div class="">
			<h3 class="text-primary mb-4 font-medium text-xl">Community</h3>
			<ul class="social--grid">
			  <li>
				<a href="#">
				  <i class="pi-instagram pi" />
				</a>
			  </li>
			  <li>
				<a href="#">
				  <i class="pi-twitter pi" />
				</a>
			  </li>
			  <li>
				<a href="#">
				  <i class="pi-facebook pi" />
				</a>
			  </li>
			</ul>
		  </div>
		  <div class=""></div>
		  <div class="app-links">
			<a href="#">
			  <img src="/landing/appStore.png" alt="">
			</a>
			<a href="#">
			  <img src="/landing/playStore.png" alt="">
			</a>
		  </div>
		</div>
		<div class="sub--footer">
		  <a href="#">
			<img src="/landing/logo-2.png" alt="">
		  </a>
		</div>
	  </div>
	</footer>
  </section>
</template>

<style lang="scss">
 .landing {
   background: #000000;
   header {
	 height: 100vh;
	 padding-top: 0;
	 display: flex;
	 justify-content: center;
	 align-items: flex-start;
	 nav {
	   position: fixed;
	   backdrop-filter: blur(20px);
	   background: rgb(0 0 0 / 66%);
	   padding: 20px 0;
	   @media (max-width: 400px){
		 .btn {
		   padding: 2px 8px;
		   font-size: .75rem;
		 }
	   }
	 }
	 .landing--logo {
	   height: 100vh;
	 }
	 .flag {
	   display: flex;
	   align-items: center;
	   .fi {
		 border-radius: 50%;
		 height: 25px;
		 width: 25px;
	   }
	 }
	 .banner--title {
	   font-size: 4rem;
	   font-weight: 500;
	   position: absolute;
	   top: 150px;
	   left: 50%;
	   color: #fafafa;
	   transform: translateX(-50%);
	   text-align: center;
	   line-height: 1.2;
	   span {
		 display: block;
		 &.larger-title {
		   font-size: 5rem;
		 }
	   }
	 }
	 .currency-badge {
	   background: #E8E8F3;
	   border-radius: 10px;
	   padding: 7px;
	   display: flex;
	   align-items: center;
	   -webkit-text-fill-color: #202020;
	   color: #202020;
	   font-size: 1rem;
	   font-weight: 600;
	   .flag {
		 margin-right: 5px;
	   }
	 }
   }
   main {
	 padding-top: 100px;
	 .container {
	  padding: 0 2.5rem;
	 }
	 .header--shape {
	   position: absolute;
	   top: 0;
	   transform: translateY(-50%);
	   width: 100%;
	   left: 0;
	   display: grid;
	   grid-template-columns: 1fr 1fr;
	   grid-gap: 50px;
	 }
	 .section--title {
	   font-size: 2.5rem;
	   font-weight: 500;
	   color: #fafafa;
	   margin-bottom: 20px;
	 }

	 .section {
	   padding: 50px;
	   position: relative;
	   .container {
		 position: relative;
	   }
	   .cross-ellipse {
		 position: absolute;
		 top: 0;
		 width: 100%;
		 left: 0;
		 display: grid;
		 grid-template-columns: 1fr 1fr;
		 grid-gap: 50px;
		 img:nth-of-type(2) {
		   position: absolute;
		   bottom: 0;
		   transform: translateY(10%);
		   left: 10%;
		 }
	   }
	 }
	 #cross-border {
	   position: relative;
	   .container {
		 display: grid;
		 grid-template-columns: .65fr .35fr;
		 grid-gap: 20px;
		 .steps-transaction {
		   margin-top: 50px;
		   display: grid;
		   grid-gap: 20px;
			li {
			  display: flex;
			  gap: 16px;
			  align-items: center;
			  .num {
				border-radius: 50%;
				border: 1.5px solid #3063E9;
				height: 25px;
				width: 25px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #3063E9;
			  }
			  img {
				height: 40px;
			  }
			  .step-text {
				font-size: 1.2rem;
			  }
			}
		 }
	   }
	 }
	 #set-rates {
	   .container {
		 .landing--rates {
		   display: grid;
		   grid-gap: 50px;
		   grid-template-columns: 1fr 1fr 1fr auto;
		   margin-top: 50px;
		   align-items: center;
		   img {
			 width: 100%;
		   }
		   .redirector {
			 display: flex;
			 align-items: center;
			 width: 100px;
			 height: 100px;
			 justify-content: center;
			 background: #3063E9;
			 border-radius: 50%;
			 i {
			   font-size: 3rem;
			 }
		   }
		 }
	   }
	 }
	 #marketplace {
	   .container {
		 .market--grid {
		   display: grid;
		   grid-template-columns: 1fr 1fr;
		   grid-gap: 50px;
		   margin-top: 50px;
		   align-items: center;
		   img {
			 width: 100%;
		   }
		 }
	   }
	 }
	 #xchange {
	   .container {
		 .xchange--grid {
		   display: grid;
		   grid-template-columns: .7fr .3fr;
		   grid-gap: 80px;
		   margin-top: 50px;
		   align-items: center;
		   img {
			 width: 100%;
		   }
		   .qr-space {
			 text-align: center;
			 max-width: 80%;
			 margin-left: auto;
			 p {
			   font-size: 1.8rem;
			   margin-top: 15px;
			 }
			 h3 {
			   font-size: 3rem;
			 }
			 .store-logos {
			   display: grid;
			   grid-gap: 20px;
			   grid-template-columns: 1fr 1fr;
			   margin-top: 30px;
			   img {
				 height: 60px;
				 width: 100%;
				 object-fit: contain;
				 object-position: right;

				 &:first-of-type {
				   object-position: left;
				 }
			   }
			 }
		   }
		 }
	   }
	 }
	 #verified {
	   .cross-ellipse {
		 top: unset;
		 bottom: 0;
	   }
	   .container {
		 .verified--grid {
		   display: grid;
		   grid-template-columns: .3fr .7fr;
		   grid-gap: 50px;
		   align-items: center;
		   p {
			 font-size: 1.4rem;
		   }
		   @media (max-width: 1024px) {
			 br {
			   display: none;
			 }
		   }
		   img {
			 width: 100%;
		   }
		 }
	   }
	 }
   }
   footer {
	 position: relative;
	 background: #fafafa;
	 padding-top: 40px;
		.container {
		  .main--footer {
			display: grid;
			grid-gap: 20px;
			grid-template-columns: repeat(3, 0.9fr) 1.5fr auto;
			.social--grid {
			  display: flex;
			  a {
				i {
				  font-size: 1.3rem;
				  &.pi-instagram {
					color: #BC30A0;
				  }
				  &.pi-twitter {
					color: #1D9BF0;
				  }
				  &.pi-facebook {
					color: #1877F2;
				  }
				}
			  }
			  li:not(:last-of-type) {
				margin-right: 15px;
			  }
			}
			.app-links {
			  display: grid;
			  grid-template-columns: auto auto;
			  grid-gap: 20px;
			  a {
				img {
				  height: 40px;
				};
			  }
			}
		  }
		  .sub--footer {
			height: 80px;
			display: flex;
			align-items: center;
		  }
		}
   }
 }
 span {
   &.rotated {
	 transform: rotate(10deg);
	 margin-left: 2px;
	 transform-origin: center;
	 display: inline-block !important;
   }
 }
</style>