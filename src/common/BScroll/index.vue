<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  data() {
    return {};
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 1
    });

    this.scroll.on("scroll", ({ x, y }) => {
      if (y > 30) {
          this.scrollstart();
      }
    });

    this.scroll.on("scrollEnd", () => {
      setTimeout(() => {
          this.scrollEnd();
      }, 1000);
    });
  },
  methods:{
      scrollstart(cb){
       cb && cb()
      },
      scrollEnd(cb){
         cb && cb()
      }
  }
};
</script>

<style>
.wrapper {
  height: 100%;
}
</style>