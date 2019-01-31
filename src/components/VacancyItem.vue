<template>
  <li class="media bordered mb-2 p-2">
    <div class="media-body">
      <div class="row flex-sm-row flex-column">
        <div class="px-2">
          <h5 class="mt-0 mb-0">
            <router-link class="black-link" :to="`/job/${item.id}`">{{item.label}}</router-link>
          </h5>
          <p class="mb-0 mt-1">
            <span v-if="item.project != ''" class="font-weight-bold">{{item.project}} </span>
            <span>
              <template v-if="item.city != ''">
                <i class="fa fa-map-marker"></i>
                {{item.city}}
              </template>

              <template v-if="item.metro != ''">
                <img src="img/Moscow_Metro.svg" alt="" width="16">
                {{item.metro}}
              </template>
            </span>
          </p>
        </div>
        <div class="vacancy-item-right">
          <span v-if="item.employment !== ''" class="btn btn-small pointer-none" :class="'btn-' + employment">{{item.employment}}</span>

          <p class="mt-1 mb-0" v-if="item.salary != ''">
            {{item.salary}}₽
          </p>
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
    },
    computed: {
      employment() {
        switch(this.item.employment) {
          case 'Полная занятость':
            return 'green';
          case 'Частичная занятость':
            return 'orange';
          case 'Разовые задания':
            return 'danger'
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .vacancy-item-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 225px;
    margin-left: auto;
    padding: 0 15px;
    @media (max-width: 575px) {
      width: 100%;
      margin-top: 10px;
    }
    .btn {
      width: 225px;
    }
  }
</style>