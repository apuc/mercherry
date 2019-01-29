<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import url("https://fonts.googleapis.com/css?family=Rubik:300,400,700");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,500,700");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&subset=cyrillic,cyrillic-ext');
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
</style>
