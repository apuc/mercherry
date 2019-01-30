<template>
  <ul class="pagination text-center">
    <li class="page-item prev">
      <router-link v-if="currentPage != 1" class="page-link" :to="prevPage">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </router-link>
      <span v-else class="page-link disabled">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </span>
    </li>
    <li class="page-item" :class="page == currentPage ? 'active' : ''" v-for="page in pages" :key="page">
      <router-link class="page-link" :to="`/job/page/${page}`">{{page}}</router-link>
    </li>
    <li>
      <router-link v-if="currentPage != pages.length" class="page-link" :to="nextPage">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </router-link>
      <span v-else class="page-link disabled">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "JobPagination",
    props: [
      'currentPage'
    ],
    data() {
      return {
        pages: [1,2,3],
      }
    },
    computed: {
      prevPage() {
        return this.currentPage - 1 + '';
      },
      nextPage() {
        return this.currentPage + 1 + '';
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (to.params.id !== undefined) {
          vm.currentPage = to.params.id;
        }
        console.log(vm.currentPage)
      })
    }
  }
</script>

<style scoped>

</style>