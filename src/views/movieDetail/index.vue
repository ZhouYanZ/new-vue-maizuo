<template>
    <div>
       <HeaderCom icon="<" :title="detailMovie.nm"/>
       <div id="content">
        <div class="detail_body">
            <div class="detail_movie_bg" :style="{background:'url('+(detailMovie.img?detailMovie.img.replace('w\.h','148.208') :'')+')'}"></div>
            <div class="detail_movie_content">
                <div class="detail_movie_content_bg">
                    <img :src="detailMovie.img | toImg('148.208')"/>
                </div>
                <div class="detail_movie_content_info">
                    <h2>{{detailMovie.nm}}</h2>
                    <p>{{detailMovie.enm}}</p>
                    <p>{{detailMovie.sc}}</p>
                    <p>{{detailMovie.cat}}</p>
                    <p>{{detailMovie.rt}}</p>
                    <p>{{detailMovie.pubDesc}}</p>
                </div>
            </div>
        </div>
        <div class="detail_info">
            <p>{{detailMovie.dra}}</p>
        </div>
        <div class="detail_movie_performer">
            <ul>
                <li v-for="(item,index) in detailMovie.photos" :key="index">
                    <div><img :src="item | toImg('130.180')" alt=""></div>
                </li>
                
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
import {movieDetail} from "api/movie"
export default {
    name:"moveDetail",
    props:["id"],
    async activated(){
        let data = await movieDetail(this.id);
        console.log(data);
        this.detailMovie = data.data.detailMovie;
        console.log(this.detailMovie);
    },
    data(){
        return {
            detailMovie:{}
        }
    }
}
</script>

<style>
    /*content*/
#content{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top:1rem;
    padding-bottom: 1rem;
}


/*detail_body*/

.detail_body{
    position: relative;
    height: 4rem;
    width: 100%;
    overflow: hidden;
}
.detail_body .detail_movie_bg{
    width: 100%;
    height: 100%;
    /* background: url("../img/movie_1.jpg") no-repeat; */
    background-size:cover;
    filter: blur(30px);
    position: absolute;
    left: 0;
    top:0;
    z-index:1;
}
.detail_body .detail_movie_content{
    position: absolute;
    width: 100%;
    z-index:2;
    left:0;
    top:0;
    display: flex;

    align-items: center;
}
.detail_body .detail_movie_content .detail_movie_content_bg{
    width: 2rem;
    height: 3rem;
    margin:.4rem;

}
.detail_body .detail_movie_content .detail_movie_content_bg>img{
    width: 100%;
    height: 100%;
    border:4px solid #ccc;
}
.detail_body .detail_movie_content .detail_movie_content_info{
    color:#fff;
}
.detail_body .detail_movie_content .detail_movie_content_info h2{
    font-size:.4rem;
    font-style:normal;
    line-height: .8rem;
}
.detail_body .detail_movie_content .detail_movie_content_info p{
    font-size: .26rem;
    line-height: .46rem;
    color: #ccc;
}

#content .detail_info{
    padding: .1rem;
    font-size:.3rem;
}
#content .detail_movie_performer{
    position: relative;
    width: 100%;
    margin:.4rem;
}
#content .detail_movie_performer ul{
    display: flex;
    width: max-content;
}
#content .detail_movie_performer>ul li{
    margin-right: .4rem;
    text-align: center;
    flex-shrink: 0;

}

#content .detail_movie_performer>ul li div{
    margin-bottom: .1rem;
}
#content .detail_movie_performer>ul li p{
    fonr-size:.2rem;
    line-height: .3rem;
}
</style>