<template>
  <div class="m_content">
    <div class="con">
      <div class="more_list">
        <h6>{{listtitle | titlefliter}}</h6>
        <ul class="clearfix">
          <li v-for="item in sub">
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
        name: "more_msg",
      data(){
          return{
            listtitle:this.$route.params.msg,
            sub:[],
            type:"",
            mark:"",
            msg:this.$route.params.msg,
            showurl:[{hot:"/api/movie/in_theaters?start=0&count=30",top:"/api/movie/top250?start=0&count=100",new:"/api/movie/coming_soon?start=0&count=100"},]
          }
      },
      mounted:function(){
        let str0=this.msg.toString();
        let url0=this.showurl;
        console.log(url0[0][str0]);
        this.$http.get(url0[0][str0])
          .then(response=>{
            this.sub=response.data.subjects;
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

        },
        titlefliter(value){
          if(value == "hot"){
            value="影院热映";
            return value;
          }
          else if(value == "top"){
            value="TOP250";
            return value;
          }
          else if(value == "new"){
            value="新片速递";
            return value;
          }
        }
      }
    }
</script>

<style scoped>
  .star{background-image: url("../../static/img/star.png");}
  .more_list{padding-top: 20px;}
  .more_list h6{font-size: 24px;margin-bottom: 20px;padding-left: 4%;font-weight: normal;}
  .more_list ul li{  float: left;  box-sizing: border-box;width: 33.33333%;padding-left: 4%;padding-right: 4%;margin-bottom: 20px;}
  .more_list ul li a{display: block;}
  .more_list .cc .image{ margin-bottom: 5px;min-height:140px;overflow: hidden;}
  .more_list .cc  .img{width: 100%;height:136px;background-position: center;background-repeat: no-repeat;background-size: cover;}
  .more_list .cc h6{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;word-wrap:normal;font-size: 1.4rem;font-weight: normal;margin-bottom: 5px;text-align: center;}
  .more_list .cc p{text-align: center;color:#999999;line-height: 14px;}

</style>
