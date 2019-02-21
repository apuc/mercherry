<template>
  <main class="main bg-profile">
    <ProfileUser/>
    <ProfileNav :tabs="tabs"/>
    <section class="pt-2">
      <div class="container">
        <div class="tab-content">
          <ProfileVacancy :id="tabs[0].href"/>
          <ProfileTask :id="tabs[1].href"/>
          <ProfilePayment :id="tabs[2].href"/>
          <ProfileInvited :id="tabs[3].href"/>
          <ProfileConfig :id="tabs[4].href"/>
        </div>
      </div>
    </section>
    <ProfileModalAvatar/>
    <ProfileModalCity @getModalCity="modalCity(city)"/>
  </main>
</template>

<script>
  import ProfileUser from "../components/profile/ProfileUser";
  import ProfileNav from "../components/profile/ProfileNav";
  import ProfileVacancy from "../components/profile/ProfileVacancy";
  import ProfileTask from "../components/profile/ProfileTask";
  import ProfilePayment from "../components/profile/ProfilePayment";
  import ProfileInvited from "../components/profile/ProfileInvited";
  import ProfileConfig from "../components/profile/ProfileConfig";
  import ProfileModalAvatar from "../components/profile/ProfileModalAvatar";
  import ProfileModalCity from "../components/profile/ProfileModalCity";

  export default {
    name: "Profile",
    components: {
      ProfileModalCity,
      ProfileModalAvatar,
      ProfileConfig, ProfileInvited, ProfilePayment, ProfileTask, ProfileVacancy, ProfileNav, ProfileUser},
    data() {
      return {
        tabs: [
          {
            name: 'Вакансии',
            href: 'nav-job'
          },
          {
            name: 'Задания',
            href: 'task-job'
          },
          {
            name: 'Выплаты',
            href: 'nav-payment'
          },
          {
            name: 'Приглашенные',
            href: 'nav-invited'
          },
          {
            name: 'Настройки',
            href: 'nav-config'
          }
        ],
        data: {},
        city: ''
      }
    },
  }
</script>

<style>
  .bg-profile {
    background-color: #f8f8f8;
  }
</style>