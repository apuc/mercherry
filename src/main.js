import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VeeValidate from "vee-validate";
import {Validator} from 'vee-validate';
import MainLayout from './views/Layouts/MainLayout';
import AuthLayout from './views/Layouts/AuthLayout';
import ProfileLayout from './views/Layouts/ProfileLayout';
import JobLayout from './views/Layouts/JobLayout';
import YmapPlugin from 'vue-yandex-maps'
import {VueMaskDirective} from 'v-mask'

const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: 'xxx', // '' by default
  lang: 'ru_RU', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
};


Vue.use(YmapPlugin, options);
Vue.directive('mask', VueMaskDirective);

Vue.component('main-layout', MainLayout);
Vue.component('auth-layout', AuthLayout);
Vue.component('job-layout', JobLayout);
Vue.component('profile-layout', ProfileLayout);

Vue.use(VeeValidate, {
  validity: true,
  locale: 'ru'
});

Validator.extend('verify_password', {
  getMessage: field => 'Пароль должен содержать хотя бы одну строчную букву, одну заглавную и одно число. Минимум 6 символов.',
  validate: value => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
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
      verify_password: () => 'Пароль должен содержать хотя бы одну строчную букву, одну заглавную, одно число. Минимум 6 символов.',
      _default: () => "Значение поля не валидно.",
      confirmed: () => 'Пароли не совпадают'
    }
  },
};

const validator = new Validator({password: 'verify_password'});
validator.localize('ru', dictionary.ru);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
