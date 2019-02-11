<template>
  <div class="row mb-4">
    <div class="col">
      <h3 class="mb-2 fs-22 font-weight-normal">Смена пароля</h3>
      <form @submit.prevent="validateBeforeSubmit">
        <div class="form-row">
          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label" for="passwordform-password">Новый пароль</label>
              <input type="password"
                     id="passwordform-password"
                     class="form-control"
                     v-validate="'required|verify_password'"
                     ref="password"
                     name="password"
                     v-model="data.password"
              >
              <span v-show="errors.has('password')" class="help is-danger">
                {{errors.first('password')}}
              </span>
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
                     v-model="data.password_repeat"
              >
              <span v-show="errors.has('password_confirmation') && this.fields.password_confirmation.dirty" class="help is-danger">
                {{errors.first('password_confirmation')}}
              </span>
            </div>
          </div>
        </div>
        <div v-if="updated">
          Обновлено успешно
        </div>
        <div class="form-row mt-1 align-items-center">
          <div class="col-3">
            <button type="submit" class="btn btn-secondary">Сохранить</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "ProfileConfigPassword",
    data() {
      return {
        data: {
          password: '',
          password_repeat: ''
        },
        updated: false
      }
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.PASSWORD(this.data)
              .then(data => {
                this.updated = data.ok;
              });
          }
        });
      },
      ...mapActions({
        PASSWORD: 'profile/PASSWORD'
      })
    }
  }
</script>

<style scoped>

</style>