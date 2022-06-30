<template>
  <div style="height: 80px">
    <p>Testando: {{ storeMain.tab }}</p>
  </div>
</template>

<script setup>
import { useDefStore } from 'src/stores/mainStore'
const storeMain = useDefStore()
</script>

<style lang="scss" scoped>
</style>
