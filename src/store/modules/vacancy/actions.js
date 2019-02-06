import Vue from "vue";

export default {
  'GET_VACANCY_INFO': async (context, params) => {
    await Vue.http.get(`${process.env.VUE_APP_API_URL}/jobs/${params}`)
      .then(
        res => {
          context.commit('VACANCY_INFO', res.body);
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
};