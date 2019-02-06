<template>
  <div class="job-search">
    <form @submit.prevent="$emit('getParams', fieldsSearch)">
      <div class="form-row mb-0">
        <div class="col-sm">
          <div class="form-group field-city mb-2">
            <input type="text"
                   id="city"
                   class="form-control"
                   name="city"
                   placeholder="Город"
                   v-model="fieldsSearch.city"
            >
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group field-total_salary mb-2">
            <input type="number"
                   id="total_salary"
                   class="form-control"
                   name="total_salary"
                   placeholder="Заработная плата"
                   v-model="fieldsSearch.total_salary"
            >
          </div>
        </div>
        <div class="px-1">
          <div class="form-group mb-2">
            <button type="submit" class="btn btn-black col">Искать</button>
          </div>
        </div>
      </div>
      <div class="row mb-0" v-if="!cityEmpty">
        <div class="col-12 metro-block">
          <div class="form-group field-metro mb-2">
            <label class="control-label" for="metro">Метро</label>
            <input type="text" id="metro" class="form-control" name="metro">
          </div>
        </div>
      </div>
      <div class="form-group field-employment mb-3 mt-1">
        <div id="employment">
          <label class="radio mr-2" v-for="(radioItem, index) in radio">
            <input type="radio"
                   name="employment"
                   :value=index
                   v-model="fieldsSearch.employment"
            >
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
    props: {
      cityEmpty: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        fieldsSearch: {
          city: '',
          total_salary: '',
          employment: ''
        },
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