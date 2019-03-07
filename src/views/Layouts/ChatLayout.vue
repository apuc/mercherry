<template>
  <div class="chat-layout layout">
    <Header />
    <slot/>
    <LogoutModal/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import LogoutModal from "../../components/LogoutModal";

  export default {
    name: "ChatLayout",
    components: {LogoutModal, Header}
  }
</script>

<style scoped>

</style>