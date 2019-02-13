<template>
  <section class="home-desc bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8 text-center">
          <h2>Как работает сервис?</h2>
          <div class="nav nav-switch mt-2 lavalamp">
            <HomeDescTab v-for="(item, index) in tab"
                         :item="item"
                         :active="index === 0 ? 'active show' : ''"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="tab-content">
            <div class="tab-pane" role="tabpanel" v-for="(tabItem, index) in tab"
                                                  :id="tabItem.href"
                                                  :class="index === 0 ? 'active show' : ''"
            >
              <div class="container">
                <div class="row boxed separated">
                  <HomeDescItem v-for="item in content[index]"
                                :item="item"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HomeDescTab from './HomeDescTab';
  import HomeDescItem from './HomeDescItem';

  export default {
    name: "HomeDesc",
    data() {
      return {
        tab: [
          {
            title: 'Основной заработок',
            href: 'main-income'
          },
          {
            title: 'Дополнительный',
            href: 'extra-income'
          },
          // {
          //   title: 'Разовые задания',
          //   href: 'onetime-income'
          // }
        ],
        content: [
          [
            {
              img: 'draw-2.svg',
              title: 'Выбирайте вакансии',
              desc: 'Находите подходящие вакансии и отправляйте заявку'
            },
            {
              img: 'draw-6.svg',
              title: 'Отслеживайте статус',
              desc: 'Система ежедневно оповещает вас, на какой стадии находится рассмотрение вашего отклика'
            },
            {
              last: true,
              price: '+ 500₽',
              desc: 'Если нашли работу на Mercherry.ru',
              button: 'Список ваканский'
            }
          ],
          [
            {
              img: 'draw-2.svg',
              title: 'Приглашайте друзей',
              desc: 'Получайте бонус за каждого приглашенного друга нашедшего работу на Mercherry.ru'
            },
            {
              img: 'draw-6.svg',
              title: 'Отслеживайте статус',
              desc: 'Система ежедневно оповещает вас, на какой стадии находится рассмотрение вашего отклика'
            },
            {
              last: true,
              price: '+ 1000₽',
              desc: 'Если пришедший по вашей рекомендации кандидат устроился, на работу через Mercherry.ru'
            }
          ],
          [
            {
              img: 'draw-2.svg',
              title: 'Выбирайте задания',
              desc: 'Находите подходящие задания и отправляйте заявку'
            },
            {
              img: 'draw-6.svg',
              title: 'Отслеживайте статус',
              desc: 'Система ежедневно оповещает вас, на какой стадии находится рассмотрение вашего отклика'
            },
            {
              last: true,
              price: 'от 150₽',
              desc: 'За выполненное задание',
              button: 'Список заданий'
            }
          ]
        ]
      }
    },
    components: {
      HomeDescTab,
      HomeDescItem
    }
  }
</script>

<style>
  .nav {
    display: inline-block;
    position: relative;
  }
  .nav .nav-link {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    position: relative;
    display: inline-block;
    color: #999;
    z-index: 5;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .nav-text {
    margin: -.5rem;
  }
  .nav-text .nav-link {
    margin: .5rem;
    padding: 0 0 1rem 0;
    line-height: 1em;
    font-weight: 300;
    font-size: 1.875rem;
    z-index: 5;
  }
  .nav-text .nav-link.active {
    color: #4829b2;
    border-color: #4829b2;
  }
  .nav-text .nav-link:hover {
    color: #4829b2;
  }
  .nav-tabs {
    border: 0;
  }
  .nav-item {
    border-radius: 10rem;
  }
  .nav-item.active {
    background: #e5e5e5;
  }
  .nav-tabs .nav-item {
    margin-right: 30px;
  }
  .nav-tabs .nav-link {
    border: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .nav-tabs .nav-link.active {
    background-color: transparent;
  }
  .nav-tabs.nav-vertical {
    border-width: 0 0 0 1px;
  }
  .nav-tabs.nav-vertical .lavalamp-object {
    border-width: 0 0 0 2px;
    border-bottom: 0;
  }
  .nav-tabs.nav-vertical .nav-link {
    padding: .5rem 1rem;
    margin: 0;
  }
  .nav-pills .lavalamp-object {
    display: block;
    position: absolute;
    border: 2px solid #4829b2;
    border-radius: 10rem;
  }
  .nav-pills .nav-link {
    z-index: 5;
    padding: .75rem 1.5rem;
  }
  .nav-pills .nav-link.active, .nav-pills .nav-link:hover {
    color: #444;
  }
  .nav-switch {
    display: inline-block;
    border: 1px solid #e5e5e5;
    border-radius: 10rem;
    overflow: hidden;
  }
  .nav-switch .lavalamp-object {
    display: block;
    position: absolute;
    background: #e5e5e5;
    border-radius: 10rem;
  }
  .nav-switch .nav-link {
    padding: 15px 25px;
    line-height: 15px;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    z-index: 5;
    cursor: pointer;
  }
  .nav-switch .nav-link.active, .nav-switch .nav-link:hover {
    color: #444;
  }
  .nav-docs {
    display: inline-block;
  }
  .nav-docs .lavalamp-object {
    border-radius: 0.25rem;
    display: block;
    position: absolute;
  }
  .nav-docs .nav-link {
    padding: 10px 20px;
    line-height: 20px;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    z-index: 5;
    cursor: pointer;
  }
  .nav-docs .nav-link.active, .nav-docs .nav-link:hover {
    color: #000;
  }
  .nav-vertical {
    display: inline-block;
  }
  .nav-vertical .nav-link {
    display: block;
  }
  .tab-content {
    position: relative;
  }
  .tab-content .tab-pane {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    width: 100%;
  }
  .tab-content .tab-pane:not(.active) {
    visibility: hidden;
    position: absolute;
    top: 0;
  }
  .tab-content .tab-pane.active {
    top: 0;
    position: relative;
    z-index: 90;
  }
  .text-white .nav-switch {
    border-color: rgba(255, 255, 255, 0.2);
  }
  .text-white .nav-switch .lavalamp-object {
    background: rgba(255, 255, 255, 0.2);
  }
  .nav-tabs .nav-item {
    border-radius: 0;
    border-bottom: 2px solid transparent;
  }
  .nav-tabs .nav-item:hover {
    border-bottom: 2px solid transparent;
  }
  .nav-tabs .nav-item.active {
    border-bottom: 2px solid #4829b2;
  }
</style>