<template>
  <div class="comp-skeleton fixed">
    <div class="comp-skeleton-box absolute" :style="setStyle(boxStyle)" />
    <div
      v-for="(i, index) in itemList"
      :key="index"
      :style="setStyle(i)"
      class="comp-skeleton-rect absolute"/>
    <div class="mask absolute" :style="setStyle(boxStyle)"/>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

const props =  withDefaults(
  defineProps<{
    skeletor?: string
  }>(),
  {
    skeletor: 'skeleton'
  }
)

const setStyle = computed(() => {
  return ({ width, height, top, left }: IEnumNumber) => {
    return `width: ${width}px; height: ${height}px; left: ${left}px; top: ${top}px;`
  }
})

const itemList = ref([])
const boxStyle = ref({})
onMounted(() => {
  boxStyle.value = document.querySelector(`.${props.skeletor}`).getBoundingClientRect()
  const dom = document.querySelectorAll(`.${props.skeletor} .${props.skeletor}-rect`)
  Array.prototype.forEach.call(dom, (i) => {
    itemList.value.push(i.getBoundingClientRect())
  })
})
</script>

<style scoped lang="scss">
.comp-skeleton {
  z-index: 10;
  @include wh(100vw 100vh);
  background: var(--bgColor);
  left: 0;
  top:0;
  &-box{
    background: #fff;
    border-radius: .08rem;
  }
  &-rect{
    background: var(--borderColorE5);
  }
  .mask{
    overflow: hidden;
    @include element(before) {
      @include wh(200%);
      position: absolute;
      left: -20%;
      top: -50%;
      background: linear-gradient(90deg, transparent 0%, transparent 29% ,rgba(#fff, .4) 30%, rgba(#fff, .7) 31%, rgba(#fff, .4) 32%, transparent 14px);
      animation: shine 2.5s 0s linear infinite;
      transform: rotate(15deg);
      @keyframes shine {
        0% {
          background-position: -468px 0
        }
        100% {
          background-position: 468px 0
        }
      }
    }
  }
}

</style>