<template>
  <main class="main">
    <section class="job">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="text-center mb-5">
              <h2>Доступные вакансии и задания</h2>
            </div>
            <JobForm/>
            <ul class="list-unstyled job-list">
              <VacancyItem v-for="item in vacancies"
                           :key="item.name"
                           :item="item"
              />
            </ul>
            <JobPagination :currentPage="parseInt(currentPage)"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import JobForm from "../components/job/JobForm";
  import VacancyItem from "../components/VacancyItem";
  import JobPagination from "../components/job/JobPagination";
  import {mapState} from 'vuex';

  export default {
    name: "Job",
    computed: {
      ...mapState({
        vacancies: 'vacancies'
      })
    },
    data() {
      return {
        currentPage: 1,
        searchParams: {
          page: 0,
          employment: 0,
          city: '',
          total_salary: 0
        }
      }
    },
    components: {JobPagination, VacancyItem, JobForm},
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (to.params.id !== undefined) {
          vm.currentPage = to.params.id;
        }
      })
    },
    beforeRouteUpdate (to, from, next) {
      if (to.params.id !== undefined) {
        this.currentPage = to.params.id;
      }
      next();
    }
  }
</script>

<style scoped>

</style>