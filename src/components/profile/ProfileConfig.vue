<template>
  <div class="tab-pane">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <ProfileConfigAvatar/>
        <ProfileConfigMain/>
        <ProfileConfigPassword/>
        <ProfileConfigAdd/>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfileConfigAvatar from "./profile-config/ProfileConfigAvatar";
  import ProfileConfigMain from "./profile-config/ProfileConfigMain";
  import ProfileConfigPassword from "./profile-config/ProfileConfigPassword";
  import ProfileConfigAdd from "./profile-config/ProfileConfigAdd";

  export default {
    name: "ProfileConfig",
    components: {ProfileConfigAdd, ProfileConfigPassword, ProfileConfigMain, ProfileConfigAvatar},
  }
</script>

<style scoped>

</style>