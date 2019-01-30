<template>
  <div>
    <div class="text-center mt-5 mb-5">
      <span class="eyebrow mb-1 text-primary">Похожие вакансии</span>
    </div>
    <ul class="list-unstyled job-list">
      <VacancyItem v-for="item in vacancies"
                   :key="item.name"
                   :item="item"
      />
    </ul>
    <div class="text-center mt-4">
      <a class="btn btn-purple px-5" href="/job/default/index">Смотреть еще</a>
    </div>
  </div>
</template>

<script>
  import VacancyItem from "../VacancyItem";
  export default {
    name: "VacancySimilar",
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
          }
        ]
      }
    },
    components: {VacancyItem}
  }
</script>

<style scoped>

</style>