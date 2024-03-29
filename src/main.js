import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import VeeValidate from "vee-validate";
import {Validator} from 'vee-validate';
import MainLayout from './views/Layouts/MainLayout';
import AuthLayout from './views/Layouts/AuthLayout';
import ProfileLayout from './views/Layouts/ProfileLayout';
import ChatLayout from './views/Layouts/ChatLayout';
import JobLayout from './views/Layouts/JobLayout';
import YmapPlugin from 'vue-yandex-maps';
import {VueMaskDirective} from 'v-mask';
import VueResource from 'vue-resource';
import Vuebar from 'vuebar';

const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: 'xxx', // '' by default
  lang: 'ru_RU', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
};


Vue.use(YmapPlugin, options);
Vue.use(VueResource);
Vue.use(Vuebar);
Vue.directive('mask', VueMaskDirective);

Vue.component('main-layout', MainLayout);
Vue.component('auth-layout', AuthLayout);
Vue.component('job-layout', JobLayout);
Vue.component('profile-layout', ProfileLayout);
Vue.component('chat-layout', ChatLayout);

Vue.use(VeeValidate, {
  validity: true,
  locale: 'ru'
});

Validator.extend('verify_password', {
  getMessage: field => 'Минимум 6 символов.',
  validate: value => {
    var strongRegex = new RegExp("^(?=.{6,})");
    return strongRegex.test(value);
  }
});

Validator.extend('verify_email_phone', {
  // getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number(E.g. , . _ & ? etc)`,
  validate: value => {
    var strongRegexEmail = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
    var strongRegexPhone = new RegExp("^(?=.*[0-9])(?=.{2,})");
    return strongRegexEmail.test(value) || strongRegexPhone.test(value);
  }
});

const dictionary = {
  ru: {
    messages: {
      verify_password: () => 'Минимум 6 символов.',
      _default: () => "Необходимо заполнить поле.",
      confirmed: () => 'Пароли не совпадают'
    }
  },
};

const validator = new Validator({password: 'verify_password'});
validator.localize('ru', dictionary.ru);

Vue.config.productionTip = false;

router.beforeEach( async (to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    Vue.http.headers.common['Authorization'] = `Bearer ${token}`;
  }
  if(localStorage.getItem('token')) {
    await store.dispatch('profile/PROFILE');
  }
  else {
    store.commit('profile/AUTH', false);
  }
  if (to.meta.layout === 'auth' && store.getters['profile/auth']
      || to.path === '/profile' && !store.getters['profile/auth']) {
    next({name: 'home'})
  }
  else {
    next();
  }
});


new Vue({
  router,
  store,
  http: {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  },
  render: h => h(App)
}).$mount('#app');
