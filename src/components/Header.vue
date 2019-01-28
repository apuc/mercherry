<template>
  <header class="header-sticky header-light bg-white header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          Mercherry
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="burger">
            <span></span>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav align-items-center mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/job/default/index">Список вакансий</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Написать нам</a>
            </li>
          </ul>
          <ul class="navbar-nav align-items-center mr-0">
            <li class="nav-item">
              <a class="nav-link" href="/login">Вход / Регистрация</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
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
    @media (max-width: 1200px) {
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
</style>