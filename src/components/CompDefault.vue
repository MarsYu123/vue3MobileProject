<template>
  <div class="empty-default flex-center flex" :class="type">
    <img :src="type === 'white' ? defaultImgWhite : defaultImg" alt="" />
    {{ tips }}
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@utils/util'

const defaultImg = getAssetsFile('base-default.png')
const defaultImgWhite = getAssetsFile('base-default-gary.png')
defineProps<{
  tips?: string
  type?: string // white 透明底
}>()
</script>

<style scoped lang="scss">
.empty-default {
  flex: 1;
  background: var(--bgColor);
  @include font(#ccc 0.28);
  flex-direction: column;
  &.white{
    background: transparent;
  }
  img {
    @include wh(1.6);
  }
}
</style>
