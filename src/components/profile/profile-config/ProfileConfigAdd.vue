<template>
  <div class="row">
    <div class="col">
      <h3 class="mb-2 fs-22 font-weight-normal">Дополнительная информация</h3>
      <form>
        <div class="alert alert-warning mb-2">
          Выбирайте какие вакансии вас интересуют и мы будем информировать вас о новых вакансиях.
        </div>
        <div class="form-group mb-2">
          <h3 class="mb-2 fs-22 font-weight-normal">Интересующий тип вакансии</h3>
          <div>
            <label class="checkbox mr-2">
              <input type="checkbox">
              <span class="checkbox__circle"></span>
              <span>Полная занятость</span>
            </label>
            <label class="checkbox mr-2">
              <input type="checkbox">
              <span class="checkbox__circle"></span>
              <span>Частичная занятость</span>
            </label>
            <label class="checkbox">
              <input type="checkbox">
              <span class="checkbox__circle"></span>
              <span>Разовые задания</span>
            </label>
          </div>
        </div>
        <div class="form-group">
          <label class="checkbox">
            <input type="checkbox">
            <span class="checkbox__circle"></span>
            <span>Получать подходящие вам вакансии на почту</span>
          </label>
        </div>
        <div class="alert alert-warning">
          Заполните данные по городу, метро или районам по которым мы будем предлагать вам вакансии.
          Вы можете указать несколько станций метро/районов
        </div>
        <div class="form-group">
          <label class="control-label" for="advancedprofileform-city">Город</label>
          <div class="position-relative">
            <input type="text"
                   id="advancedprofileform-city"
                   class="form-control"
                   name="city"
                   ref="city"
                   v-validate="'required|alpha'"
                   v-model="user.city.name"
                   autocomplete="off"
                   @focus="city.focused = true"
                   @blur="city.focused = false"
            >

            <ul class="dropdown-input" v-if="user.city.name.length > 0 && city.focused">
              <li v-for="dropdownItem in city.dropdownValue">
                {{dropdownItem}}
              </li>
            </ul>
          </div>
        </div>

        <div class="form-group mb-4">
          <label class="control-label" for="dt-add">Район</label>
          <div class="position-relative">
            <input type="text"
                   id="dt-add"
                   class="form-control"
                   placeholder="Введите название района"
                   v-model="district.name"
                   autocomplete="off"
                   @focus="district.focused = true"
                   @blur="district.focused = false"
            >

            <ul class="dropdown-input" v-if="district.name.length > 0 && district.focused">
              <li v-for="dropdownItem in district.dropdownValue">
                {{dropdownItem}}
              </li>
            </ul>
          </div>
        </div>
        <div class="alert alert-warning mb-2">
          Указывайте магазины в которых вы уже работаете. Мы покажем ваш отклик работодателю в числе
          первых по вакансиям в магазинах где вы уже работаете.
        </div>
        <div class="form-group mb-3">
          <label class="control-label" for="n-add">Сеть</label>
          <input data-toggle="modal" :data-target="cityFlags.invalid ? '#cityModal' : ''" type="text" id="n-add" class="form-control" placeholder="Укажите адрес сети">
        </div>
        <div>
          <div class="row">
            <div class="col"></div>
          </div>
        </div>
        <div class="form-row mt-3 mb-2 align-items-center">
          <div class="col-3">
            <button type="submit" class="btn btn-secondary">Сохранить</button>
          </div>
        </div>
        <div class="alert alert-warning">
          <p>Вы можете приглашать своих друзей на платформу, отправляя им эту ссылку. Если человек за полгода
            устроиться на любую вакансию ( не задание) с сайта, то вы получаете 1000 рублей, а он за выход на
            работу и отработку 3 дней получает 500 рублей.</p>
          <strong>Реферальная ссылка:</strong> https://mercherry.ru/login?ref=41WNIjy0w7Z
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapFields } from 'vee-validate';
  import cityMixin from '../../../cityMixin'
  import {mapState} from 'vuex';

  export default {
    name: "ProfileConfigAdd",
    data() {
      return {
        city: {
          focused: false,
          name: '',
          dropdownValue: [
            '1',
            '2',
            '3',
            '4',
            '5'
          ],
        },
        district: {
          focused: false,
          name: '',
          dropdownValue: [
            '1',
            '2',
            '3',
            '4',
            '5'
          ]
        },
      }
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            alert('Form Submitted!');
            return;
          }

          alert('Correct them errors!');
        });
      },
      cityRequest:
        _.debounce(function(value) {


        }, 200),
      districtRequest:
        _.debounce(function(value) {


        }, 200),
    },
    computed: {
      ...mapFields({
        cityFlags: 'city'
      }),
      ...mapState({
        user: "user"
      })
    },
    watch: {
      city(value) {
        this.cityRequest();
      },
      district(value) {
        this.districtRequest();
      }
    },
    mixins: [cityMixin]
  }
</script>

<style lang="scss">
  .dropdown-input {
    position: absolute;
    z-index: 10;
    top: calc(100% + 2px);
    left: 0;
    width: 100%;
    padding: 10px 0;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 2em;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    overflow: hidden;
    li {
      display: block;
      padding: 3px 20px;
      clear: both;
      font-weight: 400;
      line-height: 1.4;
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
</style>