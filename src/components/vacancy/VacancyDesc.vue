<template>
  <div>
    <template v-if="info.hasOwnProperty('response')">
      <div class="status-response mb-5 mt-2">
        <div class="status-response__item" v-for="(item, index) in info.response.list">
          <span class="c-dark-gray">{{item}}</span>
          <div class="status-response__circle" :class="index <= info.response.status ? 'status-response__circle--active' : ''"></div>
        </div>
        <div class="status-response__line">
          <div class="status-response__line-inner" :style="progressWidth"></div>
        </div>
      </div>
      <div class="green-border p-2 p-sm-3 mb-5">
        Скопируйте прямую ссылку на размещённый вами пост и нажмите кнопку отправить
      </div>
    </template>
    <div class="c-gray fs-14 mb-1">
      <span>3 дня назад, 26 янв., 14:41</span>
    </div>
    <div class="d-flex flex-wrap align-items-center">
      <h1 class="fs-34 font-weight-bold mb-1 pr-1">{{info.label}}</h1>
      <div class="col-lg-3 ml-auto p-0">
        <span class="font-weight-bold fs-30 ff-roboto">{{info.total_salary}}₽</span>
      </div>
    </div>
    <div class="d-flex flex-wrap align-items-center">
      <div class="vacancy-duration fs-14 pr-1">
        <span>{{info.city}}</span>
        <div class="three-circle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>Маяковская</span>
        <span class="c-gray d-flex align-items-center">
          <i class="fa fa-male"></i>
          <span>— 13 мин.</span>
        </span>
        <span>Белорусская</span>
        <span class="c-gray d-flex align-items-center">
          <i class="fa fa-male"></i>
          <span>— 11 мин.</span>
        </span>
      </div>
      <div class="col-lg-3 ml-auto p-0">
        <router-link to="#" class="fs-14">Статистика по региону</router-link>
      </div>
    </div>
    <a class="btn btn-purple my-3" href="#" data-toggle="modal" data-target="#responseModal">Откликнуться</a>
    <div class="mb-4">
      <div class="row">
        <div class="col-xl-6 mb-1"
             v-for="(value, key) in vacancyDataName"
             v-if="info[key] !== ''"
        >
          <div class="row">
            <div class="col-6 c-dark-gray">{{value}}:</div>
            <div class="col-6">
              <template v-if="typeof info[key] === 'boolean'">
                <template v-if="info[key] === true">
                  Да
                </template>
                <template v-else>
                  Нет
                </template>
              </template>
              <template v-else>
                {{info[key]}}
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="desc mb-3">
      <h3 class="fs-22 font-weight-normal mb-1">Описание:</h3>
      <p v-html="info.description"></p>
    </div>
    <a class="btn btn-purple mb-3" href="#" data-toggle="modal" data-target="#responseModal">Откликнуться</a>
  </div>
</template>

<script>
  export default {
    name: "VacancyDesc",
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        vacancyDataName: {
          type: 'Тип вакансии',
          point_count: 'Количество точек',
          project: 'Проект',
          experience: 'Опыт работы',
          product_type: 'Тип продукта',
          duration_internship: 'Стажировка',
          employment: 'Занятость',
          schedule: 'График работы',
          point_count_day: 'Количество точек в день',
          total_salary: 'Заработная плата',
          salary : 'Оклад',
          prize : 'Премия',
          weekend : 'Выходные',
          m_book: 'Медицинская книжка',
          mobile : 'КПК (мобильный телефон)',
          auto: 'Наличие автомобиля',
          audio_record: 'Аудиозапись'
        }
      }
    },
    computed: {
      progressWidth() {
        let width;
        width = 100 / (this.info.response.list.length - 1) * this.info.response.status + '%';
        return 'width: ' + width;
      }
    }
  }
</script>

<style lang="scss">
  .status-response {
    position: relative;
    width: 70%;
    margin: 0 auto;
    padding-top: 59px;
    @media (max-width: 991px) {
      width: 80%;
    }
    @media (max-width: 767px) {
      width: 100%;
      height: 300px;
      padding-top: 0;
    }
    &__item {
      position: absolute;
      z-index: 1;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 767px) {
        flex-direction: row-reverse;
        top: unset;
        right: unset !important;
        left: -10px !important;
        transform: none !important;
      }
      &:nth-of-type(1) {
        left: 0;
        transform: translateX(-50%);
      }
      &:nth-of-type(2) {
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 767px) {
          top: calc(50% - 12px);
        }
      }
      &:nth-of-type(3) {
        right: 0;
        transform: translateX(50%);
        @media (max-width: 767px) {
          bottom: -5px;
        }
      }
    }
    &__circle {
      width: 20px;
      height: 20px;
      margin-top: 15px;
      background-color: #f3f3f3;
      border-radius: 50%;
      @media (max-width: 767px) {
        margin-top: 0;
        margin-right: 20px;
      }
      &--active {
        background-color: #54af5d;
      }
    }
    &__line {
      width: 100%;
      height: 4px;
      margin-top: -12px;
      background-color: #ddd;
      @media (max-width: 767px) {
        width: 300px;
        margin-top: 0;
        transform: rotate(90deg);
        transform-origin: 0;
      }
      &-inner {
        height: 100%;
        background-color: #54af5d;
      }
    }
  }
  .three-circle {
    display: inline-flex;
    margin-right: 5px;
    span {
      width: 11px;
      height: 11px;
      margin-left: -5px;
      border-radius: 50%;
      border: 1px solid #fff;
      &:nth-of-type(1) {
        margin-left: 0;
        background-color: #74ae73;
      }
      &:nth-of-type(2) {
        background-color: #22252a;
      }
      &:nth-of-type(3) {
        background-color: #905946;
      }
    }
  }
  .vacancy-duration {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & > span,
    .fa {
      margin-right: 5px;
    }
  }
  .green-border {
    border: 1px solid #54af5d;
    border-radius: 4px;
  }
</style>