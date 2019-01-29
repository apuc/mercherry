<template>
  <section class="job">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
          <div class="text-center mb-5">
            <h2>Доступные вакансии и задания</h2>
          </div>
          <JobForm/>
          <ul class="list-unstyled job-list">
            <Vacancy v-for="item in vacancies"
                     :item="item"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import JobForm from "./JobForm";
  import Vacancy from "../Vacancy";
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
        ]
      }
    },
    components: {Vacancy, JobForm}
  }
</script>

<style scoped>

</style>