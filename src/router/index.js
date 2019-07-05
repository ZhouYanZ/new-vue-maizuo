import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import movie from "./movie";
import cinema from "./cinema"
import mine from "./mine";

export default new Router({
  routes: [
    movie,
    cinema,
    mine
  ]
})
