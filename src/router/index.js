import About from '@/components/About.vue'
import Hero from '@/components/Hero.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'porfolio',
      component: PortfolioView
    }
    ,
    {
      path:'/',
      name:'hero',
      component: Hero
    }
    ,
    {
      path:'/',
      name:'about',
      component: About
    },
    {
      path:'/',
      name:'skills',
      component: About
    }
  ],
})

export default router
