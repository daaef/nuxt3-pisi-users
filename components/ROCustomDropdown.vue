<template>
  <el-menu
      :default-active="$route.fullPath"
      class="sidebar"
      @open="handleOpen"
      @close="handleClose"
      router
  >
    <div class="header-sidebar">
      <img src="/auth-logo.png" alt="" />
    </div>
    <div class="sidebar--grid">
      <div class="">

        <el-sub-menu index="1">
          <template #title>
            <div class="flex flex-col line-less justify-center">
              <h4>Matthew Ero</h4>
              <div class="text-gray-400">
                <i class="iconly-Location mr-1 text-xl icli" />
                <!--                  <el-icon><location /></el-icon>-->
                <span>Nigeria</span>
              </div>
            </div>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item class="mt-10" index="/">
          <i class="iconly-Activity mr-2 text-xl icli" />
          <span>Transactions</span>
        </el-menu-item>
      </div>
      <div class="">
        <el-menu-item class="mb-3" index="/2">
          <i class="iconly-Swap mr-2 text-xl icli" />
          <span>Exchange</span>
        </el-menu-item>
        <el-menu-item index="/3">
          <i class="iconly-Time-Circle mr-2 text-xl icli" />
          <span>History</span>
        </el-menu-item>
      </div>
      <div class="">
        <el-menu-item index="/4">
          <i class="iconly-Info-Circle mr-2 text-xl icli" />
          <span>Help Center</span>
        </el-menu-item>
        <el-menu-item index="6" class="non-default">
          <i class="iconly-Logout mr-2 text-xl icli" />
          <span>Logout</span>
        </el-menu-item>
      </div>
    </div>
  </el-menu>
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