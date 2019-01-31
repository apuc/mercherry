<template>
  <div>
    <div class="text-center mt-5 mb-5">
      <span class="eyebrow mb-1 text-primary">Похожие вакансии</span>
    </div>
    <ul class="list-unstyled job-list">
      <VacancyItem v-for="item in vacancies"
                   :key="item.name"
                   :item="item"
      />
    </ul>
    <div class="text-center mt-4">
      <router-link class="btn btn-purple px-5" to="/job">Смотреть еще</router-link>
    </div>
  </div>
</template>

<script>
  import VacancyItem from "../VacancyItem";
  export default {
    name: "VacancySimilar",
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
          }
        ]
      }
    },
    components: {VacancyItem}
  }
</script>

<style scoped>

</style>