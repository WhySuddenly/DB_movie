<template>
  <div class="detail" >
    <div class="ad"></div>
    <div class="con">
      <ul>
        <li>
          <h5>{{this.movice.title}}</h5>
          <div class="pic_mes">
            <p v-show="this.average == 0 ? false :true"><span class="star" v-bind:class="starclass(this.average)"></span>{{this.average | numfliter}}</p>
            <p v-show="this.average == 0 ? true :false" class="mark_show">暂无评分</p>
            <div class="mes">
              <p>{{this.msg.join(" / ")}}</p>
              <div class="mesimg" v-bind:style="{'background-image':'url('+this.smallimg+')'}"></div>
            </div>
          </div>

        </li>
      </ul>
      <div class="intro">
        <h4>{{this.movice.title}}的剧情简介</h4>
        <p>{{this.movice.summary}}</p>
      </div>
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
        movice:[],
        msg:[],
        average:"",
        smallimg:"",
      }
    },

    mounted:function(){
      this.id=this.$route.params.id;

      this.$http.get("/api/movie/subject/"+this.id)
        .then(response=>{
          this.movice=response.data;
          this.average=response.data.rating.average;
          this.smallimg=response.data.images.small;

          let genres=[];
          for(let i=0;i<response.data.genres.length;i++){
            genres=response.data.genres[i];
            this.msg.push(genres);
          }

          let directors=response.data.directors[0].name;
          this.msg.push(directors+"(导演)");

          let casts=[];
          for(let i=0;i<response.data.casts.length;i++){
            casts=response.data.casts[i].name;
            this.msg.push(casts);
          }

          let countries=[];
          for(let i=0;i<response.data.countries.length;i++){
            countries=response.data.countries[i];
            this.msg.push(countries);
          }

          let year=response.data.year;
          this.msg.push(year);

          console.log(this.msg.join(" / "));



        })
        .catch(error=>{
          console.log(error);
        });


      this.starclass(this.type);
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

<style scoped>
  .detail{position: relative;z-index:-1;}
  .detail ul{padding-top:20px;margin-bottom: 40px;}
  .con{padding:0 18px;}
  .star{background-image: url("../../static/img/star.png");}
  .pic_mes{margin-right: 100px;position: relative;}
  .pic_mes>p{color:#999999;line-height: 14px;}
  .detail ul li h5{margin:0 0 5px;font-size: 24px;line-height: 32px;word-break: break-all;font-weight: normal;}
  .mes p{color: #494949;margin-top: 15px;padding-right: 24px;font-size: 14px;line-height: 1.6;}
  .mesimg{position: absolute;width: 100px;height: 142px;top:0;right: -100px; background-size: cover;background-repeat: no-repeat;background-position: center;}
  .intro h4{ color: #aaa;margin: 0 0 10px;font-size: 16px;font-weight: normal;}
  .intro p{font-size: 15px;color: #494949;line-height: 22px;word-wrap: break-word;}
</style>
