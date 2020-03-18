<template>
  <div class="about">

    <my-button animated="vertical">
      <div slot="visible"><i class="shop icon"></i>不要错过哈</div>
    </my-button>
    <br>
    <my-button animated="vertical">
      <div slot="hidden"> ￥90000</div>
      <div slot="visible"><i class="shop icon"></i>不要错过哈</div>
    </my-button>

    <my-button animated="fade" >
      <div slot="hidden">$10000</div>
      <div slot="visible">不要！！！！</div>
    </my-button>
    <br>
    <br>
    <my-button disabled>点赞再走吧!</my-button>
    <br>
    <br>
    <my-button icon="user">带图标的按钮</my-button>
    <br>
    <br>
    <my-button icon="bug">带图标的按钮</my-button>
    <br>
    <br>
    <MyButton icon="bug" size="mini">mini小按钮</MyButton>
    <br>
    <br>
    <my-button loading size="huge">loading大按钮</my-button>
    <br>
    <br>
    <my-button size="massive">哈哈哈大按钮</my-button>
    <br>
    <br>
    <my-button disabled size="massive" icon="warning circle">warning circle</my-button>
    <br>
    <br>

    <br>
    <button @click="hClick">button</button>
    <!-- //对于原生的dom可以直接加@click
    对于组件是不能直接加@click,可以使用@click.native -->
    <my-button @click="hClick" size="massive" icon="wifi">带点击事件</my-button>
    <br>
  </div>
</template>
<script>
export default {
  name: 'PageButton',
  methods: {
    hClick () {
      console.log('click')
      alert('别点我')
    }
  }
}
</script>
