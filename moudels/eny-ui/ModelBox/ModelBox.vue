<script setup>

defineProps({
  title: String,
  dialogVisible: Boolean,
})
</script>

<template>
  <div class="mask" v-show="dialogVisible">
    <div class="model-box">
      <div class="title">
        <h3>{{title}}</h3>

        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
                d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
        </svg>
      </div>

      <div class="main-content">
      <slot name="main-content"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.model-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  min-height: 150px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;

  .title {
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    h3 {
      padding: 5px;
      margin: 0;
    }

    svg {
      height: 1em;
      width: 1em;
      padding: 5px;
      cursor: pointer;
      color: #666666;

      &:hover {
        color: #409eff;
      }
    }
  }

  .main-content {
    padding: 30px 0;
  }

  .footer {
    //padding: 20px 0;
    text-align: right;
  }
}
</style>