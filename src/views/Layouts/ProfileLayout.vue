<template>
  <div class="profile-layout layout">
    <Header/>
    <slot/>
    <Footer :layout="'profile'"/>
    <LogoutModal/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import LogoutModal from "../../components/LogoutModal";
  export default {
    name: "ProfileLayout",
    components: {LogoutModal, Footer, Header}
  }
</script>

<style scoped>

</style>