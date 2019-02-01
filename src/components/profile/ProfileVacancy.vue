<template>
  <div class="tab-pane show active">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <a class="btn btn-purple mb-3" href="/job">Поиск вакансий</a>
        <ul class="list-unstyled job-list">
          <VacancyItem v-for="item in vacancies"
                       :key="item.name"
                       :item="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import VacancyItem from '../VacancyItem';
  export default {
    name: "ProfileVacancy",
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
        ],
      }
    },
    components: {VacancyItem}
  }
</script>

<style scoped>

</style>