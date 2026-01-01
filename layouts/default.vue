<script setup>
import { useLoader } from '~/composables/useLoader'
const { isLoading } = useLoader()
</script>

<template>
  <div>
    <LayoutHeader />
    <slot />
    <LayoutFooter />
    <CommonLoader v-show="isLoading" />
  </div>
</template>

<style scoped>
</style>