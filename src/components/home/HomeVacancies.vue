<template>
  <section class="home-vacancy">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
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
  import {mapState} from "vuex";

  export default {
    name: "HomeVacancies",
    computed: {
      ...mapState({
        vacancies: 'vacancies'
      })
    },
    components: {VacancyItem}
  }
</script>

<style scoped>

</style>