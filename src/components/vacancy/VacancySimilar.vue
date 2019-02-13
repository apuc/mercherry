<template>
  <div>
    <div class="text-center mt-5 mb-5">
      <span class="eyebrow mb-1 text-primary">Похожие вакансии</span>
    </div>
    <ul class="list-unstyled job-list">
      <VacancyItem v-for="item in vacancies(3)"
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
  import {mapGetters, mapActions} from "vuex";

  export default {
    name: "VacancySimilar",
    components: {VacancyItem},
    computed: {
      ...mapGetters({
        vacancies: 'vacancies/firstVacancies'
      })
    },
    methods: {
      ...mapActions({
        getVacancies: 'vacancies/GET_VACANCIES_LIST'
      })
    },
    created() {
      this.getVacancies({});
    },
  }
</script>

<style scoped>

</style>