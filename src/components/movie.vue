<template>
  <div class="m_content">
    <div class="con">
      <div class="molist">
        <h5>影院热映<span><router-link :to="{name:'more_msg',params:{msg:'hot'}}">更多</router-link></span></h5>
        <ul class="clearfix">
          <li v-for="item in movie01.slice(0,10)">
            <router-link :to="{name:'m_detail',params:{id:item.id}}">
              <div class="cc">
                  <div class="image"><div class="img" v-bind:style="{'background-image':'url('+getimages(item.images.small)+')'}"></div></div>
                  <h6>{{item.title}}</h6>
                  <p v-show="item.rating.average == 0 ? false :true"><span class="star" v-bind:class="starclass(item.rating.average)"></span>{{item.rating.average | numfliter}}</p>
                  <p v-show="item.rating.average == 0 ? true :false" class="mark_show">暂无评分</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="molist">
        <h5>TOP250<span><router-link :to="{name:'more_msg',params:{msg:'top'}}">更多</router-link></span></h5>
        <ul class="clearfix">
          <li v-for="item in movie02.slice(0,10)">
            <router-link :to="{name:'m_detail',params:{id:item.id}}">
              <div class="cc">
                <div class="image"><div class="img" v-bind:style="{'background-image':'url('+getimages(item.images.small)+')'}"></div></div>
                <h6>{{item.title}}</h6>
                <p v-show="item.rating.average == 0 ? false :true"><span class="star" v-bind:class="starclass(item.rating.average)"></span>{{item.rating.average | numfliter}}</p>
                <p v-show="item.rating.average == 0 ? true :false" class="mark_show">暂无评分</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="molist">
        <h5>新片速递<span><router-link :to="{name:'more_msg',params:{msg:'new'}}">更多</router-link></span></h5>
        <ul class="clearfix">
          <li v-for="item in movie03.slice(0,10)">
            <router-link :to="{name:'m_detail',params:{id:item.id}}">
              <div class="cc">
                <div class="image"><div class="img" v-bind:style="{'background-image':'url('+getimages(item.images.small)+')'}"></div></div>
                <h6>{{item.title}}</h6>
                <p v-show="item.rating.average == 0 ? false :true"><span class="star" v-bind:class="starclass(item.rating.average)"></span>{{item.rating.average | numfliter}}</p>
                <p v-show="item.rating.average == 0 ? true :false" class="mark_show">暂无评分</p>
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
        name: "movie",
      data(){
          return{
            movie01:[],
            movie02:[],
            movie03:[],
            type:"",
            title:["影院热映","TOP250","新片速递"],
            mark:"",
          }
      },
      mounted:function(){
          this.$http.get("/api/movie/in_theaters")
        .then(response=>{
          this.movie01=response.data.subjects;
        })
        .catch(error=>{
          console.log(error);
        });

        this.$http.get("/api/movie/top250")
          .then(response=>{
            this.movie02=response.data.subjects;
          })
          .catch(error=>{
            console.log(error);
          });

        this.$http.get("/api/movie/coming_soon")
          .then(response=>{
            this.movie03=response.data.subjects;
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
        getimages(show_url){
          if(show_url!== undefined){
            let _url=show_url.substring(7);
            return 'https://images.weserv.nl/?url='+ _url;
          }
        },
    },
      filters:{
          numfliter(value){
            if(value.toString().length === 1){
              let realvalue=value+".0";
              return realvalue;
            }
            else{
              return value;
            }

          }
      }

    }
</script>

<style>
  .m_content .con{padding: 0 5px;}
  .star{background-image: url("../../static/img/star.png");}
  .molist{overflow-x: hidden;margin-bottom: 10px;}
  .molist ul{list-style-type: none;overflow-scrolling: touch; -webkit-overflow-scrolling:touch;overflow-x:auto;width: 100%; display: -webkit-box;}
  .molist ul::-webkit-scrollbar {display: none;width: 0;}
  .molist>h5{padding: 10px 0;font-size: 1.8rem;font-weight: normal;position: relative;margin: 0 5px;}
  .molist>h5 span{position: absolute;top:50%;margin-top:-10px;right: 0;}
  .molist>h5 span a{display: block;font-size: 1.4rem;color:#00b600;}
  .molist ul li .cc{padding: 0 4px;width: 100px;}
  .molist ul li .cc .image{margin-bottom:5px;height:140px;overflow: hidden;}
  .molist ul li .cc .image .img{width: 100%;height:100%;background-position: center;background-repeat: no-repeat;background-size: cover;}
  .molist .cc h6{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-wrap:normal;font-size: 1.4rem;font-weight: normal;margin-bottom: 5px;text-align: center;}
  .molist .cc p{text-align: center;color:#999999;line-height: 14px;}

</style>
