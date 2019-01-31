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
          <label class="radio" v-for="(radioItem, index) in radio">
            <input type="radio" name="employment" :value=index>
            <span class="radio__circle"></span>
            <span>{{radioItem}}</span>
          </label>
        </div>
        <div class="help-block"></div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "JobForm",
    data() {
      return {
        radio: [
          'Полная занятость',
          'Частичная занятость',
          'Разовые задания'
        ]
      }
    }
  }
</script>

<style scoped>

</style>