<template>
  <div class="stack--container mb-6">
    <div class="main--stack">
      <div class="exchange--inputs">
        <div class="mt-4">
          <el-form
              label-position="top"
              :model="myForm"
          >
          <el-form-item
              label="Sell">
            <el-input
              v-model="input3"
              placeholder="Please input"
              class="input-with-select"
          >
            <template #prefix>
              <i :class="`cf cf-${selected.toLowerCase()} text-xl mr-2`" />
            </template>
            <template #prepend>
              <el-select v-model="selected" placeholder="Select" style="width: 80px">
                <el-option
                    v-for="coin in store.coins"
                    :label="coin.name"
                    :key="coin.id"
                    :value="coin.name"
                >
                  <ROCurrency :icon="coin.name" :name="coin.name" />
                </el-option>
              </el-select>
<!--              <el-dropdown>
                <span class="el-dropdown-link">
                  hey<el-icon class="el-icon&#45;&#45;right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>
                      <ROCurrency icon="btc" name="BTC" />
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <ROCurrency icon="btc" name="BTC" />
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <ROCurrency icon="btc" name="BTC" />
                    </el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                    <el-dropdown-item>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>-->
            </template>
          </el-input>
          </el-form-item>
          </el-form>
        </div>
        <el-button
            class="mt-4 ml-5"
            type="primary"
            size="large"
        >Search <i class="iconly-Search ml-2 icli"></i
        ></el-button
        >
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
  const myForm = ref({})
  const input3 = ref('')
  const selected = ref('')
</script>

<style lang="scss">
  .cf.cf-btc {
    color: #f2a900;
  }
  .el-input-group--prepend .el-input-group__prepend .el-select .el-input .el-input__wrapper {
    box-shadow: none !important;
  }
</style>