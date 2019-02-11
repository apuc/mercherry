<template>
  <div class="row mb-4">
    <div class="col">
      <h3 class="mb-2 fs-22 font-weight-normal">Основная информация</h3>
      <form @submit.prevent="validateBeforeSubmit">
        <div class="form-row">
          <div class="col">
            <div class="form-group field-profileform-username required">
              <label class="control-label" for="profileform-username">Имя пользователя</label>
              <input type="text"
                     id="profileform-username"
                     class="form-control"
                     name="name"
                     v-model="user.username"
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
              <input type="text" id="profileform-name" class="form-control" v-model="user.first_name">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group field-profileform-second_name">
              <label class="control-label" for="profileform-second_name">Фамилия</label>
              <input type="text" id="profileform-second_name" class="form-control" v-model="user.last_name">
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-sm-6">
            <div class="form-group field-profileform-email">
              <label class="control-label" for="profileform-email">Email</label>
              <input type="text"
                     id="profileform-email"
                     class="form-control"
                     name="email"
                     v-model="user.email"
                     v-validate="'required|email'"
              >
              <div v-show="emailFlags.invalid && emailFlags.touched && !emailFlags.dirty">Необходимо заполнить «Email.</div>
              <div v-show="emailFlags.invalid && emailFlags.dirty">Значение «Email» не является правильным email адресом.</div>
              <div v-show="err.hasOwnProperty('email')">{{err.email}}</div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group field-profileform-phone">
              <label class="control-label" for="profileform-phone">Телефон агента</label>
              <input type="text" id="profileform-phone" class="form-control" v-mask="'8(###)###-##-##'" v-model="user.phone" placeholder="8(___)___-__-__">
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
  import { mapFields } from 'vee-validate';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "ProfileConfigMain",
    data() {
      return {
        user: {
          email: '',
          phone: '',
          username: '',
          first_name: '',
          last_name: ''
        },
        err: {},
        updated: false
      }
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.UPDATE_USER_DATA(this.user)
              .then(data => {
                if(data.body.hasOwnProperty('error')) {
                  this.err = data.body.error;
                }
                this.updated = data.ok;
              });
          }
        });
      },
      ...mapActions({
        UPDATE_USER_DATA: 'profile/UPDATE_USER_DATA'
      })
    },
    computed: {
      ...mapFields({
        emailFlags: 'email',
        nameFlags: 'name'
      }),
      ...mapGetters({
        dataUser: 'profile/dataUser'
      })
    },
    created() {
      for (let key in this.dataUser) {
        if (this.user.hasOwnProperty(key)) {
          this.user[key] = this.dataUser[key];
        }
      }
    }
  }
</script>

<style scoped>

</style>