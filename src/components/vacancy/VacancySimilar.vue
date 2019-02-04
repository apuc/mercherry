<template>
  <div>
    <div class="text-center mt-5 mb-5">
      <span class="eyebrow mb-1 text-primary">Похожие вакансии</span>
    </div>
    <ul class="list-unstyled job-list">
      <VacancyItem v-for="item in firstVacancies"
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
  import {mapGetters} from "vuex";

  export default {
    name: "VacancySimilar",
    computed: {
      ...mapGetters({
        firstVacancies: 'firstVacancies'
      })
    },
    components: {VacancyItem}
  }
</script>

<style scoped>

</style>