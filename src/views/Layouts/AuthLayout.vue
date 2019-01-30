<template>
  <div class="auth">
    <slot/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  export default {
    name: "AuthLayout",
    components: {Footer, Header}
  }
</script>

<style scoped>

</style>