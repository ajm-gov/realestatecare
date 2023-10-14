import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: () => import('@/components/BottomTabs.vue'),
    children: [ 
      {
        path: '/home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/jobs/completed',
        component: () => import('@/views/CompletedJobs.vue')
      },
      {
        path: '/jobs/completed/:id',
        name: 'completedJob',
        component: () => import('@/views/CompletedIndividualJob.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/auth/login',
    name: 'loginScreen',
    component: () => import("@/views/LoginScreen.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
