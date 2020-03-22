# ui-93

## 下载
```
npm i ui-3
```

## 使用
```
import UI from 'ui-93'
import 'ui-93/lib/ui-93.css'
Vue.use(UI)
```

## 组件
- 按钮
- 轮播图
- 分隔条
- 标题
- 对话框
### MyButton
```
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
```


### divider
分隔条组件

