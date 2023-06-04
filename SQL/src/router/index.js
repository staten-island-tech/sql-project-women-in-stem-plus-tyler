import { createRouter, createWebHistory, useRoute } from 'vue-router'
import AuthScreen from '../views/AuthenticationScreen.vue'
import { userSessionStore } from '../store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/Test',
      name: 'ReuseCards',
      component: () => import('../components/ReuseCards.vue'),
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/NewView',
      name: 'NewView',
      component: () => import('../views/NewView.vue'),
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/NewView2',
      name: 'NewView2',
      component: () => import('../views/NewView2.vue'),
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/TestHome',
      name: 'TestHome',
      component: () => import('../views/TestHome.vue'),
      meta: {
        needsAuth: true
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
  const userSession = userSessionStore()

  if (to.meta.needsAuth) {
    if (userSession.session) {
      return next()
    } else {
      return next('/')
    }
  }

  return next()
})

export default router
