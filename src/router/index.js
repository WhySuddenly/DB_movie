import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/components/movie'
import book from '@/components/book'
import b_detail from '@/components/b_detail'
import m_detail from '@/components/m_detail'

Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'movie',
      component: movie
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/book/detail/:id',
      name: 'b_detail',
      component: b_detail
    },
    {
      path: '/movie/detail/:id',
      name: 'm_detail',
      component: m_detail
    }
  ]
})
