<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  }
})


const emit = defineEmits(['changeSelect'])

</script>

<template>
  <select @change="emit('changeSelect', $event.target.value)">
    <option
        v-for="(title, index) of data"
        :value="index"
        :key="index"
    >
      {{title}}
    </option>
  </select>
</template>

<style scoped lang="scss">

</style>