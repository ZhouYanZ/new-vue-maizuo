import Vue from "vue";
import MessageBox from "./index.vue";

export const messageBox = (()=>{
    //定义了一个默认的初始数据
    let defaultData = {
        title:"提示",
        content:"内容",
        btn:"按钮",
        handleOk:null,
    }

    //构建一个组件,通过vue继承获取一个实例  
    let MessageBoxCom = Vue.extend(MessageBox);

    return (options)=>{

        //将传递进来的数据赋值到defaultData身上
        if(options){
            for(var key in options){
                defaultData.title = options.title;
                defaultData.content = options.content;
                defaultData.btn = options.btn;
                defaultData.handleOk = options.handleOk
            }
        }


        

        let vm = new MessageBoxCom({
            el:document.createElement("div"),
            data:defaultData,
            methods:{
                handle(){
                    defaultData.handleOk && defaultData.handleOk();
                    document.body.removeChild(vm.$mount().$el);
                }
            }        
        });
        document.body.appendChild(vm.$mount().$el);

      
    }


})()