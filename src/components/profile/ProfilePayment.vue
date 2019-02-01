<template>
  <div class="tab-pane">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <h3 class="fs-22 font-weight-normal mb-2">Ваш баланс</h3>
        <div class="boxed p-3 mb-4">
          <div class="row align-items-center justify-content-between">
            <div class="col-6">
					    <span class="fs-40 font-weight-normal mb-0">0₽</span>
            </div>
          </div>
        </div>
        <div class="row align-items-center mb-2">
          <div class="col-lg-6 text-center text-lg-left">
            <h3 class="fs-22 font-weight-normal">Варианты оплаты</h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="tab-content">
              <div class="tab-pane active show">
                <div class="row">
                  <div class="col">
                    <div class="boxed p-3">
                      <div class="row align-items-center justify-content-between">
                        <div class="col-sm-6">
                          <h5 class="fs-18 font-weight-normal mb-sm-0">Карта не привязана</h5>
                        </div>
                        <div class="col-sm-6 text-sm-right text-center">
                          <button type="button" class="btn btn-primary">Привязать карту</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="table-responsive-md">
                      <table class="table table-lined">
                        <tr>
                          <th scope="col">Дата</th>
                          <th scope="col">Номер</th>
                          <th scope="col">Сумма</th>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfilePayment"
  }
</script>

<style scoped>

</style>