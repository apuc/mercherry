<template>
  <li class="media bordered mb-2 p-3 bg-white">
    <div class="media-body">
      <div class="d-flex flex-wrap flex-sm-nowrap flex-sm-row flex-column">
        <div class="pr-2 d-flex flex-column">
          <h5 class="mt-0 mb-0">
            <router-link class="c-dark-link first-letter-up d-block" :to="`/job/${item.id}`">{{item.label}}</router-link>
          </h5>
          <p class="mb-0 c-medium-gray mt-auto">
            <span>
              <span v-if="item.project != ''" class="mr-16px">{{item.project}} </span>

              <span v-if="item.city != ''" class="mr-13px d-inline-block">
                <i class="fa fa-map-marker"></i>
                {{item.city}}
              </span>

              <span class="d-inline-block" v-if="item.metro != ''">
                <img src="/img/Moscow_Metro.svg" alt="" height="13">
                 {{item.metro}}
              </span>
            </span>
          </p>
        </div>
        <div class="vacancy-item-right">
          <span v-if="item.employment !== ''" class="btn btn-small pointer-none" :class="'btn-' + employment">{{item.employment}}</span>

          <p class="mt-2 mb-0 c-medium-gray lh-1" v-if="item.total_salary != ''">
            {{item.total_salary}}₽
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
          case 'Полная':
            return 'green';
          case 'Частичная':
            return 'orange';
          case 'Разовые':
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
    width: 130px;
    margin-left: auto;
    @media (max-width: 575px) {
      width: 100%;
      margin-top: 10px;
    }
    .btn {
      width: 130px;
    }
  }
</style>