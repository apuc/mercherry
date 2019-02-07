import Vue from 'vue';

export default {
  'REGISTRATION': async (context, userInfo) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/auth/signup`, userInfo)
      .then(
        (res) => {
          if (res.body.hasOwnProperty('error')) {
            context.commit('REG_ERR', res.body.error);
          }
          else {
            Vue.http.headers.common['Authorization'] = `Bearer ${res.body.token}`;
            localStorage.setItem('token', res.body.token);
          }
          return res
        },
        (err) => {
          console.log(err);
          return err
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },

  'LOGIN': async (context, userInfo) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/auth/login`, userInfo)
      .then(
        (res) => {
          if (res.body.hasOwnProperty('error')) {
            context.commit('LOGIN_ERR', res.body.error);
          }
          else {
            localStorage.setItem('token', res.body.token);
          }
          return res
        },
        (err) => {
          return err
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  }

};
