<template>
  <div class="">
  	<Button class="primary" label="Create sell offer" @click.prevent="display2 = true" />
	<ROMakeOffer :dialog="display2" @closeModal="display2 = false" />
  </div>
</template>

<script lang="ts" setup>
	const display2 = ref(false);
</script>

<style scoped>

</style>