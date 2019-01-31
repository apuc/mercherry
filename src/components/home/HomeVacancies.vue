<template>
  <section class="home-vacancy">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
          <div class="text-center mb-5">
            <h2>Доступные вакансии</h2>
          </div>
          <ul class="list-unstyled job-list">
            <VacancyItem v-for="item in vacancies"
                     :item="item"
            />
          </ul>
          <div class="text-center mt-4">
            <router-link class="btn btn-purple px-5" to="/job">Показать еще</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VacancyItem from "../VacancyItem";
  export default {
    name: "HomeVacancies",
    data() {
      return {
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
        ]
      }
    },
    components: {VacancyItem}
  }
</script>

<style scoped>

</style>