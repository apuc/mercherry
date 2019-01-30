<template>
  <main class="main">
    <section class="vacancy-desc">
      <div class="container">
        <div class="row justify-content-center align-items-end mb-0">
          <div class="col-md-10 col-lg-8">
            <div class="align-items-center">
              <VacancyDesc/>
              <VacancySimilar/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import VacancyDesc from "../components/vacancy/VacancyDesc";
  import VacancySimilar from "../components/vacancy/VacancySimilar";
  export default {
    name: "Vacancy",
    components: {VacancySimilar, VacancyDesc}
  }
</script>

<style scoped>

</style>