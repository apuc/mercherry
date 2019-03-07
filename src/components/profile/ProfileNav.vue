<template>
  <section class="p-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col col-md-10 col-lg-8">
          <div class="nav nav-tabs mb-1">
            <a v-for="(item, index) in tabs"
               class="nav-item nav-link"
               data-toggle="tab"
               :href="`#${item.href}`"
               :class="activeClass(index) === index ? 'active' : ''"
            >
              {{item.name}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ProfileNav",
    props: {
      tabs: {
        type: Array,
        required: true
      }
    },
    methods: {
      activeClass() {
        if (this.$route.hash === '#nav-config') {
          return 4;
        }
        else return 0;
      }
    }
  }
</script>

<style scoped>

</style>