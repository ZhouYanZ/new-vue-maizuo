import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "common";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/*
  父组件如何调用子组件中的方法？
    通过this.$refs

*/