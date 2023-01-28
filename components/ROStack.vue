<template>
  <div class="stack--container mb-6">
    <div class="main--stack">
      <div class="exchange--inputs">
		<div class="input--grid">
          <ROInputWithAddon type="coin" label="From" :coins="store.currencies" />
		  <img class="mx-3" src="/exchange.svg" alt="" />
		  <ROCustomDropdown type="currency" :currencies="store.fiatCurrencies" label="To" />
		  <Button class="primary" label="Search" icon="pi pi-search" />
		</div>
      </div>
      <div class="rates-text flex text-sm">
        <span class="bold mr-1 text-gray-400">Official rate:</span>
        <span class="font-bold">1 BTC = 433.72 NGN</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from "~/stores";
import {watchEffect} from "@vue/runtime-core";

  const store = useStore()
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const focusEve = (e: any) => {
    console.log(e, 'e is')
    focusedMode.value = true
  }
  const myForm = ref({})
  const input3 = ref('')
  const focusedMode = ref(false)
  const selected = ref('')
</script>

<style lang="scss">
  .el-input-group--prepend .el-input-group__prepend .el-select .el-input .el-input__wrapper {
    box-shadow: none !important;
    background: #EEEEEE;
  }

  .el-form {
    display: flex;
    align-items: center;
    .el-button, img {
      margin-top: 6px;
    }
  }
  .p-inputgroup {
    width: fit-content;
    min-width: 300px;
    background: #EEEEEE;
    border-radius: 8px;
    transition: .3s ease-in-out;
    &:has(input:focus){
      box-shadow: 0px 5px 20px -10px gray;
    }
    .p-inputtext {
      border: none !important;
      box-shadow: none !important;
    }
    .p-dropdown {
      box-shadow: none !important;
    }
    & > * {
      &.addon {
        width: 125px;
        flex: unset;
      }
      input {
        background: transparent;
        border: none;
      }
      background: transparent;
      border: none;
    }
  }
  .input--grid {
	display: flex;
	align-items: center;
	img {
	  margin-top: 22px;
	}
	.p-button {
	  margin-top: 23px;
	  margin-left: 10px;
	}
  }
  .exchange--inputs {
	margin-bottom: 15px;
  }
</style>