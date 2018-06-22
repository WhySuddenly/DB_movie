<template>
  <div id="app">
    <head_er></head_er>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import head_er from "./components/head_er";
  import more_msg from "./components/more_msg";

export default {
  name: 'App',

  components:{
    head_er,
    more_msg
  }
}
</script>

<style>
#app {
  position: relative;
  padding-top: 47px;
  font-family:”Microsoft YaHei”,Arial,Helvetica,sans-serif;
  color: #333333;
  max-width: 750px;
  margin: 0 auto 50px auto;
}
.clearfix:before, .clearfix:after{content:"";display:table;}
.clearfix:after{clear:both;overflow:hidden;}
.clearfix{zoom:1;}
.router{position: relative;z-index: 0;}
.star{width: 55px;height: 11px;display: inline-block;margin-right: 10px;background-repeat: no-repeat;}
.star0{background-position: 1px -110px;}
.star0_5{background-position: 1px -99px;}
.star1{background-position: 1px -88px;}
.star1_5{background-position: 1px -77px;}
.star2{background-position: 1px -66px;}
.star2_5{background-position: 1px -55px;}
.star3{background-position: 1px -44px;}
.star3_5{background-position: 1px -33px;}
.star4{background-position: 1px -22px;}
.star4_5{background-position: 1px -11px;}
.star5{background-position: 1px 0px;}
</style>
