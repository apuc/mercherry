import Vue from "vue";

export default {
  'CITIES_LIST': async (context, params) => {
    return await Vue.http.get(`${process.env.VUE_APP_API_URL}/info/city`, {params: {
        q: params.q
      }})
      .then(
        res => {
          return res;
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  }
};
