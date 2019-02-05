import Vue from 'vue';

export default {
  'REGISTRATION': async (context, userInfo) => {
    await Vue.http.post(`${process.env.VUE_APP_API_URL}/auth/signup`, userInfo)
      .then(
        (res) => {
          context.commit('auth/SET_TOKEN', res.token);
          Vue.http.headers.common['Authorization'] = `Bearer ${res.token}`;
          localStorage.setItem('token', res.token);
          console.log(res)
        },
        (err) => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
    // router.push('/job')
  },

  'LOGIN': async (context, userInfo) => {
    await Vue.http.post(`${process.env.VUE_APP_API_URL}/auth/login`, userInfo)
      .then(
        (res) => {
          console.log(res)
        },
        (err) => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  }

};
