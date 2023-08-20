<script setup>
import propsData from "./composable/props";
import EnySelect from "../Select/index.vue";
import CheckBoxGroup from "../CheckBoxGroup/index.vue";
import EnyButton from "../Button/index.vue";

import {
  useTargetIndex,
  useComputed,
  useRightData,
  useMiddleListData,
  useDragItem
} from "./composable/hooks"

// props数据
const props = defineProps(propsData)

// 下拉框数据
const options = props.data.map(item => item.title)

// 切换下拉框数据触发回调
const {targetIndex, changeTargetIndex} = useTargetIndex(0)

// 左侧和右侧维护列表
const {listData, addChecked, removeChecked} = useMiddleListData()

// 右侧列表操作
const {rightData, addRightData, removeRightData} = useRightData([], listData)

// 计算属性
const {leftTitle, leftData} = useComputed(props.data, targetIndex, rightData)


// 更改选中状态
const changeChecked = (checked, item, leftOrRight) => {
  // 如果是选中
  if (checked) {
    addChecked(item, leftOrRight)
  } else {
    // 如果是取消选中
    removeChecked(item, leftOrRight)
  }
}

// 维护拖拽元素对象
const {dragItem, setDragItem} = useDragItem()

</script>

<template>
  <eny-select :data="options" @changeSelect="changeTargetIndex"/>

  <div class="transfer">
    <div class="box left-box"
         @dragover.prevent
         @drop="removeRightData([dragItem])"
    >
      <div class="list-title">
        <h3>{{leftTitle}}</h3>
      </div>

      <div>
        <check-box-group
            :data="leftData"
            type="left"
            @setDragItem="setDragItem"
            @changeChecked="changeChecked"
        />
      </div>
    </div>
    <div class="box button-group">
      <eny-button
          :class="{disabled: listData.rightData.length===0}"
          @click="removeRightData(listData.rightData)"
      >
        &lt
      </eny-button>

      <eny-button
          :class="{disabled: listData.leftData.length===0}"
          @click="addRightData(listData.leftData)"
          style="margin-left: 10px"
      >
        &gt
      </eny-button>
    </div>
    <div class="box right-box"
         @dragover.prevent
         @drop="addRightData([dragItem])"
    >
      <div class="list-title">
        <h3>{{props.rightTitle}}</h3>
      </div>
      <div>
        <check-box-group
            :data="rightData"
            type="right"
            @setDragItem="setDragItem"
            @changeChecked="changeChecked"
        />
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.transfer {
  display: flex;
  width: 510px;
  height: 360px;
  padding: 20px;

  .box {
    width: 170px;
    height: 100%;
  }

  .left-box, .right-box {
    border: 1px solid #ddd;
    border-radius: 5px;

    .list-title {
      height: 40px;
      background-color: #f5f7fa;
      line-height: 40px;
      text-align: center;
    }

    h3 {
      font-size: 14px;
      padding: 0;
      margin: 0;
    }
  }

  .button-group {
    display: flex;
    justify-content: center;
    align-items: center;

    .disabled {
      opacity: .6;
      cursor: not-allowed;
    }

  }
}
</style>