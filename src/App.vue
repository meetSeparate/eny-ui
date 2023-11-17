<script setup>
import {ref} from "vue";
import {Transfer, TypeWriter, Loading, EnyButton, EnyInput, EnyMotion, EnySwitch, EnyMarkScore, EnyTab} from "../moudels/eny-ui";
import { showDialog } from '../moudels/eny-ui/EnyDialog'

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
const loading = Loading
const showLoading = () => {
  loading.show()
  setTimeout(() => {
    loading.close()
  }, 2000)
}

const inputValue = ref('')
const switchChecked = ref(false)
const markNumber = ref(1)
</script>

<template>
  <div class="padding">
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
    <eny-motion>
      <div style="margin: 10px"><eny-button @click="showLoading" type="primary">开始</eny-button></div>
    </eny-motion>

    <div style="margin: 10px"><eny-input placeholder="请输入" v-model="inputValue"/></div>
    {{inputValue}}

    <eny-switch v-model="switchChecked" />

    <div class="mark-score">
      <eny-mark-score  v-model="markNumber"/>
    </div>

    <eny-tab />

    <eny-button @click="showDialog('你好， EnyUI', (closed) => {closed()})">展示对话框</eny-button>
  </div>

</template>

<style scoped>
.padding {
  padding: 20px;
}
.mark-score {
  width: 200px;
  overflow: hidden;
}
</style>
