<template>
  <div class="col-md-6 col-lg-4 p-5 text-center">
    <template v-if="item.last != undefined">
        <div class="text-uppercase">Получайте бонус</div>
        <i class="svg-icon w-5 equal"></i>
        <h4 class="fs-60 font-weight-normal">{{item.price}}</h4>
        <p>{{item.desc}}</p>
        <a class="btn btn-lg btn-green btn-block" href="/job/default/index" v-if="item.button != undefined">{{item.button}}</a>
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