<template>
  <div id="app">
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
      <TabBar v-if="$route.meta.tabBarFlag"/>
  </div>
</template>

<script>
import TabBar from "common/footer/"
import {getLocation} from "api/city"
import {mapMutations} from "vuex";
export default {
   name:"app",
   components:{
     TabBar
   },
  async created(){
    let data = await getLocation();
    console.log(data);
   this.handleModifyCityInfo(data.data)
    
   },
   methods:{
     ...mapMutations({
       handleModifyCityInfo:"city/handleModifyCityInfo"
     })
   }
}
</script>
<style scoped>
#app{
  height: 100%;
  overflow: auto;
}
</style>
