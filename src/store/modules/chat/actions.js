import Vue from 'vue';

export default {
  'CHATS': async (context) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/chats`)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
  'CHAT': async (context, params) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/chats/${params.id}`, params)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
  'SEND_MESSAGE': async (context, params) => {
    return await Vue.http.post(`${process.env.VUE_APP_API_URL}/chats/message/${params.id}`, params)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          console.log(err);
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  }
};
