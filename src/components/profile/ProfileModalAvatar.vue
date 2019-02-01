<template>
  <div class="modal fade" id="avatarModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form enctype="multipart/form-data">
          <div class="modal-body text-center">
            <h3>Редактирование фото</h3>
            <p class="mb-0">
              Минимальный размер изображения 160х160 пикселей
            </p>
          </div>
          <div class="modal-footer">
            <input type="file" class="d-none" id="validatedCustomFile" required>
            <label class="btn btn-primary btn-block m-0" for="validatedCustomFile">Загрузить фото</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileModalAvatar"
  }
</script>

<style scoped>

</style>