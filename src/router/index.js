import { createRouter, createWebHistory } from 'vue-router'


import memes from '@/views/ghibli.vue'

import form from '@/views/form.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'memes',
      component: memes,
    },
    {
      path: '/form',
      name: 'form',
      component: form,
    },
    
  ],
})

export default router
