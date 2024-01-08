<template>
  <div
    class="sort-icon flex-center flex-dir-column"
    :class="$attrs.dir"
  />
</template>

<style scoped lang="scss">
.sort-icon{
  @include wh(.32);
  @include bg(url('@imgs/base-icon-sort.svg'));
  flex-shrink: 0;
  &.ASC{
    background-image: url('@imgs/base-icon-sort-t.svg');
  }
  &.DESC{
    background-image: url('@imgs/base-icon-sort-b.svg');
  }
}
</style>