import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from "./views/Login";
import Job from "./views/Job";
import Vacancy from "./views/Vacancy";
import Policy from "./views/Policy";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
    },
    {
      path: '/policy',
      name: 'policy',
      component: Policy
    }
  ]
})
