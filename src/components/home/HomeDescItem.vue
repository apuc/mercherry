<template>
  <div class="col-md-6 col-lg-4 p-sm-5 p-3 text-center">
    <template v-if="item.last != undefined">
        <div class="text-uppercase">Получайте бонус</div>
        <i class="svg-icon w-5 equal"></i>
        <h4 class="fs-60 font-weight-normal">{{item.price}}</h4>
        <p>{{item.desc}}</p>
        <router-link class="btn btn-lg btn-green btn-block" to="/job" v-if="item.button != undefined">{{item.button}}</router-link>
    </template>
    <template v-else>
      <i class="svg-icon w-50 equal">
      <span>
        <img :src="`img/${item.img}`" alt="Image">
      </span>
      </i>
      <h4 class="fs-24 font-weight-normal">{{item.title}}</h4>
      <p>
        {{item.desc}}
      </p>
    </template>
  </div>
</template>

<script>
  export default {
    name: "HomeDescItem",
    props: [
      'item'
    ]
  }
</script>

<style scoped>

</style>