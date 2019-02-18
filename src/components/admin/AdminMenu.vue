<template>
  <div class="admin-menu-wrap" :class="menuOpen ? 'admin-menu--open' : ''">
    <button class="admin-menu__btn" @click="menuOpen = !menuOpen" :class="menuOpen ? 'admin-menu__btn-open' : ''">
      <i class="fa" :class="menuOpen ? 'fa-angle-left' : 'fa-angle-right'"></i>
    </button>
    <nav class="admin-menu">
      <router-link v-for="item in links"
                   :to="`/admin/${item.href}`"
                   :key="item.href"
                   class="admin-menu__item"
      >
        <span>{{item.name}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "AdminMenu",
    data() {
      return {
        links: [
          {
            name: 'Проекты',
            href: 'projects'
          },
          {
            name: 'Вакансии',
            href: 'vacancies'
          },
          {
            name: 'Список резюме',
            href: 'resume'
          }
        ],
        menuOpen: false
      }
    }
  }
</script>

<style lang="scss">
  .admin-menu {
    display: flex;
    flex-direction: column;
    &-wrap {
      z-index: 101;
      min-width: 255px;
      max-width: 255px;
      background-color: #fff;
      transition: all 0.3s ease;
      @media (max-width: 575px) {
        position: fixed;
        top: 80px;
        left: -255px;
      }
    }
    &--open {
      left: 0;
    }
    &__btn {
      position: fixed;
      top: 80px;
      left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0;
      color: #404852;
      font-size: 22px;
      background: #f3f3f9;
      border: none;
      border-radius: 50%;
      transition: all 0.3s ease;
      &-open {
        left: calc(100% - 50px);
      }
      @media (min-width: 576px) {
        display: none;
      }
    }
    &__item {
      display: flex;
      align-items: center;
      padding: 0.75rem 1.25rem 0.75rem 1.25rem;
      color: #000000;
      font-size: 0.875rem;
      &:hover {
        color: #56595a;
        background: #f3f3f9;
      }
      .fa {
        margin-left: auto;
        color: #404852;
      }
    }
  }
</style>