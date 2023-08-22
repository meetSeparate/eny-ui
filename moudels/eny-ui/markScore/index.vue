<script setup>
defineProps({
  modelValue: {
    type: Number,
    default: 0
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="rating">
    <template v-for="item in [5, 4, 3, 2, 1]">
      <input
        :value="item"
        name="rate"
        :id="`star${item}`"
        type="radio"
        :checked="item===modelValue"
        @change="$emit('update:modelValue', item)">
      <label title="text" :for="`star${item}`"></label>
    </template>
  </div>
</template>

<style scoped lang="scss">
.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  float: right;
  cursor: pointer;
  font-size: 30px;
  color: #666;
}

.rating:not(:checked) > label:before {
  content: '★';
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}
</style>