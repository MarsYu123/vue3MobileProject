<template>
  <teleport
    to="body"
    :disabled="!isToBody"
  >
    <div
      :class="$attrs.class"
      class="popup"
      :style="cumStyle"
      @touchmove.self="pre">
      <div
        class="popup-mask"
        @click="isMaskClose && closePop('mask')"
      />
      <transition
        name="slide"
        mode="out-in"
      >
        <div
          v-if="isShow"
          class="popup-content flex-dir-column"
        >
          <div
            v-if="isTitle"
            class="popup-title flex-x-between relative"
            :class="type"
          >
            <div class="name">
              {{ title }}
            </div>
            <template v-if="type === 'btn-bottom'">
              <div class="relative">
                <slot name="headerLeft" />
              </div>
              <div
                class="close relative"
                @click="closePop('btn')"
              />
            </template>
            <template v-else>
              <div
                class="left"
                @click="closePop('btn')"
              >
                {{ closeText }}
              </div>
              <div
                class="right"
                @click="handleSubmit"
              >
                {{ confirmText }}
              </div>
            </template>
          </div>
          <div class="popup-content-area flex-dir-column" @touchmove.self="move">
            <slot />
          </div>
          <div
            v-if="isFooterBtn && type === 'btn-bottom'"
            class="popup-button"
            @click="handleSubmit"
          >
            {{ btnText }}
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

withDefaults(
  defineProps<{
    title?: string
    isFooterBtn?: boolean
    btnText?: string
    isMaskClose?: boolean
    isTitle?: boolean
    type?: string
    closeText?: string
    confirmText?: string
    isToBody?: boolean
    cumStyle?: string
  }>(),
  {
    title: '',
    isFooterBtn: true,
    btnText: '确定',
    isMaskClose: true,
    isTitle: true,
    isToBody: true,
    type: 'btn-bottom', // 两种设计，一种底部确定，一种顶部 btn-top
    closeText: '取消',
    confirmText: '确定',
    cumStyle: ''
  }
)
const emits = defineEmits([ 'close', 'handleSubmit' ])

const isShow = ref(true)
document.body.style.overflow = 'hidden'
const closePop = (type: string) => {
  isShow.value = false
  setTimeout(() => {
    emits('close', type)
    document.body.style.overflow = 'visible'
  }, 300)
}
const handleSubmit = () => {
  emits('handleSubmit')
}
onUnmounted(() => {
  document.body.style.overflow = 'visible'
})

const pre = (event: Event) => {
  if (event.cancelable) event.preventDefault()
  return false
}
const move = () => {
  return
}
</script>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
.popup {
  @include wh();
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  &-mask {
    @include wh();
    background: rgba(#000, 0.3);
  }
  &-content {
    width: 100%;
    max-height: 11rem;
    min-height: 2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    border-radius: 0.28rem 0.28rem 0 0;
    overflow: hidden;
    &-area {
      flex: 1;
      overflow: hidden;
    }
  }
  &-title {
    flex-shrink: 0;
    @include wh(auto 1.2rem);
    align-items: center;
    margin: 0 0.32rem;
    @include border1px(rgba(#000000, 0.1), bottom);
    &.btn-top {
      align-items: flex-end;
      height: 1.16rem;
    }
    .name {
      @include font(var(--viceTextColor) 0.36 1.2 500);
      position: absolute;
      height: 100%;
      width: 100%;
      text-align: center;
    }
    .close {
      @include wh(0.32);
      padding: 0.2rem;
      @include bg(url('@/assets/image/base-icon-close.svg'), null, 0.32rem);
      margin-right: -0.2rem;
      box-sizing: content-box;
    }
    .left,
    .right {
      @include font(var(--subTextColor) 0.32 0.44);
      margin-bottom: 0.16rem;
      position: relative;
      z-index: 1;
    }
    .right {
      color: var(--mainColor);
    }
  }
  &-button {
    @include wh(6.86 0.8);
    border-radius: 0.04rem;
    background: linear-gradient(90deg, var(--mainColor) 30%, var(--endMainColor) 100%);
    @include font(#fff 0.28 0.8);
    text-align: center;
    flex-shrink: 0;
    margin: 0 0.32rem 0.32rem;
  }
}
</style>
