import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home', // Fixed the name (removed extra space)
    component: () => import('../views/HomePage.vue')
  },
  
  

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 }) // Scroll to the top-left after a delay of 500ms
      }, 100) // Delay for smooth transition
    })
  },
})

export default router
