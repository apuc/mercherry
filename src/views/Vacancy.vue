<template>
  <main class="main">
    <section class="vacancy-desc pt-0">
      <yandex-map
          :coords="[54.62896654088406, 39.731893822753904]"
          zoom="10"
          style="width: 100%; height: 250px"
          :controls="[
          'zoomControl',
          'typeSelector',
          'fullscreenControl'
          ]"
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
      <!--<button type="button" @click="getGeo">asdasasd</button>-->

      <div class="container pt-3">
        <div class="row justify-content-center align-items-end mb-0">
          <div class="col-md-10">
            <div class="align-items-center">
              <VacancyDesc
                  :info="info"
              />
              <VacancySimilar/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VacancyModal/>
  </main>
</template>

<script>
  import VacancyDesc from "../components/vacancy/VacancyDesc";
  import VacancySimilar from "../components/vacancy/VacancySimilar";
  import VacancyModal from "../components/vacancy/VacancyModal";
  import {mapGetters} from "vuex";

  export default {
    name: "Vacancy",
    components: {VacancyModal, VacancySimilar, VacancyDesc},
    props: [
      'id'
    ],
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
        ],
      }
    },
    computed: {
      info() {
        return this.$store.getters.vacancyInfo(parseInt(this.id));
      }
    }
  }
</script>

<style scoped>
  .ymap-container {
    padding: 0;
  }
</style>