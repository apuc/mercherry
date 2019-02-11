import Vue from 'vue'

export default {
  'PROFILE': async (context) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/profile`)
      .then(
        res => {
          context.commit('DATA_USER', res.body);
          context.commit('AUTH', true);
        },
        err => {
          console.log(err);
          context.commit('AUTH', false);
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },

  'AVATAR': async (context, file) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/profile/avatar`, file)
      .then(
        res => {
          context.commit('USER_AVATAR', res.body.avatar);
          return res;
        },
        err => {
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },

  'UPDATE_USER_DATA': async (context, data) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/profile/update`, data)
      .then(
        res => {
          context.commit('DATA_USER', data);
          return res;
        },
        err => {
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },

  'PASSWORD': async (context, data) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/profile/password`, data)
      .then(
        res => {
          return res;
        },
        err => {
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  }
};
