<template>
    <header id="header">
        <h1>{{title}}</h1>
        <p @click="handleBack()">{{icon}}</p>
    </header>
</template>
<script>
export default {
    name:"headerCom",
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        },
        icon:{
            type:String,
            default:""
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        }
    }
    
}
</script>

<style>
    #header{
    width: 100%;
    height: 1rem;
    background: #e54847;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}
#header>h1{
    font-size: .32rem;
    font-style: normal;
    color: #fff;
}
#header>p{
    position: absolute;
    left: .1rem;
    font-size:.4rem;
    color: #fff;
}

</style>