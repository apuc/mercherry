<template>
  <div class="modal fade" id="responseModal">
    <button class="d-none" data-dismiss="modal" ref="modalClose"></button>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="sendResponse">
          <div class="modal-body text-center pb-0">
            <h3>Анкета</h3>
            <p class="lh-1_2">
              Перед передачей вашего отклика работодателю, давайте ещё раз проверим, что вакансия вам
              подходит. Ответьте пожалуйста на вопросы:
            </p>
            <div class="form-group mb-1" v-for="(question, index) in info.questions">
              <label class="control-label c-dark-gray">
                {{question}}
              </label>
              <div>
                <label class="radio mr-2 c-dark-gray">
                  <input type="radio" :name="`ResponseForm[${index}]`" :value="1" v-model="inputsValues[index]">
                  <span class="radio__circle"></span>
                  <span>Да</span>
                </label>
                <label class="radio c-dark-gray">
                  <input type="radio" :name="`ResponseForm[${index}]`" :value="0" v-model="inputsValues[index]">
                  <span class="radio__circle"></span>
                  <span>Нет</span>
                </label>
              </div>
              <span class="text-danger" v-if="err.hasOwnProperty(index)">
                {{err[index]}}
              </span>
            </div>
            <div class="text-danger" v-if="err.hasOwnProperty('id')">
              {{err.id}}
            </div>
            <div v-if="success !== ''">
              {{success}}
            </div>
          </div>
          <div class="modal-footer pt-1">
            <button type="submit" class="btn btn-primary btn-block">Откликнуться</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "VacancyModal",
    data() {
      return {
        inputsValues: {},
        err: {},
        success: ''
      }
    },
    props: {
      info: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },
    methods: {
      ...mapActions({
        responseVacancy: 'response/RESPONSE_VACANCY',
        GET_VACANCY_INFO: 'vacancy/GET_VACANCY_INFO'
      }),
      sendResponse() {
        this.responseVacancy({
          answer: this.inputsValues,
          id: this.id
        }).then(data => {
          if (data.ok) {
            this.success = 'Анкета отправлена';
            this.err = {};
            this.GET_VACANCY_INFO(this.id);
            this.$refs.modalClose.click();
          }
          else {
            this.err = data.body.error;
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>