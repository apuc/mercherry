<template>
  <div class="modal fade" id="avatarModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form @submit.prevent="submitAvatar">
          <div class="modal-body text-center">
            <h3>Редактирование фото</h3>
            <p class="mb-0">
              Минимальный размер изображения 160х160 пикселей
            </p>
            <div v-if="err.hasOwnProperty('file')">
              {{err.file}}
            </div>
          </div>
          <div class="modal-footer">
            <input type="file" class="d-none" id="validatedCustomFile" required @change="setAvatarFormData">
            <label class="btn btn-primary btn-block m-0" for="validatedCustomFile">Загрузить фото</label>
          </div>
          <button type="submit" class="d-none" ref="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import response from "../../store/modules/response/response";

  export default {
    name: "ProfileModalAvatar",
    data() {
      return {
        img: undefined,
        imgSrc: '',
        err: {}
      }
    },
    methods: {
      ...mapActions({
        AVATAR: 'profile/AVATAR'
      }),
      setAvatarFormData(e) {
        const files = e.target.files || e.dataTransfer.files;
        const fileType = files[0].type.split('/');

        if (files.length && fileType[0] === 'image') {
          this.createFormData(files[0]);
        }
      },
      createFormData(file) {
        let formData = new FormData();
        formData.append('file', file);
        this.img = formData;
        const submit = this.$refs.submit;
        submit.click();
      },
      submitAvatar() {
        this.AVATAR(this.img)
          .then(data => {
            if (data.body.hasOwnProperty('error')) {
              this.err = data.body.error;
            }
          });
      }
    }
  }
</script>

<style scoped>

</style>