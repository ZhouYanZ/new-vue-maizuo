import Vue from "vue";
import Header from "./header";
Vue.component("HeaderCom",Header)


Vue.filter("toImg",(url,params)=>{
    return url.replace(/w\.h/,params);
})