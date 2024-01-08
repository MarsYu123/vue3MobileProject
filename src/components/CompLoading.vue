<template>
  <div class="comp-loading">
    <div class="flex-center">
      <div class="loading" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompLoading'
}
</script>

<style scoped lang="scss">
.comp-loading {
  height: 0.4px;
  .loading {
    width: 0.3px;
    height: 0.3px;
    border: 0.04px solid #333333;
    border-bottom: #aaa 0.04px solid;
    border-radius: 50%;
    animation: load 1.1s infinite linear;
    -webkit-animation: load 1.1s infinite linear;
    -moz-animation: load 1.1s infinite linear;
    -o-animation: load 1.1s infinite linear;
    opacity: 0.5;
  }

  @keyframes load {
    from {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
    }
  }
}
</style>
