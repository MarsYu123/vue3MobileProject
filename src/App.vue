<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRouterStore } from '@/stores'
const routerStore = useRouterStore()
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <keep-alive :include="routerStore.routerInfo.keepAlive">
      <Component
          :is="Component"
          :key="route.fullPath || undefined" />
    </keep-alive>
  </RouterView>
</template>

<style scoped></style>
