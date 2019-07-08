<template>
  <div id="app">
      <router-view></router-view>
      <TabBar v-if="$route.meta.tabBarFlag"/>
  </div>
</template>

<script>
import TabBar from "common/footer/"
export default {
   name:"app",
   components:{
     TabBar
   }
}
</script>
<style scoped>
#app{
  height: 100%;
  overflow: auto;
}
</style>
