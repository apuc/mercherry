<template>
  <main class="main">
    <section class="job">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="text-center mb-5">
              <h2>Доступные вакансии и задания</h2>
            </div>

            <JobForm @getParams="getParams($event)"
                     :cityEmpty="searchParams.city === ''"
            />
            <ul class="list-unstyled job-list">
              <VacancyItem v-for="item in vacanciesList"
                           :key="item.name"
                           :item="item"
              />
            </ul>
            <JobPagination
                :currentPage="currentPage"
                :pages="pages"
                v-if="totalPages > 0"
            />
            <p v-else class="mt-5">
              По выбранным параметрам ничего не найдено. Чтобы получать подходящие вакансии и задания на почту заполните информацию о себе в настройках
            </p>
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
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "Job",
    components: {JobPagination, VacancyItem, JobForm},
    data() {
      return {
        pages: [],
        maxPages: 10,
        currentPage: 1,
        searchParams: {
          page: '',
          employment: '',
          city: '',
          total_salary: ''
        }
      }
    },
    methods: {
      ...mapActions({
        GET_VACANCIES_LIST: 'vacancies/GET_VACANCIES_LIST'
      }),
      getVacancies() {
        this.GET_VACANCIES_LIST(this.searchParams)
      },
      getParams(event) {
        for (let key in event) {
          this.searchParams[key] = event[key];
        }
        this.getVacancies();
      },
      currentPages() {
        this.pages = [];
        if (this.totalPages <= this.maxPages) {
          for (let i = 1; i <= this.totalPages; i++) {
            this.pages.push(i);
          }
        }
        else {
          let firstPage;
          let lastPage ;
          if (this.currentPage <= this.maxPages / 2) {
            firstPage = 1;
            lastPage = 10;
          }
          else if (this.currentPage >= this.totalPages - this.maxPages / 2) {
            firstPage = this.totalPages - 9;
            lastPage = this.totalPages;
          }
          else {
            firstPage = this.currentPage - 4;
            lastPage = this.currentPage + 5;
          }
          for (let i = firstPage; i <= lastPage; i++) {
            this.pages.push(i);
          }
        }
      },
    },
    computed: {
      ...mapGetters({
        vacanciesList: 'vacancies/vacanciesList',
        totalPages: 'vacancies/totalPages'
      })
    },
    created() {
      this.getVacancies();
    },
    beforeUpdate() {
      this.currentPages();
    },
    beforeRouteUpdate (to, from, next) {
      if (to.params.id !== undefined) {
        this.currentPage = parseInt(to.params.id);
        this.searchParams.page = this.currentPage;
      }
      this.getVacancies();
      next();
    }
  }
</script>

<style scoped>

</style>