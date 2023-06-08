import { createRouter, createWebHistory } from 'vue-router'
import AuthScreen from '../views/AuthenticationScreen.vue'
import { useUserStore } from '../store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Test',
      name: 'ReuseCards',
      component: () => import('../components/ReuseCards.vue')
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
      component: () => import('../views/NewView2.vue')
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

router.beforeEach((to) => {
  const store = useUserStore()
  if ((to.meta.needsAuth) && (store.currentUser == null)) {
    router.push({ path: '/' })
    console.log('not logged in')
  }
})

export default router
