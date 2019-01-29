<template>
  <div class="accordion">
    <div class="accordion-control " data-toggle="collapse" data-target="#collapseTwo">
      <h5>Создать аккаунт</h5>
    </div>

    <div class="accordion-content collapse" id="collapseTwo" data-parent=".accordion-group">
      <div class="accordion-content-wrapper">
        <form @submit.prevent="validateBeforeSubmit">
          <div class="form-group field-signupform-username">
            <label class="control-label" for="signupform-username">Псевдоним</label>
            <input type="text"
                   id="signupform-username"
                   class="form-control"
                   :class="{'is-valid':loginFlags.valid, 'is-invalid': errors.has('login') }"
                   name="login"
                   v-model="login"
                   v-validate="'required|alpha'"
            >
          </div>

          <div class="form-group field-signupform-email">
            <label class="control-label" for="signupform-email">Email</label>
            <input type="text"
                   id="signupform-email"
                   class="form-control"
                   :class="{'is-valid': emailFlags.valid, 'is-invalid': errors.has('email') }"
                   name="email"
                   v-model="email"
                   v-validate="'required|email'"
            >
          </div>

          <div class="form-group field-signupform-password">
            <label class="control-label" for="signupform-password">Пароль</label>
            <input type="password"
                   id="signupform-password"
                   class="form-control"
                   :class="{'is-valid': passwordFlags.valid, 'is-invalid': errors.has('password') }"
                   name="password"
                   v-model="password"
                   v-validate="'required|min:6|verify_password'"
            >
          </div>

          <div class="form-group field-signupform-confirm">
            <div class="checkbox">
              <label for="signupform-confirm">
                <input type="checkbox"
                       id="signupform-confirm"
                       name="checkbox"
                       v-validate="'required'">
                Я согласен с пользовательским соглашением и даю согласие на обработку персональных данных и получение информации по sms и email
              </label>
              <p class="text-danger" v-show="errors.has('checkbox')">Вам необходимо согласиться с правилами сайта</p>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapFields } from 'vee-validate';

  export default {
    name: "LoginReg",
    data() {
      return {
        login: '',
        email: '',
        password: '',
        checkbox: ''
      }
    },
    computed: {
      ...mapFields({
        loginFlags: 'login',
        emailFlags: 'email',
        passwordFlags: 'password',
      }),
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
    }
  }
</script>

<style scoped>

</style>