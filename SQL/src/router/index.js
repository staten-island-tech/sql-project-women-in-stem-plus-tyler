import { createRouter, createWebHistory } from 'vue-router'
import AuthScreen from '../views/AuthenticationScreen.vue'
import { useUserStore } from '../store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
    {
      name: '/',
      component: AuthScreen,
      component: () => import('../views/AuthenticationScreen.vue')
    }
  ]
})

router.beforeEach((to, next) => {
  const store = useUserStore()

  if (to.meta.needsAuth) {
    if ((store.currentUser = !null)) {
      return next
    } else {
      return next('/')
    }
  }
})

export default router
