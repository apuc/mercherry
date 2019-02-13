<template>
  <div class="chat-layout layout">
    <Header />
    <slot/>
  </div>
</template>

<script>
  import Header from "../../components/Header";

  export default {
    name: "ChatLayout",
    components: {Header}
  }
</script>

<style scoped>

</style>