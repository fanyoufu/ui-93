<template>
  <div>
    <h1>测试my-headline组件</h1>
    <my-headline :level="3" >
        level3
    </my-headline>

    <my-headline :level="1" icon="settings" size="huge">
        标题1huge
    </my-headline>
    <my-headline :level="1" icon="settings" size="tiny">
        标题1mini
    </my-headline>

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
