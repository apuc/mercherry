<template>
  <div class="accordion">
    <div class="accordion-control" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
      <h5>Авторизация</h5>
    </div>

    <div id="collapseOne" class="accordion-content collapse show" data-parent=".accordion-group">
      <div class="accordion-content-wrapper">
        <form @submit.prevent="validateBeforeSubmit">
          <div class="form-group field-loginform-login">
            <label class="control-label" for="loginform-login">Email или номер телефона</label>
            <input type="text"
                   id="loginform-login"
                   class="form-control"
                   :class="{'is-valid': loginFlags.valid, 'is-invalid': errors.has('login') }"
                   name="login"
                   v-model="login"
                   v-validate="'required|min:2|verify_email_phone'"
            >
          </div>

          <div class="form-group field-loginform-password">
            <label class="control-label d-block" for="loginform-password">
              Пароль
              <input type="password"
                     id="loginform-password"
                     class="form-control"
                     :class="{'is-valid': passwordFlags.valid, 'is-invalid': errors.has('password') }"
                     name="password"
                     v-model="password"
                     v-validate="'required|min:6|verify_password'"
              >
            </label>
            <p v-if="err.hasOwnProperty('password')" class="text-danger">
              {{err.password}}
            </p>
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-2" @click="enter">Войти</button>
        </form>
        <router-link class="text-muted" to="/password-reset">Восстановить пароль</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapFields } from 'vee-validate';
  import { mapActions} from 'vuex';

  export default {
    name: "LoginAuth",
    data() {
      return {
        login: '',
        password: '',
        err: {}
      }
    },
    computed: {
      ...mapFields({
        loginFlags: 'login',
        passwordFlags: 'password',
      })
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll();
      },
      ...mapActions({
        LOGIN: 'auth/LOGIN'
      }),
      enter() {
        this.LOGIN({
          login: this.login,
          password: this.password
        }).then(data => {
          if (data.ok) {
            this.$router.push('/');
          } else {
            this.err = data.body.error;
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>