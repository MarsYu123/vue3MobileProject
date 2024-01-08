<template>
  <div
    class="compHeader"
    :class="[type, {noBorder: noBorder}]"
  >
    <div class="header-fixed flex-y-center" :style="bgStyle">
      <i
        v-if="!isHome"
        class="header-back"
        @click="toBack"
      />
      <p
        class="header-title"
        v-text="title"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
defineProps<{
  title: string
  type?: 'default'
  noBorder?: false
  bgStyle?: string
}>()
const isHome = computed(() => route.path === '/')
const toBack = () => {
  if (sessionStorage.getItem('jl-jjsx-firstUrl') === location.pathname) {
    router.replace('/')
    sessionStorage.removeItem('jl-jjsx-firstUrl')
  } else {
    router.back()
  }
}
</script>

<style scoped lang="scss">
.compHeader {
  @include wh(100% 0.88);
  flex-shrink: 0;
  z-index: 9;
  &.noBorder{
    .header-fixed{
      border-bottom: none;
      &:after{
        display: none;
      }
    }
  }
  &.blue {
    border-bottom: none;
    .header-fixed{
      &:after {
        display: none;
      }
    }
    .header-fixed {
      background: var(--mainColor);
      .header-title {
        color: #fff;
      }
      .header-back {
        background-image: url('@/assets/image/back-icon-back-w.svg');
      }
    }
  }
  .header {
    &-fixed {
      @include border1px(#e5e5e5, bottom);
      @include wh(100% 0.88);
      background: #fff;
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;
    }
    &-back {
      @include wh(0.2 0.34);
      @include bg(url('@/assets/image/base-icon-back.svg'));
      margin-left: 0.32rem;
      display: block;
    }
    &-title {
      @include font(var(--textColor)0.36 0.88);
      position: absolute;
      height: 100%;
      top: 0;
      left: 0.7rem;
      right: 0.7rem;
      text-align: center;
    }
  }
}
</style>
