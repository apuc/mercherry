<template>
  <div class="auth-layout layout">
    <Header :color="'dark'" :headerClass="'header-sticky header-dark fixed-top'" />
    <slot/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  export default {
    name: "AuthLayout",
    components: {Header}
  }
</script>

<style lang="scss">
  .admin-header {
    @media (max-width: 1199.98px) {
      width: 100%;
      margin: 15px 0;
    }
    .container {
      max-width: unset;
    }
  }
</style>