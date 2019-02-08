export default {
  firstVacancies: state => state.vacancies.filter((vacancy, index) => index < 3),
  vacancyInfo: state => id => state.vacancy.find(vacancyItem => vacancyItem.id === id),
  oldVacanciesList: state => state.vacancies,
  user: state => state.user
};