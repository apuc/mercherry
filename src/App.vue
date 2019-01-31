<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'main') + '-layout'
      },
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Rubik:300,400,700");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,500,700");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&subset=cyrillic,cyrillic-ext');
  @import '../public/custom-bootstrap.css';
  @import '../public/libs/font-awesome-4.7.0/css/font-awesome.css';

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: "Rubik", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #151515;
    text-align: left;
  }

  section {
    padding: 6.25rem 0;
  }

  img {
    max-width: 100%;
  }

  body [class*="container"] .row:not(:last-child) {
    margin-bottom: 3.125rem;
  }

  p {
    line-height: 1.75em;
    color: #646464;
  }

  a:hover {
    text-decoration: none;
  }
  [class*="separator"][class*="-top"] {
    border-top-width: 1px;
  }
  [class*="separator"] {
    border-width: 0;
    border-color: #e5e5e5;
    border-style: solid;
  }
  .text-white [class*="separator"], .text-white[class*="separator"] {
    border-color: rgba(255, 255, 255, 0.1);
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 576px) {
    textarea {
      min-height: 150px;
    }
  }
</style>