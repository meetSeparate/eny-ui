<script setup>
import {toRefs} from "vue";

const props = defineProps({
  loading: Boolean
})

const {loading} = toRefs(props)

const show = () =>  {
  loading.value = true
}

const close = () => {
  loading.value = false
}

defineExpose({
  show,
  close
})
</script>

<template>
  <div v-if="loading" class="mask">
  </div>
  <div v-if="loading" class="newtons-cradle">
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
    <div class="newtons-cradle__dot"></div>
  </div>
</template>

<style scoped lang="scss">
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  opacity: .3;
}

.newtons-cradle {
  --uib-size: 80px;
  --uib-speed: 1.2s;
  --uib-color: #474554;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--uib-size);
  height: var(--uib-size);
  margin: 0 auto;
}

.newtons-cradle__dot {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;
}

.newtons-cradle__dot::after {
  content: '';
  display: block;
  width: 100%;
  height: 25%;
  border-radius: 50%;
  background-color: var(--uib-color);
}

.newtons-cradle__dot:first-child {
  animation: swing var(--uib-speed) linear infinite;
}

.newtons-cradle__dot:last-child {
  animation: swing2 var(--uib-speed) linear infinite;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
}

@keyframes swing2 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
  }
}

</style>