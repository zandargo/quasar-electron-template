<template>
    <router-view />
</template>

<script setup>
import { useDefStore } from 'src/stores/mainStore'

const storeMain = useDefStore()

</script>

<style lang="scss">
  #appTitlebar {
    background: navy;
  }
</style>
