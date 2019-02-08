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
          </div>
          <div class="modal-footer">
            <input type="file" class="d-none" id="validatedCustomFile" required @change="setAvatarFormData">
            <label class="btn btn-primary btn-block m-0" for="validatedCustomFile">Загрузить фото</label>
          </div>

          <button type="submit">Submit</button>
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
        imgSrc: ''
      }
    },
    methods: {
      ...mapActions({
        avatar: 'profile/AVATAR'
      }),
      async setAvatarFormData(e) {
        const files = e.target.files || e.dataTransfer.files;
        const fileType = files[0].type.split('/');
        console.log(files);

        if (files.length && fileType[0] === 'image') {
          // this.createImage(files[0]);
          this.createFormData(files[0]);
          // let formData = new FormData();
          // await formData.append('file', files[0]);
          //  this.img = formData;
        }
      },
      createFormData(file) {
        let formData = new FormData();
        formData.append('file', file);
        this.img = formData;
      },
      // createImage(file) {
      //   const reader = new FileReader();
      //   reader.onload = e => {
      //     this.imgSrc = e.target.result;
      //   };
      //   reader.readAsDataURL(file);
      // },
      submitAvatar() {
        const token = localStorage.getItem('token');
        console.log(this.img);
        fetch(`${process.env.VUE_APP_API_URL}/profile/avatar`, {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          },
          mode: 'cors',
          cache: 'default',
          body: this.img
        })
          .then(response => console.log(response))
          .catch(error => console.log(error));
        // this.avatar(this.img)
        //   .then(data => console.log(data));
      }
    }
  }
</script>

<style scoped>

</style>