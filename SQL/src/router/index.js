import { createRouter, createWebHistory } from 'vue-router'
import AuthScreen from '../views/AuthenticationScreen.vue'
import forgotPassword from '../views/forgotPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthScreen
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword
    }
  ]
})

export default router
