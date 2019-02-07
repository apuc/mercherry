export default {
  vacanciesList: state => state.list,
  totalPages: state => state.totalPages,
  firstVacancies: state => count => state.list.filter((list, index) => index < count)
};
