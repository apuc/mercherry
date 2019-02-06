<template>
  <div class="modal fade" id="responseModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form>
          <div class="modal-body text-center pb-0">
            <h3>Анкета</h3>
            <p class="lh-1_2">
              Перед передачей вашего отклика работодателю, давайте ещё раз проверим, что вакансия вам
              подходит. Ответьте пожалуйста на вопросы:
            </p>
            <div class="form-group mb-1">
              <label class="control-label c-dark-gray">
                Вы уверены что вам будет удобно работать на территории?
                <span class="d-block  my-1">(Москва)</span>
              </label>
              <div>
                <label class="radio mr-2 c-dark-gray">
                  <input type="radio" name="ResponseForm[q0]" value="1">
                  <span class="radio__circle"></span>
                  <span>Да</span>
                </label>
                <label class="radio c-dark-gray">
                  <input type="radio" name="ResponseForm[q0]" value="0">
                  <span class="radio__circle"></span>
                  <span>Нет</span>
                </label>
              </div>
            </div>
            <div class="form-group mb-1">
              <label class="control-label c-dark-gray">
                Вы уверены что вас устраивает заработная плата?
                <span class="d-block my-1">(35000)</span>
              </label>
              <div>
                <label class="radio mr-2 c-dark-gray">
                  <input type="radio" name="ResponseForm[q1]" value="1">
                  <span class="radio__circle"></span>
                  <span>Да</span>
                </label>
                <label class="radio c-dark-gray">
                  <input type="radio" name="ResponseForm[q1]" value="0">
                  <span class="radio__circle"></span>
                  <span>Нет</span>
                </label>
              </div>
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
  export default {
    name: "VacancyModal"
  }
</script>

<style scoped>

</style>