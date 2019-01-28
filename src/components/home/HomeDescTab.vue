<template>
  <a class="nav-item nav-link lavalamp-item" :class="active" data-toggle="tab" :href= '"#" + item.href'>
    {{ item.title }}
  </a>
</template>

<script>
  export default {
    name: "HomeDescTab",
    props: [
      'item',
      'active'
    ]
  }
</script>

<style scoped>

</style>