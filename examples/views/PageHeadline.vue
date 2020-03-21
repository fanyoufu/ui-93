<template>
  <div>
    <h1>测试my-headline组件</h1>
    <my-headline :level="2" icon="user" size="huge">
        标题123
        <div slot="sub">
          子标题123123123
        </div>
    </my-headline>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style lang="" scoped>

</style>
