<template>
  <main class="main bg-light">
    <section class="policy" v-html="offerInfo"></section>
  </main>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "Offer",
    computed: {
      ...mapGetters({
        offerInfo: 'offer/offerInfo'
      }),
    },
    methods: {
      ...mapActions({
        offer: 'offer/OFFER'
      })
    },
    created() {
      this.offer();
    }
  }
</script>

<style scoped>

</style>