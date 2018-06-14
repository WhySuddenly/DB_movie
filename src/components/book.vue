<template>
  <div class="book">
    <div class="con">
      <div class="molist" v-for="tl in title">
        <h5>{{tl}}</h5>
        <ul class="clearfix">
          <li v-for="item in book.slice(0,8)">
            <router-link :to="{name:'b_detail',params:{id:item.id}}">
              <div class="cc">
                  <div class="image"><div class="img" v-bind:style="{'background-image':'url('+item.img+')'}"></div></div>
                  <h6>{{item.name}}</h6>
                  <p><span class="star" v-bind:class="starclass(item.mark)"></span>{{item.mark}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "book",
    data(){
      return{
        book:[],
        type:"",
        title:["最受关注图书｜虚构类","最受关注图书｜非虚构类","值得推荐图书"],
        id:"",
        name:""
      }
    },
    mounted:function(){
      this.$http.get("../static/data.json")
        .then(response=>{
          this.book=response.data.book;
        })
        .catch(error=>{
          console.log(error);
        });

      this.starclass(this.type);
    },
    methods:{
      starclass(type){
        if(type<1 && type>0){
          return "star0";
        }
        else if(type<=1.4 && type>=1){
          return "star0_5";
        }
        else if(type<=2.4 && type>=1.5){
          return "star1";
        }
        else if(type<=3.4 && type>=2.5){
          return "star1_5";
        }
        else if(type<=4.4 && type>=3.5){
          return "star2";
        }
        else if(type<=5.4 && type>=4.5){
          return "star2_5";
        }
        else if(type<=6.4 && type>=5.5){
          return "star3";
        }
        else if(type<=7.4 && type>=6.5){
          return "star3_5";
        }
        else if(type<=8.4 && type>=7.5){
          return "star4";
        }
        else if(type<=9.4 && type>=8.5){
          return "star4_5";
        }
        else if(type>=9.5){
          return "star5";
        }
      },
      routeurl(id,name){
        this.$router.push({name:"b_detail",query:{id:id,name:name}});
      }
    }

  }
</script>

<style scoped>
  .book .con{padding: 0 5px;}
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
  .molist{overflow-x: hidden;margin-bottom: 10px;}
  .molist ul{list-style-type: none;overflow-scrolling: touch; -webkit-overflow-scrolling:touch;overflow-x:auto;width: 100%; display: -webkit-box;}
  .molist ul::-webkit-scrollbar {display: none;width: 0;}
  .molist>h5{padding: 10px 5px;font-size: 1.8rem;font-weight: normal;}
  .molist ul li .cc{padding: 0 4px;width: 100px;}
  .molist ul li .cc .image{margin-bottom:5px;height:140px;overflow: hidden;}
  .molist ul li .cc .image .img{width: 100%;height:100%;background-position: center;background-repeat: no-repeat;background-size: cover;}
  .molist .cc h6{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-wrap:normal;font-size: 1.4rem;font-weight: normal;margin-bottom: 5px;text-align: center;}
  .molist .cc p{text-align: center;}

</style>
