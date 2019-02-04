<template>
  <div class="row mb-4">
    <div class="col">
      <h3 class="mb-2 fs-22 font-weight-normal">Смена пароля</h3>
      <form>
        <div class="form-row">
          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label" for="passwordform-password">Новый пароль</label>
              <input type="password"
                     id="passwordform-password"
                     class="form-control"
                     v-validate="'required|min:6|verify_password'"
                     ref="password"
                     name="password"
              >
              <span v-show="errors.has('password')" class="help is-danger">
                {{errors.first('password')}}
              </span>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label" for="passwordform-password_repeat">Повторите пароль</label>
              <input type="password"
                     id="passwordform-password_repeat"
                     class="form-control"
                     v-validate="'required|confirmed:password'"
                     data-vv-as="password"
                     name="password_confirmation"
              >
              <span v-show="errors.has('password_confirmation') && this.fields.password_confirmation.dirty" class="help is-danger">
                {{errors.first('password_confirmation')}}
              </span>
            </div>
          </div>
        </div>
        <div class="form-row mt-1 align-items-center">
          <div class="col-3">
            <button type="submit" class="btn btn-secondary">Сохранить</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileConfigPassword"
  }
</script>

<style scoped>

</style>