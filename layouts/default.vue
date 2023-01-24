<template>
    <main class="main">
	  <a href="#" @click.prevent="openNav = !openNav" class="nav--toggle">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
		</svg>
	  </a>
      <ROSideBar :class="{open: openNav}" />
      <slot />
	  <ConfirmDialog />
	  <Toast />
    </main>
</template>

<script lang="ts" setup>
import {useStore} from "~/stores";

const store = useStore()
const openNav =ref(false)
const route = useRoute()
watch(() => route.query, () => openNav.value = false)
const auth = useAuth()

onMounted(async ()=> {
  await store.fetchCurrencies()
  await store.fetchFiatCurrencies()
  await store.fetchCountries()
  await store.fetchBanks()
})
</script>