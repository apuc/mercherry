import Vue from 'vue'

export default {
  'PROFILE': async (context) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/profile`)
      .then(
        res => {
          context.commit('DATA_USER', res.body);
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  },

  'AVATAR': async (context, file) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/profile/avatar`, file, {
      headers: {
        "Content-Type": "multipart/form-data;"
      }
    })
      .then(
        res => {
          return res;
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  }
};
