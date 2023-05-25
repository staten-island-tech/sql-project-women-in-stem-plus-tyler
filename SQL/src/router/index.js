import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      // path: '/UserInterface',
      // name: 'UserInterface',
      // component: () => import('../views/UserInterface.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/Test',
      name: 'ReuseCards',
      component: () => import('../components/ReuseCards.vue')
    },
    {
      path: '/NewView',
      name: 'NewView',
      component: () => import('../views/NewView.vue')
    },
    {
      path: '/NewView2',
      name: 'NewView2',
      component: () => import('../views/NewView2.vue')
    }
  ]
})

export default router
