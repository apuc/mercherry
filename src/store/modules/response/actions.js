import Vue from 'vue';

export default {
  'RESPONSE_VACANCY': (context, params) => {
    fetch(`${process.env.VUE_APP_API_URL}/jobs/response/${params.id}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(params.answer)
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    // return Vue.http.post(`${process.env.VUE_APP_API_URL}/jobs/response/${params.id}`, params.answer, {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem('token')}`
    //       }
    //     })
    //   .then(
    //     (res) => {
    //       console.log(res);
    //       return res;
    //     },
    //     (err) => {
    //       console.log(err);
    //       return err;
    //     }
    //   )
    //   .catch(err => console.error(`catch, ${err}`));
  }
};
