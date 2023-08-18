<script setup>

</script>

<template>
  <button>
    <slot/>
  </button>
</template>

<style scoped lang="scss">

button {
  padding: 8px 20px;
  border: none;
  background-color: #409eff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #ecf5ff;
    color: #409eff;
    transition: .4s;
  }

}

</style>