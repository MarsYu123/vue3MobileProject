<template>
  <div class="compDialog">
    <div class="compDialog-main flex-dir-column">
      <div
        class="title"
        v-text="props.title"
      />
      <div class="content flex-dir-column">
        <slot />
      </div>
      <div class="btn dis-flex" :class="{oneBtn: !isCloseBtn}">
        <div
          v-if="isCloseBtn"
          class="item close"
          @click="tapClose"
        >
          {{ props.closeText }}
        </div>
        <div
          class="item confirm"
          @click="tapConfirm"
        >
          {{ props.confirmText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    closeText?: string
    confirmText?: string
    isCloseBtn?: boolean
  }>(),
  {
    title: '',
    closeText: '取消',
    confirmText: '确定',
    isCloseBtn: true
  }
)
const emits = defineEmits([ 'close', 'confirm' ])
const tapClose = () => {
  emits('close')
}
const tapConfirm = () => {
  emits('confirm')
}
</script>

<style scoped lang="scss">
.compDialog {
  @include wh();
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(#000, 0.75);
  z-index: 988;
  &-main {
    width: 5.4rem;
    border-radius: 0.24rem;
    background: #fff;
    max-height: 6rem;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    .title {
      @include font(var(--viceTextColor) 0.32 0.44);
      text-align: center;
      margin: 0.32rem 0.3rem 0;
    }
    .content {
      flex: 1;
      justify-content: center;
      padding: 0 0.32rem;
    }
    .btn {
      @include wh(100% 0.88);
      @include border1px(#e1eff3, top);
      &.oneBtn{
        .item{
          @include wh();
        }
      }
      .item {
        @include wh(50% 100%);
        @include font(var(--subTextColor) 0.32 0.88);
        text-align: center;
        &.confirm {
          color: var(--viceMainColor);
        }
        &+.item {
          @include border1px(#e1eff3, left);
        }
      }
    }
  }
}
</style>
