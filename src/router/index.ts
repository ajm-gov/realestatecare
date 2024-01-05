import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { loginStatusStore } from '@/stores/loginStatus';
import { userDetailsStore } from '@/stores/userDetails';
import Cookies from 'js-cookie';

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
        component: () => import('@/views/KnowledgeBase/Overview.vue')
      },
      {
        path: '/knowledge-base/changing-password',
        component: () => import('@/views/KnowledgeBase/Sample.vue')
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
        path: '/job-forms/damage/:jobId',
        name: 'damage-form',
        component: () => import('@/views/ExecuteJobs/Damage.vue'),
        props: true,
      },
      {
        path: '/job-forms/inspection/:jobId',
        name: 'inspection-form',
        component: () => import('@/views/ExecuteJobs/Inspection.vue'),
        props: true,
      },
      {
        path: '/job-forms/maintenance/:jobId',
        name: 'maintenance-form',
        component: () => import('@/views/ExecuteJobs/Maintenance.vue'),
        props: true,
      },
      {
        path: '/job-forms/modification/:jobId',
        name: 'modification-form',
        component: () => import('@/views/ExecuteJobs/Modification.vue'),
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

// Authentication middleware
router.beforeEach(async (to, from, next) => {
  const store = loginStatusStore();
  const userStore = userDetailsStore();

  if (Cookies.get('authenticated-user') === "true" && Cookies.get('userFirstName')) {
    loginStatusStore().loginUser()
    userStore.setUserInfo(Cookies.get('userFirstName') as string, Cookies.get('userLastName') as string)
  }

  if (!store.loggedIn && to.name !== "loginScreen") {
    console.log('Redirecting to login')
    next("/auth/login")
  } else if (store.loggedIn && to.name === "loginScreen") {
    console.log('Home')
    next("/home")
  } else {
    console.log('Allowing navigation')
    next()
  }
})

export default router
