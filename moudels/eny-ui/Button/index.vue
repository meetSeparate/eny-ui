<script setup>
defineProps({
  size: {
    type: String,
    default: 'default'
  },
  type: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <button :class="`type-${type} size-${size}`">
    <slot/>
  </button>
</template>

<style scoped lang="scss">

button {
  border: none;
  border-radius: 5px;
  background-color: #f3f7fe;
  color: #3b82f6;
  width: 70px;
  height: 35px;
  transition: .3s;
}

button:hover {
  box-shadow: 0 0 0 3px #3b83f65f;
  background-color: #3b82f6;
  color: #fff;
}

.type-default {
  background-color: #f3f7fe;
  color: #3b82f6;

  &:hover {
    background-color: #3b82f6;
    color: #fff;
  }
}
.type-danger {
  background-color: #f3f7fe;
  color: #f56c6c;

  &:hover {
    box-shadow: 0 0 0 3px #f89898;
    background-color: #f56c6c;
    color: #fff;
  }
}
.type-primary {
  background-color: #f3f7fe;
  color: #8B17D3;

  &:hover {
    box-shadow: 0 0 0 3px #9F5BC9;
    background-color: #8B17D3;
    color: #fff;
  }
}

.size-default {
  width: 70px;
  height: 35px;
}
</style>