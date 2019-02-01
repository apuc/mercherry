<template>
  <div class="job-search">

    <form>
      <div class="form-row mb-0">
        <div class="col-sm">
          <div class="form-group field-city mb-3">
            <div>
              <input type="text" id="city" class="form-control" name="city" placeholder="Город">
            </div>
            <div class="help-block"></div>
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group field-total_salary mb-3">
            <input type="text" id="total_salary" class="form-control" name="total_salary" placeholder="Заработная плата">
            <div class="help-block"></div>
          </div>
        </div>
        <div class="px-1">
          <div class="form-group mb-3">
            <button type="submit" class="btn btn-black col">Искать</button>
          </div>
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
      <div class="form-group field-employment mb-3">
        <div id="employment">
          <label class="radio mr-2" v-for="(radioItem, index) in radio">
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