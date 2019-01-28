<template>
  <div class="col-md-3">
    <h4 class="fs-30 font-weight-normal mb-0">{{ item.number }}</h4>
    <span class="text-muted">{{ item.text }}</span>
  </div>
</template>

<script>
  export default {
    name: "HomeSearchNumber",
    props: [
      'item'
    ]
  }
</script>

<style scoped>

</style>