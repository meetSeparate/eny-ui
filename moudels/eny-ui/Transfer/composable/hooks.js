import {computed, reactive, ref} from "vue";


// Transfer穿梭框下拉框index逻辑封装
export const useTargetIndex = (initialIndex) => {
    const targetIndex = ref(initialIndex)

    const changeTargetIndex = (newIndex) => {
        targetIndex.value = Number(newIndex)
    }

    return {
        targetIndex,
        changeTargetIndex
    }
}


// Transfer穿梭框计算属性封装
export const useComputed = (transferData, targetIndex, rightData) => {
    const leftTitle = computed(() => {
        return transferData[targetIndex.value].title
    })

    // 左侧列表数据
    const leftData = computed(() => {
        const {data: currentData} = transferData[targetIndex.value]
        return currentData.filter(item => {
            if (!rightData.value.find(({id}) => item.id === id)) {
                return item
            }
        })
    })

    return {
        leftTitle,
        leftData
    }
}


// 列表右侧数据获取
export const useRightData = (initialData, listData) => {
    // 右侧列表数据初始化
    const rightData = ref(initialData)

    // 新增数据
    const addRightData = (newData) => {
        rightData.value = [
            ...rightData.value,
            ...newData,
        ]

        listData.leftData = []
    }

    // 移除数据
    const removeRightData = (newData) => {
        newData.forEach(item => {
            rightData.value = rightData.value.filter(ele => ele.id !== item.id)
        })

        listData.rightData = []
    }

    return {
        rightData,
        addRightData,
        removeRightData
    }
}


// 维护左侧列表和右侧列表的过渡选中列表
export const useMiddleListData = () => {
    // 选中的列表
    const listData = reactive({
        leftData:[],
        rightData: []
    })

    const addChecked = (item, leftOrRight) => {
        switch (leftOrRight) {
            case 'left':
                listData.leftData.push(item)
                break
            case 'right':
                listData.rightData.push(item)
                break
            case 'default':
                break
        }

    }

    const removeChecked = (item, leftOrRight) => {
        switch (leftOrRight) {
            case 'left':
                listData.leftData = listData.leftData.filter(oldItem => oldItem.id !== item.id)
                break
            case 'right':
                listData.rightData = listData.rightData.filter(oldItem => oldItem.id !== item.id)
                break
            case 'default':
                break
        }
    }


    return {
        listData,
        addChecked,
        removeChecked
    }

}


// 拖拽事件维护
export const useDragItem = () => {
    const dragItem = ref(null)

    const setDragItem = (item) => {
        dragItem.value = item
    }

    return {
        dragItem,
        setDragItem
    }
}