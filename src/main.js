// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui';

Vue.use(ElementUi)
import store from './store' //引入 Vuex 状态管理
//样式文件，需单独引入
import 'element-ui/lib/theme-chalk/index.css';
/*
//引入IVIEW组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
//引入vue-easytable
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
//引入axios
import axios from 'axios'
Vue.prototype.$ajax = axios*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用 Vuex 进行状态管理
  components: {App},
  template: '<App/>'
})
