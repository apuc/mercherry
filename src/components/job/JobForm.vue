<template>
  <div class="job-search">

    <form>
      <div class="form-row mb-0">
      <div class="col-sm">
        <div class="form-group field-city">
          <label class="control-label" for="city">Город</label>
          <div>
            <input type="text" id="city" class="form-control" name="city">
          </div>
          <div class="help-block"></div>
        </div>
      </div>
      <div class="col-sm">
        <div class="form-group field-total_salary">
          <label class="control-label" for="total_salary">Заработная плата</label>
          <input type="text" id="total_salary" class="form-control" name="total_salary" placeholder="От">
          <div class="help-block"></div>
        </div>
      </div>
      <div class="form-group">
        <label class="contol-label">&nbsp;</label>
        <button type="submit" class="btn btn-primary col">Искать</button>
      </div>
    </div>
      <div class="row mb-0">
        <div class="col-12 metro-block" style="display:none">
          <div class="form-group field-metro">
            <label class="control-label" for="metro">Метро</label>
            <input type="text" id="metro" class="form-control" name="metro">

            <div class="help-block"></div>
          </div>
        </div>
      </div>
      <div class="form-group field-employment">
        <label class="control-label">&nbsp;</label>
        <div id="employment">
          <label>
            <input type="radio" name="employment" value="0"> Полная занятость
          </label>
          <label>
            <input type="radio" name="employment" value="1"> Частичная занятость
          </label>
          <label>
            <input type="radio" name="employment" value="2"> Разовые задания
          </label>
        </div>
        <div class="help-block"></div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "JobForm"
  }
</script>

<style scoped>

</style>