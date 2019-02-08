<template>
  <div class="row mb-4">
    <div class="col">
      <div class="boxed">
        <div class="row align-items-center p-3">
          <div class="col-md-2 pb-2 pb-md-0 text-center">
            <img class="avatar avatar-lg rounded" :src="dataUser.avatar" alt="">
          </div>
          <div class="col-md-5 text-center text-md-left">
            <h4 class="mb-0">
              <strong>{{dataUser.username}}</strong>
            </h4>
            <button type="button" class="fs-14 link text-primary" data-toggle="modal" data-target="#avatarModal">Изменить аватар</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "ProfileConfigAvatar",
    computed: {
      ...mapGetters({
        dataUser: 'profile/dataUser'
      })
    },
  }
</script>

<style scoped>

</style>