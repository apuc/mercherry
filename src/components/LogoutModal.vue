<template>
  <div class="modal fade" id="logoutModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <h3>Вы уверены, что хотите выйти?</h3>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary mr-2" @click="logOut()" data-dismiss="modal">Да</button>
            <button class="btn btn-primary" data-dismiss="modal">Нет</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    name: "LogoutModal",
    methods: {
      ...mapMutations({
        AUTH: 'profile/AUTH'
      }),
      logOut() {
        localStorage.clear();
        this.AUTH(false);
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>

</style>