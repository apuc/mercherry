import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vacancies: [
      {
        "id": 1,
        "label": "Test1",
        "city": "Пермь",
        "metro": "",
        "salary": 100500,
        "employment": "Полная",
        "project": "project test"
      },
      {
        "id": 2,
        "label": "Test2",
        "city": "Москва",
        "metro": "",
        "salary": 10500,
        "employment": "Частичная",
        "project": "project test"
      },
      {
        "id": 3,
        "label": "Test3",
        "city": "Москва",
        "metro": "Бабушкинская",
        "salary": 100500,
        "employment": "Разовые",
        "project": "project test"
      },
      {
        "id": 4,
        "label": "Test4",
        "city": "Москва",
        "metro": "Бабушкинская",
        "salary": 100500,
        "employment": "Полная",
        "project": "project test"
      },
      {
        "id": 5,
        "label": "Test5",
        "city": "Москва",
        "metro": "Бабушкинская",
        "salary": 100500,
        "employment": "Полная",
        "project": "project test"
      }
    ],
  },
  getters: {
    firstVacancies: state => state.vacancies.filter((vacancy, index) => index < 3)
  },
  mutations: {

  },
  actions: {

  }
})
