<template>
  <div class="tab-pane">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <div class="row mb-4">
          <div class="col">
            <div class="boxed">
              <div class="row align-items-center p-3">
                <div class="col-md-2 pb-2 pb-md-0 text-center">
                  <img class="avatar avatar-lg rounded" src="/img/avatar.jpg" alt="">
                </div>
                <div class="col-md-5 text-center text-md-left">
                  <h4 class="mb-0">
                    <strong>apuc</strong>
                  </h4>
                  <button type="button" class="fs-14 link text-primary" data-toggle="modal" data-target="#avatarModal">Изменить аватар</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <h3 class="mb-2 fs-22 font-weight-normal">Основная информация</h3>
            <form>
              <div class="form-row">
                <div class="col">
                  <div class="form-group field-profileform-username required">
                    <label class="control-label" for="profileform-username">Имя пользователя</label>
                    <input type="text"
                           id="profileform-username"
                           class="form-control"
                           name="name"
                           v-model="name"
                           v-validate="'required|alpha'"
                    >
                    <div v-show="!nameFlags.valid && nameFlags.touched">Необходимо заполнить «Имя».</div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <div class="form-group field-profileform-name">
                    <label class="control-label" for="profileform-name">Имя</label>
                    <input type="text" id="profileform-name" class="form-control">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group field-profileform-second_name">
                    <label class="control-label" for="profileform-second_name">Фамилия</label>
                    <input type="text" id="profileform-second_name" class="form-control">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <div class="form-group field-profileform-email">
                    <label class="control-label" for="profileform-email">Email</label>
                    <input type="text"
                           id="profileform-email"
                           class="form-control"
                           name="email"
                           v-model="email"
                           v-validate="'required|email'"
                    >
                    <div v-show="emailFlags.invalid && emailFlags.touched && !emailFlags.dirty">Необходимо заполнить «Email.</div>
                    <div v-show="emailFlags.invalid && emailFlags.dirty">Значение «Email» не является правильным email адресом.</div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <div class="form-group field-profileform-phone">
                    <label class="control-label" for="profileform-phone">Номер мобильного телефона (номер телефона агента)</label>
                    <input type="text" id="profileform-phone" class="form-control" v-mask="'8(###)###-##-##'" v-model="phone" placeholder="8(___)___-__-__">
                  </div>
                </div>
              </div>
              <div class="form-row mt-1 align-items-center">
                <div class="col-3">
                  <button type="submit" class="btn btn-secondary">Сохранить</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <h3 class="mb-2 fs-22 font-weight-normal">Смена пароля</h3>
            <form>
              <div class="form-row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="control-label" for="passwordform-password">Новый пароль</label>
                    <input type="password"
                           id="passwordform-password"
                           class="form-control"
                           v-validate="'required'"
                           ref="password"
                           name="password"
                    >
                    <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="control-label" for="passwordform-password_repeat">Повторите пароль</label>
                    <input type="password"
                           id="passwordform-password_repeat"
                           class="form-control"
                           v-validate="'required|confirmed:password'"
                           data-vv-as="password"
                           name="password_confirmation"
                    >
                    <!--<span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>-->
                  </div>
                </div>
              </div>
              <div class="form-row mt-1 align-items-center">
                <div class="col-3">
                  <button type="submit" class="btn btn-secondary">Сохранить</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3 class="mb-2 fs-22 font-weight-normal">Дополнительная информация</h3>
            <form>
              <div class="alert alert-warning mb-2">
                Выбирайте какие вакансии вас интересуют и мы будем информировать вас о новых вакансиях.
              </div>
              <div class="form-group mb-2">
                <label class="control-label">Интересующий тип вакансии</label>
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
                <input type="text"
                       id="advancedprofileform-city"
                       class="form-control"
                       name="city"
                       v-model="city"
                       v-validate="'required|alpha'"
                >
              </div>
              <div class="form-group mb-4">
                <label class="control-label" for="dt-add">Район</label>
                <input type="text" id="dt-add" class="form-control" placeholder="Введите название района">
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
                <strong>Реферальная ссылка:</strong> https://mercherry.ru/login?ref=41WNIjy0w7Z				</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapFields } from 'vee-validate';

  export default {
    name: "ProfileConfig",
    data() {
      return {
        email: '',
        phone: '',
        name: '',
        city: ''
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
    },
    computed: {
      ...mapFields({
        emailFlags: 'email',
        nameFlags: 'name',
        cityFlags: 'city'
      })
    }
  }
</script>

<style scoped>

</style>