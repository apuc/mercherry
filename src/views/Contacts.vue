<template>
  <section class="contacts">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8">
          <div class="row">
            <div class="col text-center">
              <h2>Связаться с нами</h2>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form @submit.prevent="validateBeforeSubmit">
                <div class="row mb-1">
                  <div class="col-md-6">
                    <div class="form-group field-contactform-label required">
                      <label class="control-label" for="contactform-label">Имя</label>
                      <input
                          type="text"
                          id="contactform-label"
                          class="form-control"
                          name="name"
                          v-model="name"
                          v-validate="'required|alpha'"
                      >
                      <p class="text-danger" v-show="!nameFlags.valid && nameFlags.touched">Заполните «Имя».</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group field-contactform-contact required">
                      <label class="control-label" for="contactform-contact">E-mail (для ответа на обращение)</label>
                      <input
                          type="text"
                          id="contactform-contact"
                          class="form-control"
                          name="email"
                          v-model="email"
                          v-validate="'required|email'"
                      >
                      <p class="text-danger" v-show="emailFlags.invalid && emailFlags.touched && !emailFlags.dirty">Заполните «Email.</p>
                      <p class="text-danger" v-show="emailFlags.invalid && emailFlags.dirty">Значение «Email» не является правильным email адресом.</p>
                    </div>
                  </div>
                </div>
                <div class="form-row mb-1">
                  <div class="col">
                    <div class="form-group field-contactform-body required">
                      <label class="control-label" for="contactform-body">Сообщение</label>
                      <textarea id="contactform-body"
                                class="form-control"
                                rows="3"
                                placeholder="Нам очень важны ваши предложения и вообще мнение. Пишите нам все ваши идеи мы хотим быть удобными для вас."
                                name="textarea"
                                v-model="textarea"
                                v-validate="'required|alpha'"
                      >
                      </textarea>
                      <p class="text-danger" v-show="!textareaFlags.valid && textareaFlags.touched">Заполните «Сообщение».</p>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-3">
                  <div class="col">
                    <button type="submit" class="btn btn-primary px-5">Отправить вопрос</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapFields } from 'vee-validate';
  import { mapActions } from 'vuex';

  export default {
    name: "Contacts",
    data() {
      return {
        textarea: '',
        email: '',
        name: ''
      }
    },
    methods: {
      ...mapActions({
        contactStatus: 'contacts/CONTACT'
      }),
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.contactStatus({
              name: this.name,
              email: this.email,
              body: this.textarea
            });
          }
        });
      }
    },
    computed: {
      ...mapFields({
        textareaFlags: 'textarea',
        emailFlags: 'email',
        nameFlags: 'name'
      }),
    },
  }
</script>

<style scoped>

</style>