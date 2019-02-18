<template>
  <header class="header" :class="headerClass === undefined ? 'header-sticky bg-white header-light' : headerClass">
    <div class="container">
      <nav class="navbar navbar-expand-xl" :class="color === undefined ? 'navbar-light' : `navbar-${color}`">
        <router-link class="navbar-brand" to="/">
          Mercherry
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="burger">
            <span></span>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav align-items-center mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/job">Список вакансий</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts">Написать нам</router-link>
            </li>
          </ul>
          <ul class="navbar-nav align-items-center mr-0" v-if="auth">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle no-cursor" href="#" data-toggle="dropdown">
                <i class="fa fa-lg fa-bell-o active"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list">
                <router-link class="dropdown-item" to="/">
                  <p class="mb-0 font-weight-normal float-left">У вас 4 непрочитанных уведомлений</p>
                  <span class="badge badge-pill badge-success float-right">Показать всё</span>
                </router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="fa fa-info mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-medium">Тест 1</h6>
                    <p class="font-weight-light small-text mb-0">
                      2 месяца  назад
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="fa fa-info mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-medium">Тест 2</h6>
                    <p class="font-weight-light small-text mb-0">
                      2 месяца  назад
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="fa fa-info mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-medium">Тест 3</h6>
                    <p class="font-weight-light small-text mb-0">
                      2 месяца  назад
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/chat">
                <i class="fa fa-lg fa-envelope-o"></i>
              </router-link>
            </li>
            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">{{dataUser.username}}</a>
              <div class="dropdown-menu">
                <router-link class="dropdown-item" to="/profile">Профиль</router-link>
                <router-link class="dropdown-item" @click.native="logOut()" to="/login">Выход</router-link>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav align-items-center mr-0" v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Вход / Регистрация</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    name: "Header",
    props: [
      'color',
      'headerClass'
    ],
    computed: {
      ...mapGetters({
        dataUser: 'profile/dataUser',
        auth: 'profile/auth'
      })
    },
    methods: {
      ...mapMutations({
        AUTH: 'profile/AUTH'
      }),
      async logOut() {
        localStorage.clear();
        await this.AUTH(false);
      }
    },
  }
</script>

<style lang="scss">
  .header {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    z-index: 100;
    border-bottom: 1px solid transparent;
    @media (max-width: 1199.98px) {
      border-radius: 0.25rem;
      margin: 15px;
      width: calc(100% - 30px);
      background: #fff;
    }
    @media (min-width: 1200px) {
      &[class*="-dark"] {
        border-color: rgba(0, 0, 0, 0.1);
      }
      &[class*="-dark"] .navbar-logo-light {
        display: block !important;
      }
      &[class*="-light"] {
        border-color: #e5e5e5;
      }
      &[class*="-light"] .navbar-logo-dark {
        display: block !important;
      }
      &-sticky {
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
        -webkit-transition-delay: 0s;
        -moz-transition-delay: 0s;
        transition-delay: 0s;
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        transform: translate(0, 0);
        position: relative;
        top: 0;
        right: 0;
        bottom: auto;
        left: 0;
        &[class*="-unpinned"] {
          -webkit-transform: translate(0, -105%);
          -moz-transform: translate(0, -105%);
          transform: translate(0, -105%);
        }
        &.fixed-top {
          position: fixed;;
        }
      }
    }
    .dropdown-menu {
      left: unset;
      right: 0;
    }
  }
  .burger {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
    z-index: 100;
  }
  .burger span {
    position: relative;
    margin-top: 6px;
    margin-bottom: 6px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -10px;
    margin-top: -1.5px;
  }
  .burger span, .burger span::before, .burger span::after {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #000;
    outline: 1px solid transparent;
    -webkit-transition-property: background-color;
    -moz-transition-property: background-color;
    -o-transition-property: background-color;
    transition-property: background-color;
    transition-property: background-color, transform;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .burger span::before, .burger span::after {
    position: absolute;
    content: "";
  }
  .burger span::before {
    top: -6px;
  }
  .burger span::after {
    top: 6px;
  }
  .burger.clicked span {
    background-color: transparent;
  }
  .burger.clicked span::before {
    -webkit-transform: translateY(6px) rotate(45deg);
    -moz-transform: translateY(6px) rotate(45deg);
    -ms-transform: translateY(6px) rotate(45deg);
    -o-transform: translateY(6px) rotate(45deg);
    transform: translateY(6px) rotate(45deg);
    transform: translateY(6px) rotate(45deg);
  }
  .burger.clicked span::after {
    -webkit-transform: translateY(-6px) rotate(-45deg);
    -moz-transform: translateY(-6px) rotate(-45deg);
    -ms-transform: translateY(-6px) rotate(-45deg);
    -o-transform: translateY(-6px) rotate(-45deg);
    transform: translateY(-6px) rotate(-45deg);
    transform: translateY(-6px) rotate(-45deg);
  }
  .burger.clicked span:before, .burger.clicked span:after {
    background-color: #000;
  }
  .burger.burger-dot {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    background: #fff;
    border-radius: 50%;
  }
  .burger:hover {
    cursor: pointer;
  }
  @media (min-width: 1200px) {
    .header-dark[class*="-not-top"][class*="-pinned"],
    .header-light[class*="-not-top"][class*="-pinned"] {
      -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
      padding: 0;
      background: #fff;
    }
    .header-dark[class*="-not-top"][class*="-pinned"] .navbar-logo,
    .header-light[class*="-not-top"][class*="-pinned"] .navbar-logo {
      display: none !important;
    }
    .header-dark[class*="-not-top"][class*="-pinned"] .navbar-logo.navbar-logo-dark,
    .header-light[class*="-not-top"][class*="-pinned"] .navbar-logo.navbar-logo-dark {
      display: block !important;
    }
    .header-dark[class*="-not-top"][class*="-pinned"]::before,
    .header-light[class*="-not-top"][class*="-pinned"]::before {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      transform: translate(0, 0);
      opacity: 1;
    }
    .header-dark[class*="-not-top"][class*="-pinned"] .navbar-nav .nav-item .nav-link,
    .header-light[class*="-not-top"][class*="-pinned"] .navbar-nav .nav-item .nav-link {
      color: #888;
    }
    .header-dark[class*="-not-top"][class*="-pinned"] .navbar-brand,
    .header-light[class*="-not-top"][class*="-pinned"] .navbar-brand {
      color: #000;
    }
    .header[class*="-light"] {
      border-color: #e5e5e5;
    }
  }
  .navbar {
    padding-left: 0;
    padding-right: 0;
    &-brand {
      height: 46px;
      margin-top: .5rem;
      margin-bottom: .5rem;
      margin-right: 3rem;
      padding: 0;
      font-size: 1.9rem;
      vertical-align: middle;
      text-transform: uppercase;
      font-weight: 600;
      @media (max-width: 575px) {
        margin-right: 1rem;
        font-size: 1.8rem;
      }
    }
    &-brand.navbar-brand-sm {
      height: 36px;
    }
    &-brand.navbar-brand-lg {
      height: 56px;
    }
    &-brand .navbar-logo {
      width: auto;
      max-height: 100%;
      display: none;
    }
    &-nav .nav-item + .nav-item {
      margin-left: 1rem;
      @media (max-width: 1199.98px) {
        margin: 0;
      }
    }
    &-nav .nav-link {
      -webkit-transition: all 0.2s;
      -moz-transition: all 0.2s;
      transition: all 0.2s;
      -webkit-transition-delay: 0s;
      -moz-transition-delay: 0s;
      transition-delay: 0s;
      font-size: 0.875rem;
    }
    &-toggler {
      padding: 0 !important;
      border: 0;
    }
  }
  @media (max-width: 1199.98px) {
    .navbar {
      &-logo-dark {
        display: block !important;
      }
      &-dark .navbar-brand {
        color: #000;
      }
      .navbar-toggler {
        padding: .5rem;
        color: rgba(0, 0, 0, 0.5);
        border-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
      }
      .nav-item .nav-link {
        padding: 5px 0;
        color: #151515;
      }
      .nav-item .nav-link:focus, .navbar .nav-item .nav-link:hover {
        color: #000;
      }
      .nav-item.show .nav-link, .navbar .nav-item.active .nav-link {
        color: #000;
      }
      .banner {
        display: none;
      }
      &-nav .nav-item {
        width: 100%;
        padding: .5rem 0;
      }
      &-nav .nav-item .btn {
        display: block;
        background-color: #4829b2;
        color: #fff;
      }
    }
  }
  .navbar-dark .navbar-nav .nav-link {
    color: #fff;
  }
</style>