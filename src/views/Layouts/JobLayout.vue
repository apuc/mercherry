<template>
  <div class="job-layout layout">
    <Header/>
    <slot/>
    <Footer :layout="'job'"/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  export default {
    name: "layouts",
    components: {Footer, Header}
  }
</script>

<style scoped>

</style>