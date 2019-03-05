<template>
  <div class="tab-pane show active">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <router-link class="btn btn-primary mb-3" to="/job">Поиск вакансий</router-link>
        <ul class="list-unstyled job-list">
          <VacancyItem v-for="item in vacancies"
                       :key="item.name"
                       :item="item"
          />
        </ul>
        <button v-if="more" class="btn btn-primary" @click="moreVacancies">Ещё</button>
      </div>
    </div>
  </div>
</template>

<script>
  import profileVacanciesMixin from '../../mixins/profileVacanciesMixin';

  export default {
    name: "ProfileVacancy",
    mixins: [profileVacanciesMixin]
  }
</script>

<style scoped>

</style>