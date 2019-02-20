import Vue from "vue";

export default {
  'CONTACT': async (context) => {
    await Vue.http.get(`${process.env.VUE_APP_API_URL}/info/personal`)
      .then(
        res => {
          console.log(res);
          context.commit('CONTACT_STATUS', res.body);
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
};