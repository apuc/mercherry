import Vue from "vue";

export default {
  'GET_VACANCIES_LIST': async (context, params) => {
    let paramsString = '';
    let paramsEmpty = true;
    for (let key in params) {
      if (params[key] !== '') {
        if (paramsEmpty) {
          paramsString += `?${key}=${params[key]}`;
          paramsEmpty = false;
        }
        else {
          paramsString += `&${key}=${params[key]}`;
        }
      }
    }
    await Vue.http.get(`${process.env.VUE_APP_API_URL}/jobs${paramsString}`)
      .then(
        res => {
          context.commit('VACANCIES_LIST', res.body);
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
  },
};
