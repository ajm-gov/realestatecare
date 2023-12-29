import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { loginStatusStore } from '@/stores/loginStatus';

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
        path: '/knowledge-base',
        component: () => import('@/views/KnowledgeBase.vue')
      }, 
      {
        path: '/settings',
        component: () => import('@/views/Settings.vue')
      },
      {
        path: '/jobs/scheduled',
        component: () => import('@/views/ScheduledJobsOverview.vue')
      },
      {
        path: 'andrewtesting', // Delete Later
        component: () => import('@/components/LoadingScreen.vue') // Delete LAter
      },
      {
        path: '/job-forms/damage/:jobId',
        name: 'damage-form',
        component: () => import('@/views/ExecuteJob.vue'),
        props: true,
      }
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

// // Authentication middleware
// router.beforeEach(async (to, from, next) => {
//   const store = loginStatusStore();
//   console.log(store)
//   if (!store.loggedIn && to.name !== "loginScreen") {
//     console.log('Redirecting to login')
//     next("/auth/login")
//   } else if (store.loggedIn && to.name === "loginScreen") {
//     console.log('Home')
//     next("/home")
//   } else {
//     console.log('Allowing navigation')
//     next()
//   }
// })

export default router
