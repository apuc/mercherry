<template>
  <main class="main">
    <section class="job">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
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
  export default {
    name: "Job",
    data() {
      return {
        vacancies: [
          {
            name: 'Супервайзер мерчендайзеров',
            desc: 'Санкт-Петербург, 0₽, Полная занятость'
          },
          {
            name: 'Региональный менеджер по продажам',
            desc: 'Санкт-Петербург, Автово, 0₽, Полная занятость'
          },
          {
            name: 'Мобильный мерчандайзер на напитки',
            desc: 'Санкт-Петербург, Московские ворота, 0₽, Полная занятость'
          },
          {
            name: 'Грузчик-мерчендайзер',
            desc: 'Белокуриха, 0₽, Полная занятость'
          },
          {
            name: 'Мерчендайзер мобильный (Юг Москвы, Видное и Троицк)',
            desc: 'Видное, 0₽, Полная занятость'
          }
        ],
        currentPage: 1
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