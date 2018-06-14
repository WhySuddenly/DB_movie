<template>
  <div class="detail" >
    <div class="ad"></div>
    <div class="con">
      <ul>
        <li v-for="item in movice" v-if="item.id==id">
          <h5>{{item.name}}</h5>
          <div class="pic_mes">
            <p><span class="star" v-bind:class="starclass(item.mark)"></span>{{item.mark}}</p>
            <div class="mes">
              <p>109分钟 / 动画 / 奇幻 / 冒险 / 今井一晓(导演) / 水田山葵 / 大原惠美 / 嘉数由美 / 2018-06-01(中国大陆) 上映</p>
              <div class="mesimg" v-bind:style="{'background-image':'url(../'+item.img+')'}"></div>
            </div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "m_detail",
    data(){
      return{
        id:"",
        name:"",
        movice:[]
      }
    },

    mounted:function(){
      this.id=this.$route.params.id;

      this.$http.get("../../static/data.json")
        .then(response=>{
          this.movice=response.data.movice;
        })
        .catch(error=>{
          console.log(error);
        });
    },
    methods: {
      starclass(type) {
        if (type < 1 && type > 0) {
          return "star0";
        }
        else if (type <= 1.4 && type >= 1) {
          return "star0_5";
        }
        else if (type <= 2.4 && type >= 1.5) {
          return "star1";
        }
        else if (type <= 3.4 && type >= 2.5) {
          return "star1_5";
        }
        else if (type <= 4.4 && type >= 3.5) {
          return "star2";
        }
        else if (type <= 5.4 && type >= 4.5) {
          return "star2_5";
        }
        else if (type <= 6.4 && type >= 5.5) {
          return "star3";
        }
        else if (type <= 7.4 && type >= 6.5) {
          return "star3_5";
        }
        else if (type <= 8.4 && type >= 7.5) {
          return "star4";
        }
        else if (type <= 9.4 && type >= 8.5) {
          return "star4_5";
        }
        else if (type >= 9.5) {
          return "star5";
        }
      }
    }
  }
</script>

<style scoped>
  .detail{position: relative;z-index:-1;}
  .detail ul{padding-top:20px;}
  .con{padding:0 18px;}
  .star{width: 55px;height: 11px;display: inline-block;margin-right: 10px;background-repeat: no-repeat;background-image: url("../../static/img/star.png");}
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
  .pic_mes{margin-right: 100px;position: relative;}
  .detail ul li h5{margin:0 0 5px;font-size: 24px;line-height: 32px;word-break: break-all;font-weight: normal;}
  .mes p{color: #494949;margin-top: 15px;padding-right: 24px;font-size: 14px;line-height: 1.6;}
  .mesimg{position: absolute;width: 100px;height: 142px;top:0;right: -100px; background-size: cover;background-repeat: no-repeat;background-position: center;}
</style>
