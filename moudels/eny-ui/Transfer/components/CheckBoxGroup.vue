<script setup>
defineProps({
  data: {
    type: Object,
    default: () => {}
  },

  type: String
})

const emit =defineEmits(['setDragItem', 'changeChecked'])
</script>

<template>
  <div
      v-for="item of data"
      :key="item.id"
      :id="item.id"
      :draggable="!item.disabled"
      @dragstart="emit('setDragItem', item)"
      :class="['list-data', {disabled: item.disabled}]"
  >
    <input type="checkbox" @change="emit('changeChecked', $event.target.checked, item, type)">
    <label :for="item.id">{{item.name}}</label>
  </div>
</template>

<style scoped lang="scss">
.list-data {
  height: 20px;
  padding: 5px;
  display: flex;
  font-size: 12px;
  color: #666;
  align-items: center;

  &.disabled {
    opacity: .6;
  }
}
</style>