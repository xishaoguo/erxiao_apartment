// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './index'
import router from './router'
import ElementUi from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUi)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {Index},
  template: '<Index/>'
})
