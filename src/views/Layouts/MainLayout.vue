<template>
  <div class="main-layout">
    <Header/>
    <slot/>
    <Footer/>
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