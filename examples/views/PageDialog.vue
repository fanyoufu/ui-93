<template>
  <div>

    <h1>测试my-dialog</h1>
    <button type="primary" @click="isShow = !isShow">切换显示</button>
    <my-dialog
      v-model="isShow"
      title="哈哈哈"
      content="闲茶淡水饭"
      @no="hNo"
      @yes="hYes">
    <div slot="body">
      <p>这里我的是内容</p>
      <p>这里我的是内容</p>
      <p>这里我的是内容</p>
      <p>这里我的是内容</p>
    </div>
    </my-dialog>
  </div>
</template>

<script>
export default {
  name: 'PageDialog',
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="" scoped>

</style>
