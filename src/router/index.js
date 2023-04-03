import { createRouter, createWebHistory } from 'vue-router';
import index from '../views/index.vue';
import Hotels from '../views/hotel/index.vue';

import { AppLayouts, loadLayoutMiddleware } from './loadLayoutMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: index,
      meta: {
        layout: AppLayouts.default
      }
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: Hotels,
      meta: {
        layout: AppLayouts.default
      }
      
    }
  ]
})
router.beforeEach(loadLayoutMiddleware)
export default router
