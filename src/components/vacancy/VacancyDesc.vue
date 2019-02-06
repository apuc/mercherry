<template>
  <div>
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
        },
        vacancyDesc: {
          price: 'от 60 000 до 60 000 руб. на руки ',
          short_desc: 'В крупной компании (напитки) открыта вакансия супервайзер мерчендайзеров.',
          charge: 'Организация и контроль работы мерчендайзеров в супермаркетах и дискаунтерах (Пятерочка, Перекресток, Магнит, Дикси), Управление командой мерчендайзеров, Контроль мерчендайзинга в ТТ, Проведение отчетных собраний, Проведение полевого обучения персонала, Контроль соблюдения матрицы в торговых точках, Взаимодействие с администрацией торговых точек, Работа по увеличению представленности продукции компании в торговых точках, Выявление и реализации возможностей по увеличению объемов продаж, Выполнение показателей по продажам, Обеспечение своевременного размещения POSm-оборудования с целью, Эффективного продвижения продукции',
          requirements: 'Высокий уровень обучаемости, стрессоустойчивость, Способность работать в режиме многозадачности, Знание основ мерчендайзинга, Опыт работы с федеральными и локальными сетями, Уверенный пользователь ПК (Excel, PowerPoint), Активность, конструктивная грамотная речь, Наличие автомобиля, РАССМАТРИВАЮТСЯ КАНДИДАТЫ ТОЛЬКО С ОПЫТОМ РАБОТЫ НА АНАЛОГИЧНОЙ ДОЛЖНОСТИ!',
          conditions: 'График работы 5/2 с 9 до 18, выходные СБ и ВС, В команде 15-20 МЧ, ЗП 50000 + 10000 компенсация ГСМ, Оформление ТК РФ, Работа разъездного характера, Свободные территории: Колпино, Волхов, Рыбацкое'
        },
        vacancyDescName: {
          charge: 'Обязанности',
          requirements: 'Требования',
          conditions: 'Условия'
        }
      }
    }
  }
</script>

<style lang="scss">
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
</style>