<template>
  <section class="home-search">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <h1>
            Поиск вакансий и разовых заданий в торговых точках
          </h1>
          <router-link class="btn btn-purple btn-rounded px-5" to="/job">Поиск вакансий</router-link>
        </div>
      </div>
      <div class="row justify-content-center mt-10">
        <div class="col-md-10 col-xl-8">
          <div class="row gutter-2 separated text-center">
            <HomeSearchNumber v-for="item in numbers"
                              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HomeSearchNumber from './HomeSearchNumber';

  export default {
    name: "HomeSearch",
    data() {
      return {
        numbers: [
          {
            number: '95.000+',
            text: 'Мерчендайзеров'
          },
          {
            number: '23.000+',
            text: 'Супервайзеров'
          },
          {
            number: '23.000+',
            text: 'Товароведов'
          },
          {
            number: '40.000+',
            text: 'Промоутеров'
          },
        ]
      }
    },
    components: {
      HomeSearchNumber
    }
  }
</script>

<style scoped>

</style>