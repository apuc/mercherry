<template>
  <div class="modal fade" id="cityModal">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body pb-0">
          <h3 class="text-center">Необходимо указать город</h3>
          <div class="form-group mb-0">
            <label class="control-label" for="modal-city">Город</label>
            <div class="position-relative">
              <input type="text"
                     id="modal-city"
                     class="form-control"
                     name="city"
                     v-model="modelCity"
                     autocomplete="off"
                     @focus="city.focused = true"
                     @blur="focusFalse('city')"
                     @input="dropdownRequest({name: 'city', obj: {q: modelCity}})"
              >

              <ul class="dropdown-input" v-if="profileCity.length > 0 && city.focused && city.dropdownValue.length > 0">
                <li v-for="(dropdownItem, index) in city.dropdownValue"
                    ref="cityDrop"
                    @click="choiceValue('city', index)"
                >
                  {{dropdownItem}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-block" data-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cityMixin from '../../cityMixin';
import {mapGetters} from 'vuex';

  export default {
    name: "ProfileModalCity",
    computed: {
      ...mapGetters({
        dataUser: "profile/dataUser"
      })
    },
    mixins: [cityMixin]
  }
</script>

<style scoped>

</style>