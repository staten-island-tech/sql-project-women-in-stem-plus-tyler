import { createRouter, createWebHistory } from 'vue-router'
import SignUpScreen from '../views/SignUpScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUpScreen
    },
    {
      path: '/signIn',
      name: 'signin',
      component: () => import('../views/SignInScreen.vue')
    }
  ]
})

export default router
