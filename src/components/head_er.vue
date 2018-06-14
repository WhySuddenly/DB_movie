<template>
  <div class="head">
    <div class="con">
      <div class="logo">豆瓣</div>
      <div class="nav">
        <ul class="clearfix">
          <li class="m_color"><router-link to="/" >电影</router-link></li>
          <li class="b_color"><router-link to="/book" >图书</router-link></li>
        </ul>
        <div class="navicon" v-on:click="show_t"></div>
      </div>
    </div>
    <div class="search" v-show="show">
      <div class="s_con">
        <div class="top">
          <div class="s_input">
            <form method="get">
              <input type="search"/>
            </form>
          </div>
          <span class="close" v-on:click="show_f">关闭</span>
        </div>
        <div class="content">
          <ul class="clearfix">
            <li v-for="c in search_c">
              <router-link to="#">
                <h6 v-bind:style="{color:c.color}">{{c.name}}</h6>
                <p>{{c.detail}}</p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <div class="bt_mes">
            <p><router-link to="#"><span>注册</span></router-link></p>
            <p><router-link to="#"><span>登录</span></router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "hed",
      data(){
          return{
            showa:false,
            showb:false,
            color:"",
            show:false,
            search_c:[
              {name:'电影',detail:"影院热映",color:"#2384e8"},
              {name:'电视',detail:"正在热播",color:"#f4ab51"},
              {name:'图书',detail:"畅销排行",color:"#9f7860"},
              {name:'同城',detail:"周末活动",color:"#e6467e"},
              {name:'小组',detail:"志趣相投",color:"#2ab8cc"},
              {name:'音乐',detail:"新碟榜",color:"#7a6adb"},
              {name:'阅读',detail:"电子书",color:"#36cc99"},
              {name:'游戏',detail:"虚拟世界",color:"#cc8942"},
              {name:'应用',detail:"玩手机",color:"#12cc4b"},
              {name:'广播',detail:"友邻动态",color:"#cc441d"},
              {name:'FM',detail:"红心歌单",color:"#8861cc"},
              {name:'市集',detail:"购买原创",color:"#cc1896"},
              ]
          }
      },
methods:{
          show_t(){
            this.show=true;
          },
         show_f(){
          this.show=false;
        }
       }
      }

</script>

<style scoped>
.head{height: 47px;position: fixed;top:0;left:0;width: 100%;background: #fff;z-index: 999;}
.head .con{border-bottom: 1px solid #e0e0e0;position: relative;height: 46px;padding: 0 10px;}
.logo{position: absolute;left:10px;top:50%;padding:3px;margin-top:-20px;color:#00b600;font-size: 26px;font-weight: bold;}
.nav{position: absolute;right: 10px;top:50%;margin-top:-20px;padding-right:34px; }
.nav ul{list-style-type: none;}
.nav ul li{display: inline-block;padding: 10px;}
.nav ul li a{color:#333333;text-decoration: none;font-size: 15px;}
.nav ul li{display: inline-block;padding: 10px;}
.nav ul li.m_color a {color:#2384E8;}
.nav ul li.b_color a {color:#9F7860;}
.navicon{width: 24px;height: 18px;background: url("../../static/img/nav.png") no-repeat center;position: absolute;right: 0;top:50%;margin-top:-6px;background-size: cover;}
.search{position: fixed;top:0;left:0;right: 0;bottom:0;height: 100%;background: #fff;}
.s_con .top{position: relative;}
.s_con .top .close{position: absolute;top:50%;color:#42bd56;margin-top:-11px;left: 18px;display: block;font-size: 16px;z-index: 2;font-weight: 400;}
.s_input{padding: 15px 18px 15px 60px;border-bottom: 1px solid #f3f3f3;position: relative;}
.s_input input{-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;padding: 10px; border: none;width: 100%;height: 30px;background: url('../../static/img/search.png') no-repeat 50% #f3f3f3;background-size: 16px;outline:none; }
.content ul{padding: 20px 10px 0 10px;}
.content ul li{width: 33.33%;float: left;margin-bottom: 10px;text-align: center;}
.content ul li a{display: block;padding: 10px 0;}
.content ul li a h6{font-weight: 400;font-size: 24px;line-height: 28px;}
.content ul li a p{color:#999;}
.bottom{position: absolute;bottom:20px;left:0;width: 100%;padding:0 10px;}
.bt_mes{font-size: 0;}
.bottom p{display: inline-block;width: 50%;}
.bottom p a{color:#42bd56;display: block;padding: 10px 0; }
.bottom p a span{display: block; border-right: 1px solid #e0e0e0;text-align: center;font-size:1.6rem;}
.bottom p:first-child a span{border-right: 1px solid #e0e0e0;}

</style>
