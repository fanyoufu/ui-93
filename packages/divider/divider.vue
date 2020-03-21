<template>
<!-- 按semantic-ui中的结构来写 -->
  <div class="ui divider horizontal header">
      <!-- 如果传入了icon,就： -->
      <!-- 显示 i标签 -->
      <!-- 设置class -->
    <i v-if="icon" class="icon" :class="icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyDivider',
  props: {
    icon: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="" scoped>

</style>
