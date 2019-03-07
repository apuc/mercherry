<template>
  <section class="home-search">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <h1>
            Поиск вакансий в торговых точках на прямую от производителей
          </h1>
          <router-link class="btn btn-primary btn-rounded px-5" to="/job">Поиск вакансий</router-link>
        </div>
      </div>
      <div class="row justify-content-center my-10">
        <div class="col-md-10 col-xl-8">
          <div class="row gutter-2 separated text-center">
            <HomeSearchNumber v-for="(item, index) in numbers"
                              :item="item"
                              :key="`search${index}`"
            />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-outline-dark btn-icon-text">
          <i class="mdi mdi-android-debug-bridge btn-icon-prepend mdi-36px"></i>
          <span class="d-inline-block text-left">
                            <small class="font-weight-light d-block">Get it on the</small>
                            Google Play
                          </span>
        </button>
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