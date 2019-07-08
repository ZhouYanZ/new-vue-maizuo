<template>
  <div class="cinema_body">
    <div class="cinema_body_detail" v-for="(item,index) in cinemas" :key="index">
      <div class="cinema_body_detail_name">
        <span>{{item.nm}}</span>
        <span class="cinema_price">{{item.sellPrice}}元起</span>
      </div>
      <div class="cinema_body_detail_address">
        <span>{{item.addr}}</span>
        <span>{{item.distance}}</span>
      </div>
      <div class="cinema_body_detail_card">
        <div>小吃卡</div>
        <div>折扣卡</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    cinemas:{
      type:Array,
      default:[]
    }
  },
  created(){
    console.log(this.cinemas)
  }
};
</script>

<style>
</style>