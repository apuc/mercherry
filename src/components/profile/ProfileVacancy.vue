<template>
  <div class="tab-pane show active">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <a class="btn btn-primary mb-3" href="/job">Поиск вакансий</a>
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
  import {mapGetters} from 'vuex';

  export default {
    name: "ProfileVacancy",
    computed: {
      ...mapGetters({
        vacancies: 'old/oldVacanciesList'
      })
    },
    components: {VacancyItem}
  }
</script>

<style scoped>

</style>