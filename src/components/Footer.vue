<template>
  <footer class="footer" :class="footerClass">
    <div v-if="layout === undefined" class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2>Подпишись на вакансии</h2>
          <form class="form form-cta mt-3">
            <div class="form-group">
              <div class="row gutter-1">
                <div class="col-sm-8">
                  <input type="email" class="form-control form-control-rounded px-4" id="exampleInputEmail1" placeholder="Укажите email">
                </div>
                <div class="col-sm-4">
                  <button type="submit" class="btn btn-outline-light btn-rounded btn-block">Подписаться</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="separator-top">
      <div class="container py-5">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-10 text-center text-md-left">
            <ul class="nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/contacts">Контакты</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/offer">Пользовательское соглашение</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/policy">Политика обработки персональных данных</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-2 d-flex">
            <a class="logo-skolkovo" href="http://school.skolkovo.ru/ru/" target="_blank">
              <img src="/img/skolkovo.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    props: [
      'layout'
    ],
    computed: {
      footerClass() {
        switch(this.layout) {
          case 'job':
            return '';
          case 'profile':
            return 'bg-profile';
          default:
            return 'bg-dark text-white';
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  footer > [class*="container"] {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }
  footer .nav {
    display: inline;
  }
  footer .nav li {
    display: inline-block;
  }
  .logo-skolkovo {
    margin-left: auto;
    width: 74px;
    @media (max-width: 768px) {
      margin-right: auto;
    }
  }
</style>