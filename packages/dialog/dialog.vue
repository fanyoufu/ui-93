<template>
<!--semantic-ui中约定的： 如果有active类，则会显示 -->
  <div class="ui dimmer modals page" :class="{'active':isShow}">
    <div class="ui standard modal" :class="{'active':isShow}" style="top: 60px;">
      <i class="close icon" @click="hClose"></i>
      <i class="close icon" @click="hNo"></i>
      <div class="header">
          <slot name="header">{{title}}</slot>
      </div>
      <div class="content">
        <div class="description">
          <slot name="body">{{content}}</slot>
        </div>
      </div>
      <div class="actions">
        <div class="ui black button" @click="hNo">{{noTxt}}</div>
        <div class="ui positive right labeled icon button" @click="hYes">
          {{yesTxt}}
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    // 通过父组件中v-model传入
    value: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      default: '系统提示',
      require: false
    },
    content: {
      type: String,
      default: '时间不多了',
      require: false
    },
    noTxt: {
      type: String,
      default: '取消',
      require: false
    },
    yesTxt: {
      type: String,
      default: '确定',
      require: false
    }
  },
  data () {
    return {
      // 由于后期要修改显示/隐藏，我们不能直接在prop中修改，所以这里添加一个数据项 isSHow
      isShow: this.value
    }
  },
  methods: {
    hClose () {
      // 关闭
      this.isShow = false
      // 修改父组件中v-model的值
      this.$emit('input', this.isShow)
    },
    hNo () {
      this.hClose()
      this.$emit('no')
    },
    hYes () {
      this.hClose()
      this.$emit('yes')
    }
  },
  watch: {
    // 监视属性的变化
    // 父级组件中的v-model="abc"，如果abc的变化了，在子组父内部如何得知？
    value () {
      console.log('v-model的值变化了', this.value)
      // 更新子组件内部的状态
      this.isShow = this.value
    }
  }
}
</script>
