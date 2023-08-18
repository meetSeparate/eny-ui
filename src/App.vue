<script setup>
import {Transfer, TypeWriter} from "../moudels/eny-ui";


// 穿梭框数据
const transferData = [
  {
    title: 'iphone',
    data: [
      {
        id: 1,
        name: 'iphone13',
        disabled: false
      },
      {
        id: 2,
        name: 'iphone13Pro',
        disabled: false
      },
      {
        id: 3,
        name: 'iphone13ProMax',
        disabled: true
      }
    ]
  },
  {
    title: '华为',
    data: [
      {
        id: 4,
        name: '华为1',
        disabled: false
      },
      {
        id: 5,
        name: '华为2',
        disabled: false
      },
      {
        id: 6,
        name: '华为3',
        disabled: false
      }
    ]
  },
  {
    title: '小米',
    data: [
      {
        id: 7,
        name: '小米1',
        disabled: false
      },
      {
        id: 8,
        name: '小米2',
        disabled: false
      },
      {
        id: 9,
        name: '小米3',
        disabled: false
      }
    ]
  },
]
</script>

<template>
  <Transfer
    :data="transferData"
    rightTitle="已选择手机型号"
  />

  <type-writer
      :className="'type-it0'"
      :values="['时光不老，我们不散😃！']"
      :cursor="false"
      :speed="60"
  />

</template>

<style scoped>

</style>
