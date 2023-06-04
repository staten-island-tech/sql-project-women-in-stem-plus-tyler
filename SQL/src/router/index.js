import { createRouter, createWebHistory, useRoute } from 'vue-router'
import AuthScreen from '../views/AuthenticationScreen.vue'
import { useUserStore } from '../store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requiresAuth: true
      }
    },
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
      component: () => import('../views/NewView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/NewView2',
      name: 'NewView2',
      component: () => import('../views/NewView2.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/TestHome',
      name: 'TestHome',
      component: () => import('../views/TestHome.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      name: '/',
      component: AuthScreen,
      component: () => import('../views/AuthenticationScreen.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = useUserStore()
  if (to.meta.needsAuth) {
    if (use.currentUser) {
      return next()
    } else {
      return next('/')
    }
  }
  return next()
})

export default router
