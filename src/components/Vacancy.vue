<template>
  <li class="media bordered mb-2 p-2">
    <div class="media-body">
      <div class="row">
        <div class="col-md-8">
          <h5 class="mt-0 mb-0">
            <a class="black-link" href="#">{{item.name}}</a>
          </h5>
          <p class="mb-0">
							<span>{{item.desc}}</span>
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
    props: [
      'item'
    ]
  }
</script>

<style scoped>

</style>