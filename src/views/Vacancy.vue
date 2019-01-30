<template>
  <main class="main">
    <section class="vacancy-desc pt-0">
      <yandex-map
          :coords="[54.62896654088406, 39.731893822753904]"
          zoom="10"
          style="width: 100%; height: 370px"
          :cluster-options="{
            1: {clusterDisableClickZoom: true}
          }"
          :placemarks="placemarks"
      >

        <ymap-marker
            marker-id="1"
            marker-type="placemark"
            :coords="[54.7, 39.7]"
            hint-content="Hint content 1"
            :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            :icon="{color: 'green', glyph: 'cinema'}"
            cluster-name="1"
        ></ymap-marker>


      </yandex-map>

      <div class="container pt-3">
        <div class="row justify-content-center align-items-end mb-0">
          <div class="col-md-10">
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
    components: {VacancySimilar, VacancyDesc},
    data() {
      return {
        placemarks: [
          {
            coords: [54.8, 39.8],
            properties: {}, // define properties here
            options: {}, // define options here
            clusterName: "1",
            balloonTemplate: '<div>"Your custom template"</div>',
            callbacks: {
              click: function () {
              }
            }
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .ymap-container {
    padding: 0;
  }
</style>