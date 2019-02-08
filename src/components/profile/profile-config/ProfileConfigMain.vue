<template>
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
          <div class="col-sm-6">
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
          <div class="col-sm-6">
            <div class="form-group field-profileform-phone">
              <label class="control-label" for="profileform-phone">Телефон агента</label>
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
</template>

<script>
  import { mapFields } from 'vee-validate';
  import { mapGetters } from 'vuex';

  export default {
    name: "ProfileConfigMain",
    data() {
      return {
        email: '',
        phone: '',
        name: ''
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
        nameFlags: 'name'
      }),
      ...mapGetters({
        dataUser: 'profile/dataUser'
      })
    },
    created() {
      this.name = this.dataUser.username;

    }
  }
</script>

<style scoped>

</style>