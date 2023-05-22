import { createRouter, createWebHistory } from 'vue-router'
import AuthScreen from '../views/AuthenticationScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthScreen
    }
  ]
})

export default router
