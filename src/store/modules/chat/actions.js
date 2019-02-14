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
  'CHAT': async (context, id) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/chats/${id}`)
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

  }
};
