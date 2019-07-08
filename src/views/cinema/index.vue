<template>
  <div>
    <HeaderCom title="影院" />
    <div id="cinema_content">
      <div class="cinema_nav">
        <ul>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
        </ul>
      </div>
      <Loading v-if="cinemaFlag"/>
      <CinemaContent :cinemas="cinemas" v-if="!cinemaFlag"/>
    </div>
  </div>
</template>
<script>
import CinemaContent from "components/cinemaContent";
import {cinemaList} from "api/movie";
export default {
  name: "cinema",
  components: {
    CinemaContent
  },
  data(){
    return {
        cinemas:[],
        cinemaFlag:true
    }
  },
 async created(){
   let data = await cinemaList();
   if(data){
     this.cinemaFlag = false;
   }else{
       this.cinemaFlag = true;
   }
   this.cinemas = data.data.cinemas;

  }
};
</script>

<style>
/*cinema*/
#cinema_content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  overflow: auto;
}
#cinema_content .cinema_nav {
  width: 100%;
  position: fixed;
  height: 0.92rem;
  border-bottom: 1px solid #ccc;
  z-index: 2;
  background: #fff;
}
#cinema_content .cinema_nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#cinema_content .cinema_nav ul li {
  width: 100%;
  text-align: center;
  font-size: 0.3rem;
}

/*cinema_body*/

.cinema_body {
  position: relative;
  top: 0.92rem;
  left: 0;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-bottom: 1rem;
}
.cinema_body .cinema_body_detail {
  margin-top: 0.4rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
.cinema_body .cinema_body_detail > div {
  margin-bottom: 0.2rem;
}
.cinema_body .cinema_body_detail .cinema_body_detail_name > span:nth-child(1) {
  font-size: 0.35rem;
}
.cinema_body .cinema_body_detail .cinema_body_detail_name > span:nth-child(2) {
  font-size: 0.3rem;
  color: #f03d37;
}
.cinema_body .cinema_body_detail .cinema_body_detail_address {
  display: flex;
  justify-content: space-between;
  font-size: 0.26rem;
  align-items: center;
}
.cinema_body .cinema_body_detail .cinema_body_detail_card {
  display: flex;
}
.cinema_body .cinema_body_detail .cinema_body_detail_card > div {
  padding: 0 0.06rem;
  height: 0.36rem;
  line-height: 0.36rem;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 0.26rem;
  margin-right: 5px;
}
</style>