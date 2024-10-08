import { createRouter, createWebHistory } from 'vue-router'
import ping from '@/components/ping.vue';
import Books from '@/components/Books.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ping',
      name: 'ping',
      component: ping
    },
    {
      path: '/',
      name: 'Books',
      component: Books,
    },
  ]
})

export default router
