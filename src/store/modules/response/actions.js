import Vue from 'vue';

export default {
  'RESPONSE_VACANCY': (context, params) => {
    return Vue.http.post(`${process.env.VUE_APP_API_URL}/jobs/response/${params.id}`, params.answer)
      .then(
        (res) => {
          return res;
        },
        (err) => {
          return err;
        }
      )
      .catch(err => console.error(`catch, ${err}`));
  }
};
