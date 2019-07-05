<template>
    <div class="movie_body">
        <div class="movie_item" v-for="(item,index) in comingList" :key="index">
            <div class="movie_item_pic">
                <img :src="item.img | toImg('128.180')">
            </div>
            <div class="movie_item_info">
                <h2>{{item.nm}}</h2>
                <p><span>{{item.wish}}</span>人想看</p>
                <p>主演：<span>{{item.star}}</span></p>
                <p><span>{{item.rt}}</span>上映</p>
            </div>
            <div :class="item.showst==1?'movie_item_btn ticket':'movie_item_btn asale'">{{item.showst==1?'想看':'预售'}}</div>
        </div> 
    </div>
</template>

<script>
import {getMovieComm} from "api/movie";
export default {
    name:"movieComming",
    async created(){
        let data = await getMovieComm();
        this.comingList = data.data.comingList
    },
    data(){
        return {
            comingList:[]
        }
    }
}
</script>


<style>
    
</style>