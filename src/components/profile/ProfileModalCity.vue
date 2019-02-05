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
                     v-model="user.city.name"
                     @focus="city.focused = true"
                     @blur="city.focused = false"
              >

              <ul class="dropdown-input" v-if="user.city.name.length > 0 && city.focused">
                <li v-for="dropdownItem in city.dropdownValue">
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
import {mapState} from 'vuex';

  export default {
    name: "ProfileModalCity",
    computed: {
      ...mapState({
        user: "user"
      })
    },
    mixins: [cityMixin]
  }
</script>

<style scoped>

</style>