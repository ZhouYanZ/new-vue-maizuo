<template>
    <div class="messageBox_Container">
        <div class="messageBox_title">{{title}}</div>
        <div class="messageBox_content">{{content}}</div>
        <div class="messageBox_btn" @click="handle()">{{btn}}</div>
    </div>
</template>
<script>
export default {
    name:'messageBox'
}
</script>

<style>
    .messageBox_Container{
        width: 6rem;
        height: 3rem;
        background: #fff;
        position: absolute;
        left: 0;
        top:0;
        right:0;
        bottom:0;
        margin:auto;
        z-index:10;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .messageBox_Container>div{
        width: 100%;
        height: 32%;
        text-align: center;
        line-height:1rem; 
        font-size:.3rem;
    }
    .messageBox_Container>div:nth-child(1){
        font-weight: 900;
    }
    .messageBox_Container>div:nth-child(3){
        border-top:1px solid #ccc;
        color:#26a2ff;
    }
</style>