import Vue from "vue";

export default {
  'GET_VACANCIES_LIST': async (context, params) => {
    await Vue.http.get(`${process.env.VUE_APP_API_URL}/jobs?total_salary=${params.page}&total_salary=${params.employment}&total_salary=${params.city}&total_salary=${params.total_salary}`)
      .then(
        res => {
          console.log(res);
        },
        err => { console.log(err) }
      )
      .catch(err => console.error(`catch, ${err}`));
    // router.push('/job')
  },
};
