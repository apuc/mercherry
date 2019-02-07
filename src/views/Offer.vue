<template>
  <section class="policy bg-light" v-html="offerInfo"></section>
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