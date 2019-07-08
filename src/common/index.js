import Vue from "vue";
import Header from "./header";
import BScroll from "./BScroll";
import Loading from "./loading/"
Vue.component("HeaderCom",Header)
Vue.component("BScroll",BScroll)
Vue.component("Loading",Loading)
Vue.filter("toImg",(url,params)=>{
    return url.replace(/w\.h/,params);
})