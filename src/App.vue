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


export default {
  name: 'App',

  components:{
    head_er
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
</style>
