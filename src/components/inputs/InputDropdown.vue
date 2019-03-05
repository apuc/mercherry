<template>
  <div>
    <div class="form-group">
      <label v-if="data.label !== undefined" :for="data.id">{{data.label}}</label>
      <div class="d-flex">
        <v-select :multiple="data.multiply"
                  :close-on-select="!data.multiply"
                  :options="dropdownValue"
                  @search="search"
                  :name="data.name"
                  :id="data.id"
                  :value="value"
                  @input="updateValue"
                  @blur="$emit('blur')"
                  :placeholder="data.placeholder || data.label"
        >
        </v-select>

        <button v-if="data.modal !== undefined" type="button" class="btn btn-success ml-3" :data-target="data.modal" data-toggle="modal">+</button>
      </div>
      <p v-if="error !== undefined" class="text-danger">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';
  import store from './../../store/store';
  import _ from 'lodash';

  export default {
    name: "InputSelectMultiple",
    data() {
      return {
        dropdownValue: []
      }
    },
    methods: {
      search(search, loading) {
        loading(true);
        this.getRepositories(search, loading, this)
      },
      getRepositories: _.debounce(function(search, loading) {
        let obj = {q: search};
        if (this.data.params !== undefined) {
          for (let label of this.data.params) {
            obj[label] = store.getters['vacancy/getAddVacancyData'][label];
          }
        }
        store.dispatch(`lists/${this.data.name.toUpperCase()}_LIST`, obj)
          .then(res => {
            this.dropdownValue = [];
            if (Array.isArray(res.body)) {
              this.dropdownValue = res.body.slice(0, 10);
            }
            else {
              let i = 0;
              for (let key in res.body) {
                if (i < 10) {
                  this.dropdownValue.push(res.body[key]);
                  i++;
                }
                else {
                  break;
                }
              }
            }
            loading(false);
          });
      }, 250),
      updateValue(value) {
        this.$emit("input", value);
      }
    },
    mixins: [inputMixin],
  }
</script>

<style>
  .v-select {
    width: 100%;
  }
  .v-select .vs__actions {
    display: none !important;
  }
  .dropdown input {
    padding: 0 1.475rem !important;
  }
  .dropdown.single input {
    padding: 0 0.3rem !important;
  }
  .dropdown.single .vs__selected-options {
    padding: 0 1.175rem !important;
  }
  .dropdown-toggle::after {
    display: none;
  }
  .v-select input {
    margin-top: 0 !important;
  }
</style>