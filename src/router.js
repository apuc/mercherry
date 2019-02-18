import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from "./views/Login";
import Job from "./views/Job";
import Vacancy from "./views/Vacancy";
import Policy from "./views/Policy";
import Contacts from "./views/Contacts";
import Profile from "./views/Profile";
import Password from "./views/Password";
import Offer from "./views/Offer";
import Chat from "./views/Chat";
import ChatOne from "./views/ChatOne";
import AdminProjects from "./views/admin/AdminProjects";
import AdminVacancies from "./views/admin/AdminVacancies";
import AdminResume from "./views/admin/AdminResume";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'auth'},
      component: Login
    },
    {
      path: '/job',
      name: 'job',
      meta: {layout: 'job'},
      component: Job,
      children: [
        {
          path: 'page/:id',
          meta: {layout: 'job'}
        }
      ]
    },
    {
      path: '/job/:id',
      name: 'vacancy',
      component: Vacancy,
      props: true
    },
    {
      path: '/policy',
      name: 'policy',
      component: Policy
    },
    {
      path: '/offer',
      name: 'offer',
      component: Offer
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'profile'},
      component: Profile
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      meta: {layout: 'auth'},
      component: Password
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {layout: 'chat'},
      component: Chat
    },
    {
      path: '/chat/:id',
      name: 'chatOne',
      meta: {layout: 'chat'},
      component: ChatOne,
    },
    {
      path: '/admin/projects',
      name: 'admin',
      meta: {layout: 'admin'},
      component: AdminProjects
    },
    {
      path: '/admin/vacancies',
      name: 'adminVacancies',
      meta: {layout: 'admin'},
      component: AdminVacancies
    },
    {
      path: '/admin/resume',
      name: 'adminResume',
      meta: {layout: 'admin'},
      component: AdminResume
    }
  ],
})

