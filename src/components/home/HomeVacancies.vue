<template>
  <section class="home-vacancy">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
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
  export default {
    name: "HomeVacancies",
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
    components: {VacancyItem}
  }
</script>

<style scoped>

</style>