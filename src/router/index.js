import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ItemCafeView from '../views/ItemCafeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/Cafe',
      name: 'Cafe',
      component: ItemCafeView
    }
  ]
})

export default router
