<template>
    <div id="footer">
        <ul>
            <router-link tag="li" v-for="(item,index) in tabbar" :key="index" :to="item.path">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"tabBar",
    data(){
        return {
            tabbar:[
                {
                    title:"电影",
                    icon:"&#xe717;",
                    path:"/movie"
                },
                {
                    title:"影院",
                    icon:"&#xe61d;",
                    path:"/cinema"
                },
                {
                    title:"我的",
                    icon:"&#xe605;",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
    #footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom:0;
    border-top: 2px #ebe8e3 solid;
    background: #fff;
}
#footer>ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
#footer>ul>li{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: .05rem 0;
}
#footer>ul>li>i{
    font-size: .4rem;
}
#footer>ul>li>span{
    font-size: .3rem;
}

#footer>ul>.router-link-active{
    color:#c33;
}
</style>