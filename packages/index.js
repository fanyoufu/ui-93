// 注意，只引入css
import 'semantic-ui-css/semantic.css'

// 引入定义好的组件
import MyButton from './button/button.vue'
import MyHeadline from './headline/headline.vue'

// 整体向外导出一个对象
// 这个对象有一个install方法。
export default {
  // Vue.use(对象)。它会执行对象的install方法，并传入Vue对象
  install (Vue) {
    // console.log('install ....')
    // MyButton 组件名
    Vue.component('MyButton', MyButton)
    Vue.component('MyHeadline', MyHeadline)
  }
}
