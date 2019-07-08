<template>
    <div>
        <HeaderCom/>
        <div id="content">
        
        <div class="movie_menu">
            <router-link class="movie_menu_city" to="/city" tag="div">
                <span>北京</span>
                <i class="iconfont">&#xe627;</i>
            </router-link>
            <ul class="movie_menu_switch">
                <router-link class="movie_menu_active" to="/movie/movieBody" tag="li">正在热映</router-link>
                <router-link to="/movie/movieComming" tag="li">即将上映</router-link>
            </ul>
            <router-link class="movie_meun_search" to="/movie/search" tag="div">
                <i class="iconfont">&#xe613;</i>
            </router-link>
        </div>
       <router-view/>
    </div>
    </div>
</template>
<script>
import MovieBody from "components/movieBody"
export default {
    name:"movie",
    components:{
        MovieBody
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



/*movie_menu*/
#content .movie_menu{
    width: 100%;
    height: .9rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .4rem;
    border: 1px solid #e6e6e6;
    position: fixed;
    left: 0;
    top: 1rem;
    z-index: 2;
}
#content .movie_menu .movie_menu_city span{
    font-size: .3rem;
}

#content .movie_menu .movie_menu_city i{
    font-size: .3rem;
}
#content .movie_menu .movie_meun_search i{
    font-size: .4rem;
    font-weight: 900;
    color: #e54847;
}
#content .movie_menu .movie_menu_switch{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#content .movie_menu .movie_menu_switch li{
    height: 100%;
    line-height: .9rem;
    padding: 0 .2rem;
    font-size: .3rem;
}

#content .movie_menu .movie_menu_switch .router-link-active{
    color: #ef4238;
    border-bottom:2px #ef4238 solid
}


/*movie_body*/
#content .movie_body{
    padding-bottom: 1rem;
    padding-left: .2rem;
    padding-right: .2rem;
    padding-top: .9rem;
    overflow-x:hidden;
}
#content .movie_body .movie_item{
    padding: .2rem 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
#content .movie_body .movie_item .movie_item_pic{
    width: 1.28rem;
    height: 1.8rem;
}
#content .movie_body .movie_item .movie_item_pic img{
    width: 100%;
    height: 100%;
}
#content .movie_body .movie_item .movie_item_info{
    margin-left: .2rem;
    flex: 1;
    height: 100%;
}
#content .movie_body .movie_item .movie_item_info h2{
    font-size: .34rem;
    line-height: .5rem;
    width:3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p{
    font-size: .26rem;
    line-height: .45rem;
    color: #666;
    width: 4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}
#content .movie_body .movie_item .movie_item_info p .grade{
    font-weight: 700;
    color: #faaf00;
    font-size: .3rem;
}

#content .movie_body .movie_item  .movie_item_btn{
    width: 1rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    font-size: .26rem;
    cursor: pointer;
}
#content .movie_body .movie_item .asale{
    background-color: #f03d37;
}
#content .movie_body .movie_item .ticket {
    background-color: #3c9fe6;
}
</style>