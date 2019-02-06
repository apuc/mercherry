export default {
  'VACANCIES_LIST': (state, list) => {
    state.list = list.result;
    state.totalPages = list.totalPages;
  }
};
