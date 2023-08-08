import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/Registration.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LogIn.vue')
     
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

export default router
