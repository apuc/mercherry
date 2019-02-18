<template>
  <div class="admin-layout layout">
    <Header/>
    <main class="main">
      <div class="admin-wrap">
        <AdminMenu/>
        <slot/>
      </div>
    </main>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import AdminMenu from "../../components/admin/AdminMenu";
  export default {
    name: "AdminLayout",
    components: {AdminMenu, Header}
  }
</script>

<style scoped>
  .admin-wrap {
    display: flex;
  }
</style>