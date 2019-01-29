<template>
  <div>
    <Header :color="'dark'" :headerClass="'header-sticky header-dark fixed-top'" />
    <LoginMain/>
  </div>
</template>

<script>
  import LoginMain from "../components/login/LoginMain";
  import Header from "../components/Header";
  export default {
    name: "Login",
    components: {Header, LoginMain}
  }
</script>

<style scoped>

</style>