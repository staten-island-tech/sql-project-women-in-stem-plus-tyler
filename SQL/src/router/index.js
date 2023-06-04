import { createRouter, createWebHistory } from 'vue-router'
import AuthScreen from '../views/AuthenticationScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/Test',
      name: 'ReuseCards',
      component: () => import('../components/ReuseCards.vue'),
      meta: {
        requiresAuth: true
      }
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
    },
    {
      path: '/TestHome',
      name: 'TestHome',
      component: () => import('../views/TestHome.vue')
    },
    {
      name: '/',
      component: AuthScreen,
      component: () => import('../views/AuthenticationScreen.vue')
    }
  ]
})

export default router
