<template>
  <li class="media bordered mb-2 p-2">
    <div class="media-body">
      <div class="row">
        <div class="col-md-8">
          <h5 class="mt-0 mb-0">
            <router-link class="black-link" :to="`/job/${item.id}`">{{item.label}}</router-link>
          </h5>
          <p class="mb-0">
            <span>
              <template v-if="item.city != ''">
                {{item.city}},
              </template>

              <template v-if="item.salary != ''">
                {{item.salary}}₽,
              </template>

              <template v-if="item.metro != ''">
                {{item.metro}},
              </template>

              <template v-if="item.employment != ''">
                {{item.employment}}
              </template>
            </span>
          </p>
        </div>
        <div class="col-md-4 text-right">
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: "Vacancy",
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>