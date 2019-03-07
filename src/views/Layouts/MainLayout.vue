<template>
  <div class="main-layout layout">
    <Header/>
    <slot/>
    <Footer/>
    <LogoutModal/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import LogoutModal from "../../components/LogoutModal";
  export default {
    name: "layouts",
    components: {LogoutModal, Footer, Header}
  }
</script>

<style scoped>

</style>