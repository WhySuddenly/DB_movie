import Vue from 'vue'
import Router from 'vue-router'
// import movie from '@/components/movie'
// import book from '@/components/book'
// import b_detail from '@/components/b_detail'
// import m_detail from '@/components/m_detail'
// import more_msg from '@/components/more_msg'

Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'movie',
      component: (resolve) => require(['@/components/movie'], resolve)
    },
    {
      path: '/book',
      name: 'book',
      component: (resolve) => require(['@/components/book'], resolve)
    },
    {
      path: '/book/detail/:id',
      name: 'b_detail',
      component: (resolve) => require(['@/components/b_detail'], resolve)
    },
    {
      path: '/movie/detail/:id',
      name: 'm_detail',
      component: (resolve) => require(['@/components/m_detail'], resolve)
    },
    {
      path: '/moremsg/:msg',
      name: 'more_msg',
      component: (resolve) => require(['@/components/more_msg'], resolve)
    }
  ]
})
