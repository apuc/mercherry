<template>
  <div class="profile-layout layout">
    <Header/>
    <slot/>
    <Footer :layout="'profile'"/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  export default {
    name: "ProfileLayout",
    components: {Footer, Header}
  }
</script>

<style scoped>

</style>