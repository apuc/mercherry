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
      path: '/password-reset',
      name: 'password-reset',
      meta: {layout: 'auth'},
      component: Password
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
    }
  ],
})

