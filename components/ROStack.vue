<template>
  <div class="stack--container mb-6">
    <div class="main--stack">
      <div class="exchange--inputs">
        <div class="mt-4">
          <el-input
              v-model="input3"
              placeholder="Please input"
              class="input-with-select"
          >
            <template #prepend>
              <el-select v-model="select" placeholder="Select" style="width: 115px">
                <el-option label="Restaurant" value="1" />
                <el-option label="Order No." value="2" />
                <el-option label="Tel" value="3" />
              </el-select>
            </template>
          </el-input>
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
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<style scoped>

</style>