<template>
  <div class="stack--container mb-6">
    <div class="main--stack">
      <div class="exchange--inputs">
		<div class="input--grid">
        <div class="form-control">
          <ROInputWithAddon @change="handleSelect" @input="handleInput" type="coin" label="From" :coins="store.currencies" />
          <label class="label helpers-bottom" v-if="v$?.$errors?.length">
              <span v-for="(error, i) in v$?.$errors" :key="i" class="label-text-alt formkit-message">
                  {{ error?.$property }}: {{ error?.$message }}
              </span>
          </label>
        </div>
		  <img class="mx-3" src="/exchange.svg" alt="" />
		  <ROCustomDropdown type="currency" :user="true" :currencies="store.fiatCurrencies" label="To" />
		  <Button class="primary" label="Search" icon="pi pi-search" @click.prevent="getOffers" />
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
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import {reactive} from "vue";
import {transactionStore } from "~/stores/transactions";
import {awaitExpression} from "@babel/types";

const store = useStore()
const transaction = transactionStore()
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
  const focusedMode = ref(false)
  const cryptoData = reactive({
      cryptoCurrencyId: '',
      amount: ''
  })

  const rules = {
      cryptoCurrencyId: { required },
      amount: { required },
  };

  const v$ = useVuelidate(rules, cryptoData);
  const handleSelect = (e: any) => {
      cryptoData.cryptoCurrencyId = e?.id
      v$.value.$validate();
  }
  const handleInput = (e: any) => {
      cryptoData.amount = e
      v$.value.$validate();
  }

  const getOffers = async () => {
      await v$.value.$validate();
      if (!v$.value?.$invalid) {
          await transaction.getOffers(cryptoData)
      }
  }
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
    .form-control {
      position: relative;
      .helpers-bottom {
        position: absolute;
        bottom: 0;
        transform: translateY(calc(100%));
        margin-bottom: 0;
        width: 100%;
      }
    }
  }
  .exchange--inputs {
	margin-bottom: 15px;
  }
</style>