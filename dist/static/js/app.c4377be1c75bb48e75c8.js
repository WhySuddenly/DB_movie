webpackJsonp([5],{"00Xe":function(t,e){},"0p+W":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"more_msg",data:function(){return{listtitle:this.$route.params.msg,sub:[],type:"",mark:"",msg:this.$route.params.msg,showurl:[{hot:"/api/movie/in_theaters?start=0&count=30",top:"/api/movie/top250?start=0&count=100",new:"/api/movie/coming_soon?start=0&count=100"}]}},mounted:function(){var t=this,e=this.msg.toString(),a=this.showurl;console.log(a[0][e]),this.$http.get(a[0][e]).then(function(e){t.sub=e.data.subjects}).catch(function(t){console.log(t)}),this.starclass(this.type)},methods:{starclass:function(t){return t<1&&t>0?"star0":t<=1.4&&t>=1?"star0_5":t<=2.4&&t>=1.5?"star1":t<=3.4&&t>=2.5?"star1_5":t<=4.4&&t>=3.5?"star2":t<=5.4&&t>=4.5?"star2_5":t<=6.4&&t>=5.5?"star3":t<=7.4&&t>=6.5?"star3_5":t<=8.4&&t>=7.5?"star4":t<=9.4&&t>=8.5?"star4_5":t>=9.5?"star5":void 0},getimages:function(t){if(void 0!==t)return"https://images.weserv.nl/?url="+t.substring(7)}},filters:{numfliter:function(t){return 1===t.toString().length?t+".0":t},titlefliter:function(t){return"hot"==t?t="影院热映":"top"==t?t="TOP250":"new"==t?t="新片速递":void 0}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m_content"},[a("div",{staticClass:"con"},[a("div",{staticClass:"more_list"},[a("h6",[t._v(t._s(t._f("titlefliter")(t.listtitle)))]),t._v(" "),a("ul",{staticClass:"clearfix"},t._l(t.sub,function(e){return a("li",[a("router-link",{attrs:{to:{name:"m_detail",params:{id:e.id}}}},[a("div",{staticClass:"cc"},[a("div",{staticClass:"image"},[a("div",{staticClass:"img",style:{"background-image":"url("+t.getimages(e.images.small)+")"}})]),t._v(" "),a("h6",[t._v(t._s(e.title))]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:0!=e.rating.average,expression:"item.rating.average == 0 ? false :true"}]},[a("span",{staticClass:"star",class:t.starclass(e.rating.average)}),t._v(t._s(t._f("numfliter")(e.rating.average)))]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:0==e.rating.average,expression:"item.rating.average == 0 ? true :false"}],staticClass:"mark_show"},[t._v("暂无评分")])])])],1)}))])])])},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("00Xe")},"data-v-9ff12b8e",null);e.default=i.exports},ABgV:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head"},[a("div",{staticClass:"con"},[a("div",{staticClass:"logo"},[t._v("豆瓣")]),t._v(" "),a("div",{staticClass:"nav"},[a("ul",{staticClass:"clearfix"},[a("li",{staticClass:"m_color"},[a("router-link",{attrs:{to:"/"}},[t._v("电影")])],1)]),t._v(" "),a("div",{staticClass:"navicon",on:{click:t.show_t}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"search"},[a("div",{staticClass:"s_con"},[a("div",{staticClass:"top"},[t._m(0),t._v(" "),a("span",{staticClass:"close",on:{click:t.show_f}},[t._v("关闭")])]),t._v(" "),a("div",{staticClass:"content"},[a("ul",{staticClass:"clearfix"},t._l(t.search_c,function(e){return a("li",[a("router-link",{attrs:{to:"#"}},[a("h6",{style:{color:e.color}},[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.detail))])])],1)}))]),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"bt_mes"},[a("p",[a("router-link",{attrs:{to:"#"}},[a("span",[t._v("注册")])])],1),t._v(" "),a("p",[a("router-link",{attrs:{to:"#"}},[a("span",[t._v("登录")])])],1)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"s_input"},[e("form",{attrs:{method:"get"}},[e("input",{attrs:{type:"search"}})])])}]};var i={name:"App",components:{head_er:a("VU/8")({name:"hed",data:function(){return{showa:!1,showb:!1,color:"",show:!1,search_c:[{name:"电影",detail:"影院热映",color:"#2384e8"},{name:"电视",detail:"正在热播",color:"#f4ab51"},{name:"图书",detail:"畅销排行",color:"#9f7860"},{name:"同城",detail:"周末活动",color:"#e6467e"},{name:"小组",detail:"志趣相投",color:"#2ab8cc"},{name:"音乐",detail:"新碟榜",color:"#7a6adb"},{name:"阅读",detail:"电子书",color:"#36cc99"},{name:"游戏",detail:"虚拟世界",color:"#cc8942"},{name:"应用",detail:"玩手机",color:"#12cc4b"},{name:"广播",detail:"友邻动态",color:"#cc441d"},{name:"FM",detail:"红心歌单",color:"#8861cc"},{name:"市集",detail:"购买原创",color:"#cc1896"}]}},methods:{show_t:function(){this.show=!0},show_f:function(){this.show=!1}}},n,!1,function(t){a("ABgV")},"data-v-f2b33140",null).exports,more_msg:a("0p+W").default}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("head_er"),this._v(" "),e("div",{staticClass:"router"},[e("router-view")],1)],1)},staticRenderFns:[]};var r=a("VU/8")(i,o,!1,function(t){a("pVon")},null,null).exports,c=a("/ocq");s.a.use(c.a);var l=new c.a({mode:"history",routes:[{path:"/",name:"movie",component:function(t){return a.e(1).then(function(){var e=[a("QMkO")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/book",name:"book",component:function(t){return a.e(2).then(function(){var e=[a("MFsm")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/book/detail/:id",name:"b_detail",component:function(t){return a.e(0).then(function(){var e=[a("+xjQ")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/movie/detail/:id",name:"m_detail",component:function(t){return a.e(3).then(function(){var e=[a("R2uf")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/moremsg/:msg",name:"more_msg",component:function(t){return new Promise(function(t){t()}).then(function(){var e=[a("0p+W")];t.apply(null,e)}.bind(this)).catch(a.oe)}}]}),u=a("mtWM"),m=a.n(u);s.a.config.productionTip=!1,s.a.prototype.$http=m.a,new s.a({el:"#app",router:l,components:{App:r},template:"<App/>"})},pVon:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c4377be1c75bb48e75c8.js.map