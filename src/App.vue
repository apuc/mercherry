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

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,700");
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,500,700");
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&subset=cyrillic,cyrillic-ext');
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

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex-grow: 1;
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
  button {
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  strong, b {
    color: #000;
    font-weight: 700;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
  .pointer-none {
    pointer-events: none;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 576px) {
    textarea {
      min-height: 150px;
    }
  }
  .radio,
  .checkbox {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      &:checked {
        &+ .radio__circle,
        &+ .checkbox__circle {
          &:after {
            opacity: 1;
          }
        }
        &+span + span {
          color: #232323;
        }
      }
    }
    &__circle {
      position: relative;
      display: inline-block;
      min-width: 16px;
      min-height: 16px;
      max-width: 16px;
      max-height: 16px;
      margin-right: 5px;
      border: 1px solid #d4d7da;
      border-radius: 50%;
      &:after {
        position: absolute;
        opacity: 0;
        transition: all 0.3s ease;
      }
    }
  }
  .radio {
    &__circle {
      &:after {
        top: 3px;
        left: 3px;
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #646464;
      }
    }
  }
  .checkbox {
    &__circle {
      &:after {
        top: 0;
        left: 1px;
        content: "\f00c";
        font-family: FontAwesome;
        color: #54af5d;
        font-size: 11px;
      }
    }
  }
  @-moz-document url-prefix() {
    .checkbox {
      &__circle {
        &:after {
          top: -2px;
        }
      }
    }
  }
  .mr-13px {
    margin-right: 13px;
  }
  .mr-16px {
    margin-right: 16px;
  }
  .first-letter-up {
    &:first-letter {
      text-transform: uppercase;
    }
  }
</style>