<template>
  <section class="login-wrap p-0">
    <div class="image image-overlay" style="background-image: url('/img/bg.jpg')"></div>
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-md-6 col-lg-5 pt-10 pb-5">
          <div class="accordion-group accordion-group-portal">
            <div class="accordion">
              <div class="accordion-control" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">
                <h5>Восстановление пароля</h5>
              </div>
              <div class="accordion-content collapse show" id="collapseOne">
                <div class="accordion-content-wrapper">
                  <form>
                    <div class="form-group">
                      <label class="control-label" for="passwordresetrequestform-email">Email</label>
                      <input type="text"
                             id="passwordresetrequestform-email"
                             class="form-control"
                             autofocus=""
                             name="email"
                             v-model="email"
                             v-validate="'required|email'"
                      >
                      <p class="text-danger" v-show="emailFlags.invalid && emailFlags.touched && !emailFlags.dirty">Необходимо заполнить «Email.</p>
                      <p class="text-danger" v-show="emailFlags.invalid && emailFlags.dirty">Значение «Email» не является правильным email адресом.</p>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">Отправить</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapFields } from 'vee-validate';

  export default {
    name: "PasswordMain",
    data() {
      return {
        email: '',
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
      }),
    },
  }
</script>

<style scoped>

</style>