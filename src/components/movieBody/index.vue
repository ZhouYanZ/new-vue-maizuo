<template>
  <BScroll ref="bscroll">
    <template>
      <div>
        <Loading v-if="loadingFlag" />
        <div class="movie_body" ref="movieBody" v-if="!loadingFlag">
          <div class="movie_item" v-for="(item,index) in movieList" :key="index">
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
          </div>
        </div>
      </div>
    </template>
  </BScroll>
</template>


<script>
import { getMovieNow } from "api/movie";
import { setTimeout } from "timers";
export default {
  name: "moviebody",
  async created() {
    let data = await getMovieNow();
    if (data) {
      this.loadingFlag = false;
    } else {
      this.loadingFlag = true;
    }
    this.movieList = data.data.movieList;
  },
  data() {
    return {
      movieList: [],
      loadingFlag: true
    };
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

