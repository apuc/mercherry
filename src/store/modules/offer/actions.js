import Vue from "vue";

export default {
  'OFFER': async (context, params) => {
    await Vue.http.get(`${process.env.VUE_APP_API_URL}/info/offer`)
      .then(
        res => {
          console.log(res);
          context.commit('OFFER_INFO', res.body.text);
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
};