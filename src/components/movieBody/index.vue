<template>
  <BScroll ref="bscroll">
    <template>
      <div>
        <Loading v-if="loadingFlag" />
        <div class="movie_body" ref="movieBody" v-if="!loadingFlag">
          <div class="loading" v-if="scrollLoading">
            <i class="fa fa-spinner fa-pulse"></i>
          </div>
          <v-touch tag="div" @tap="handleDetail(item.id)" class="movie_item" v-for="(item,index) in movieList" :key="index">
            <div class="movie_item_pic">
              <img :src="item.img | toImg('128.180')" />
            </div>
            <div class="movie_item_info">
              <h2>{{item.nm}}</h2>
              <p>
                观众评:
                <span class="grade">{{item.sc}}</span>
              </p>
              <p>
                主演：
                <span>{{item.star}}</span>
              </p>
              <p>
                <span>{{item.showInfo}}</span>
              </p>
            </div>
            <div
              :class="item.globalReleased?'movie_item_btn asale':'movie_item_btn ticket'"
            >{{item.globalReleased?'购票':'预售'}}</div>
          </v-touch>
        </div>
      </div>
    </template>
  </BScroll>
</template>


<script>
import { getMovieNow } from "api/movie";
import {mapState} from "vuex";
export default {
  name: "moviebody",
  activated() {
    
    if(this.currentId != this.cityId){
         this.handleGetMovie();
    }else{
         if(sessionStorage.getItem("movieList")){
            this.movieList = JSON.parse(sessionStorage.getItem("movieList"));
            this.loadingFlag = false;
          }else{
              this.handleGetMovie();
          }    
    }


     

  },
  computed:{
    ...mapState({
      cityId:state=>state.city.cityId
    })
  },
  data() {
    return {
      movieList: [],
      loadingFlag: true,
      scrollLoading:false,
      currentId:-1
    };
  },
  methods:{
   async handleGetMovie(){
        let data = await getMovieNow(this.cityId);
        if (data) {
          this.loadingFlag = false;
        } else {
          this.loadingFlag = true;
        }
        this.movieList = data.data.movieList;
        this.currentId = this.cityId; 
        sessionStorage.setItem("movieList",JSON.stringify(data.data.movieList))
    },
    handleDetail(id){
      this.$router.push({name:"movieDetail",params:{id}})
    }
  },
  mounted(){
      this.$refs.bscroll.handleScrollStart(()=>{
        this.scrollLoading = true;
      })

      this.$refs.bscroll.handleScrollEnd(()=>{
        this.scrollLoading = false;
      })
  }
};
</script>

<style scoped>
.loading {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading > i {
  font-size: 0.4rem;
}
</style>

