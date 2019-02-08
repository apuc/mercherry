import Vue from "vue";

export default {
  'POLICY': async (context, params) => {
    await Vue.http.get(`${process.env.VUE_APP_API_URL}/info/personal`)
      .then(
        res => {
          context.commit('POLICY_INFO', res.body.text);
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
};