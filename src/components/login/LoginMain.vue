<template>
  <section class="login-wrap p-0">
    <div class="image image-overlay" style="background-image: url('/img/bg.jpg')"></div>
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-md-6 col-lg-5 pt-10 pb-5">
          <div class="accordion-group accordion-group-portal">
            <LoginAuth/>
            <LoginReg/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import LoginAuth from "./LoginAuth";
  import LoginReg from "./LoginReg";
  export default {
    name: "LoginMain",
    components: {LoginReg, LoginAuth}
  }
</script>

<style>
  .login-wrap {
    position: relative;
    overflow: hidden;
  }
  @media (max-height: 850px) {
    .login-wrap .vh-100 {
      height: auto;
    }
  }
  .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
  }
  .image[class*="-overlay"]::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background: rgba(0, 0, 0, 0.25);
  }
  .image[class*="-overlay-dark"]::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background: rgba(0, 0, 0, 0.4);
  }
  .image[class*="-gradient-vertical"] {
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(black), to(rgba(0, 0, 0, 0)));
  }
  .image[class*="-gradient-horizontal"] {
    -webkit-mask-image: -webkit-gradient(linear, right top, left top, from(black), to(rgba(0, 0, 0, 0.5)));
  }
  .image[class*="-gradient-vertical-light"] {
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(black), to(rgba(0, 0, 0, 0.5)));
  }
  .image[class*="-gradient-horizontal-light"] {
    -webkit-mask-image: -webkit-gradient(linear, right top, left top, from(black), to(rgba(0, 0, 0, 0.5)));
  }
  .image[class*="-cover"] {
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));
  }
  .image[class*="-parallax"] {
    width: 150%;
  }
  .image[class*="-blur"] {
    margin: -20px;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }
  .image-zoom {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: all 10s;
    -moz-transition: all 10s;
    transition: all 10s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
  }
  .accordion-group {
    border-radius: 0.25rem;
  }
  .accordion {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    position: relative;
    border: 1px solid #e5e5e5;
  }
  .accordion .accordion-control[aria-expanded="true"]::after {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .accordion:not(:first-child) {
    border-top-width: 0;
  }
  .accordion-control {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .accordion-control > * {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    margin: 0;
    font-size: 1rem;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    vertical-align: middle;
  }
  .accordion-control h5 {
    line-height: 1.5em;
  }
  .accordion-control::after {
    content: "\f067";
    position: absolute;
    width: 1em;
    line-height: 1em;
    right: 1rem;
    top: 50%;
    font-family: 'FontAwesome' !important;
    font-size: 1.5rem;
    margin-top: -0.5em;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
  }
  .accordion-content {
    overflow: hidden;
  }
  .accordion-content .accordion-content-wrapper {
    padding: 0 2.625rem 1rem 2.625rem;
  }
  .text-white .accordion-group .accordion {
    border: 0;
    background-color: rgba(255, 255, 255, 0.05);
  }
  .text-white .accordion-group .accordion:not(:first-child) {
    margin-top: 2px;
  }
  .text-white .accordion-group .accordion:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .text-white .accordion-group .accordion-control h5 {
    color: inherit;
  }
  .text-white .accordion-group .accordion-control::after {
    color: rgba(255, 255, 255, 0.5);
  }
  .accordion-group-feature .accordion {
    border-radius: 0.25rem;
    padding: 1rem;
  }
  .accordion-group-feature .accordion:not(:first-child) {
    margin-top: .625rem;
  }
  .accordion-group-feature .accordion:not(:first-child) {
    border-top-width: 1px;
  }
  .accordion-group-feature .accordion-control,
  .accordion-group-feature .accordion-content > div {
    padding: 1rem;
  }
  .text-white .accordion-group-feature .accordion:not(:first-child) {
    margin-top: .625rem;
  }
  .accordion-group-minimal .accordion {
    border: 0;
    padding: 0 0 0 3rem;
  }
  .accordion-group-minimal .accordion:not(:first-child) {
    margin-top: 1.25rem;
  }
  .accordion-group-minimal .accordion-control {
    min-height: 3.75rem;
  }
  .accordion-group-minimal .accordion-control::after {
    left: -3rem;
    width: 3.75rem;
    color: #000;
    margin-top: -1.875rem;
    line-height: 3.75rem;
    text-align: center;
    border-radius: 50%;
  }
  .text-white .accordion-group-minimal .accordion {
    background: transparent;
    color: #fff;
  }
  .text-white .accordion-group-minimal .accordion:not(:first-child) {
    margin-top: 1.25rem;
  }
  .text-white .accordion-group-minimal .accordion:hover {
    background-color: transparent;
  }
  .text-white .accordion-group-minimal .accordion-control::after {
    color: #000;
  }
  .accordion-group-steps {
    overflow: visible;
  }
  .accordion-group-steps .accordion {
    padding-left: 3.75rem;
    counter-increment: accordion;
    background: transparent;
    border: 0;
  }
  .accordion-group-steps .accordion.open .accordion-control::before {
    background: #4829b2;
    border-color: #4829b2;
    color: #fff;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    -webkit-transform: scale(1.4);
    -moz-transform: scale(1.4);
    transform: scale(1.4);
  }
  .accordion-group-steps .accordion:hover .accordion-control::before {
    border-color: #4829b2;
  }
  .accordion-group-steps .accordion:not(:first-child) {
    margin: 0;
  }
  .accordion-group-steps .accordion:not(:first-child)::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 29px;
    height: calc(50% - 30px);
    width: 2px;
    background: #e5e5e5;
    z-index: 10;
  }
  .accordion-group-steps .accordion:not(:last-child)::after {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% + 30px);
    left: 29px;
    height: calc(50% - 30px);
    width: 2px;
    background: #e5e5e5;
    z-index: 10;
  }
  .accordion-group-steps .accordion-control {
    position: static;
  }
  .accordion-group-steps .accordion-control > * {
    display: block;
  }
  .accordion-group-steps .accordion-control::after {
    display: none;
  }
  .accordion-group-steps .accordion-control::before {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    content: counter(accordion, decimal);
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 3.75rem;
    height: 3.75rem;
    color: #000;
    margin-top: -30px;
    line-height: calc(3.75rem - 4px);
    text-align: center;
    border: 2px solid #e5e5e5;
    z-index: 20;
    border-radius: 50%;
    font-size: 20px;
  }
  .text-white .accordion-group-steps .accordion {
    background-color: transparent;
  }
  .text-white .accordion-group-steps .accordion:hover {
    background-color: transparent;
  }
  .text-white .accordion-group-steps .accordion:not(:first-child) {
    margin-top: 0;
  }
  .text-white .accordion-group-steps .accordion:not(:first-child)::before {
    background: rgba(255, 255, 255, 0.2);
  }
  .text-white .accordion-group-steps .accordion:not(:last-child)::after {
    background: rgba(255, 255, 255, 0.2);
  }
  .text-white .accordion-group-steps .accordion-control::before {
    color: inherit;
    border-color: rgba(255, 255, 255, 0.2);
  }
  .accordion-group-highlight {
    overflow: visible;
  }
  .accordion-group-highlight .accordion {
    background: transparent;
    border: 0;
  }
  .text-white .accordion-group-highlight .accordion {
    background: transparent;
  }
  .text-white .accordion-group-highlight .accordion:not(:first-child) {
    margin-top: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
  .text-white .accordion-group-highlight .accordion.open {
    background-color: rgba(255, 255, 255, 0.05);
  }
  .accordion-group-portal {
    overflow: hidden;
  }
  .accordion-content,
  .accordion [aria-expanded="true"] {
    background: #f5f5f5;
  }
  .accordion-group-portal .accordion.open .accordion-control::after {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .accordion-group-portal .accordion-control {
    padding: 2.625rem 2.625rem;
  }
  .accordion-group-portal .accordion-control::after {
    content: "\f067";
  }
  .accordion-group-portal .accordion-control h5 {
    font-size: 1.25rem;
    font-family: "Rubik", sans-serif;
  }
  .accordion-group-portal .accordion-content > div {
    padding-bottom: 2rem;
  }
  @media (max-width: 1199.98px) {
    .accordion-control {
      display: block;
    }
    .accordion-control > *:not(:first-child) {
      margin-top: .25rem;
    }
    .accordion-group-feature .accordion-control > * {
      display: inline-block;
    }
  }
</style>