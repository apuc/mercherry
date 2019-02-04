<template>
  <div>
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

<style scoped>

</style>