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
  h1, .h1 {
    font-size: 3.125rem;
  }
  h2, .h2 {
    font-size: 2.5rem;
  }
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: .5em;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 300;
    line-height: 1.25;
    color: inherit;
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
  .fs-12 {
    font-size: 0.75rem !important;
    line-height: 1.4em;
  }
  .fs-14 {
    font-size: 0.875rem !important;
    line-height: 1.4em;
  }
  .fs-16 {
    font-size: 1rem !important;
    line-height: 1.4em;
  }
  .fs-18 {
    font-size: 1.125rem !important;
    line-height: 1.4em;
  }
  .fs-20 {
    font-size: 1.25rem !important;
    line-height: 1.4em;
  }
  .fs-21 {
    font-size: 1.3rem !important;
    line-height: 1.4em;
  }
  .fs-22 {
    font-size: 1.375rem !important;
    line-height: 1.4em;
  }
  .fs-24 {
    font-size: 1.5rem !important;
    line-height: 1.4em;
  }
  .fs-26 {
    font-size: 1.625rem !important;
    line-height: 1.4em;
  }
  .fs-28 {
    font-size: 1.75rem !important;
    line-height: 1.4em;
  }
  .fs-30 {
    font-size: 1.875rem !important;
    line-height: 1.4em;
  }
  .fs-32 {
    font-size: 2rem !important;
    line-height: 1.4em;
  }
  .fs-34 {
    font-size: 2.125rem !important;
    line-height: 1.4em;
  }
  .fs-36 {
    font-size: 2.25rem !important;
    line-height: 1.4em;
  }
  .fs-38 {
    font-size: 2.375rem !important;
    line-height: 1.4em;
  }
  .fs-40 {
    font-size: 2.5rem !important;
    line-height: 1.4em;
  }
  .fs-42 {
    font-size: 2.7rem !important;
    line-height: 1.4em;
  }
  .fs-50 {
    font-size: 3.125rem !important;
    line-height: 1.4em;
  }
  .fs-51 {
    font-size: 3.2rem !important;
    line-height: 1.4em;
  }
  .fs-60 {
    font-size: 3.75rem !important;
    line-height: 1.4em;
  }
  .fs-70 {
    font-size: 4.375rem !important;
    line-height: 1.4em;
  }
  .fs-80 {
    font-size: 5rem !important;
    line-height: 1.4em;
  }
  .fs-90 {
    font-size: 5.625rem !important;
    line-height: 1.4em;
  }
  .fs-100 {
    font-size: 6.25rem !important;
    line-height: 1.4em;
  }
  .anchor::before, .box::before, .equal::before, .feature-square::before, .tile::before, .presentation-circle::before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 100%;
  }
  .anchor > *, .box > *, .equal > *, .feature-square > *, .tile > *, .presentation-circle > * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .anchor, .box, .equal, .feature-square, .tile, .presentation-circle {
    position: relative;
  }
  .w-50 {
    width: 50% !important;
  }
  .svg-icon {
    display: inline-block;
  }
  .mt-10, .my-10 {
    margin-top: 6.25rem !important;
  }
  .fs-30 {
    font-size: 1.875rem !important;
    line-height: 1.4em;
  }
  .separated {
    overflow: hidden;
  }
  .bg-light {
    background-color: #f5f5f5 !important;
  }
  selectric-items, .container .swiper-container .swiper-slide, .container .gallery-container .swiper-slide, .container-fluid .swiper-container .swiper-slide, .container-fluid .gallery-container .swiper-slide, [class*="boxed"], .nav-docs .lavalamp-object, .accordion-group-minimal .accordion-control::after, .accordion-group-highlight .accordion.open, .accordion-group-portal, .feed-item img, .card, .card-minimal .card-img-container, .component > .tab-content > .tab-pane, .presentation-circle > figure {
    border-radius: 0.25rem;
    background-color: #fff;
    border: 1px solid #e5e5e5;
  }
  .separated > * {
    -webkit-box-shadow: -1px -1px 0px 0px #e5e5e5;
    -moz-box-shadow: -1px -1px 0px 0px #e5e5e5;
    box-shadow: -1px -1px 0px 0px #e5e5e5;
  }
  .gutter-2 > * {
    margin-bottom: 0 !important;
    padding: 10px;
  }
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.9375rem 1.875rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn-purple {
    color: #fff;
    background-color: #4829b2;
    border-color: #4829b2;
  }
  .btn-purple:hover {
    color: #fff;
    background-color: #3b2293;
    border-color: #371f89;
  }
  .btn-green {
    color: #fff;
    background-color: #54af5d;
    border-color: #54af5d;
  }
  .btn-green:hover {
    color: #fff;
    background-color: #46964e;
    border-color: #428e4a;
  }
  .btn-lg, .btn-group-lg > .btn {
    padding: 1.1rem 2.2rem;
    font-size: 1.125rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }
  [class*="rounded"] {
    border-radius: 10rem !important;
  }
  .w-25 {
    width: 25% !important;
  }
  .w-50 {
    width: 50% !important;
  }
  .w-75 {
    width: 75% !important;
  }
  .w-100 {
    width: 100% !important;
  }
  .w-auto {
    width: auto !important;
  }
  .w-5 {
    width: 5% !important;
  }
  .w-10 {
    width: 10% !important;
  }
  .w-20 {
    width: 20% !important;
  }
  .h-25 {
    height: 25% !important;
  }
  .h-50 {
    height: 50% !important;
  }
  .h-75 {
    height: 75% !important;
  }
  .h-100 {
    height: 100% !important;
  }
  .h-auto {
    height: auto !important;
  }
  .h-20 {
    height: 20% !important;
  }
  .mw-80 {
    max-width: 80% !important;
  }
  .mw-90 {
    max-width: 90% !important;
  }
  .mw-100 {
    max-width: 100% !important;
  }
  .mh-100 {
    max-height: 100% !important;
  }
  .m-0 {
    margin: 0 !important;
  }
  .mt-0,
  .my-0 {
    margin-top: 0 !important;
  }
  .mr-0,
  .mx-0 {
    margin-right: 0 !important;
  }
  .mb-0,
  .my-0 {
    margin-bottom: 0 !important;
  }
  .ml-0,
  .mx-0 {
    margin-left: 0 !important;
  }
  .m-1 {
    margin: 0.625rem !important;
  }
  .mt-1,
  .my-1 {
    margin-top: 0.625rem !important;
  }
  .mr-1,
  .mx-1 {
    margin-right: 0.625rem !important;
  }
  .mb-1,
  .my-1 {
    margin-bottom: 0.625rem !important;
  }
  .ml-1,
  .mx-1 {
    margin-left: 0.625rem !important;
  }
  .m-2 {
    margin: 1.25rem !important;
  }
  .mt-2,
  .my-2 {
    margin-top: 1.25rem !important;
  }
  .mr-2,
  .mx-2 {
    margin-right: 1.25rem !important;
  }
  .mb-2,
  .my-2 {
    margin-bottom: 1.25rem !important;
  }
  .ml-2,
  .mx-2 {
    margin-left: 1.25rem !important;
  }
  .m-3 {
    margin: 1.875rem !important;
  }
  .mt-3,
  .my-3 {
    margin-top: 1.875rem !important;
  }
  .mr-3,
  .mx-3 {
    margin-right: 1.875rem !important;
  }
  .mb-3,
  .my-3 {
    margin-bottom: 1.875rem !important;
  }
  .ml-3,
  .mx-3 {
    margin-left: 1.875rem !important;
  }
  .m-4 {
    margin: 2.5rem !important;
  }
  .mt-4,
  .my-4 {
    margin-top: 2.5rem !important;
  }
  .mr-4,
  .mx-4 {
    margin-right: 2.5rem !important;
  }
  .mb-4,
  .my-4 {
    margin-bottom: 2.5rem !important;
  }
  .ml-4,
  .mx-4 {
    margin-left: 2.5rem !important;
  }
  .m-5 {
    margin: 3.125rem !important;
  }
  .mt-5,
  .my-5 {
    margin-top: 3.125rem !important;
  }
  .mr-5,
  .mx-5 {
    margin-right: 3.125rem !important;
  }
  .mb-5,
  .my-5 {
    margin-bottom: 3.125rem !important;
  }
  .ml-5,
  .mx-5 {
    margin-left: 3.125rem !important;
  }
  .m-6 {
    margin: 3.75rem !important;
  }
  .mt-6,
  .my-6 {
    margin-top: 3.75rem !important;
  }
  .mr-6,
  .mx-6 {
    margin-right: 3.75rem !important;
  }
  .mb-6,
  .my-6 {
    margin-bottom: 3.75rem !important;
  }
  .ml-6,
  .mx-6 {
    margin-left: 3.75rem !important;
  }
  .m-7 {
    margin: 4.375rem !important;
  }
  .mt-7,
  .my-7 {
    margin-top: 4.375rem !important;
  }
  .mr-7,
  .mx-7 {
    margin-right: 4.375rem !important;
  }
  .mb-7,
  .my-7 {
    margin-bottom: 4.375rem !important;
  }
  .ml-7,
  .mx-7 {
    margin-left: 4.375rem !important;
  }
  .m-8 {
    margin: 5rem !important;
  }
  .mt-8,
  .my-8 {
    margin-top: 5rem !important;
  }
  .mr-8,
  .mx-8 {
    margin-right: 5rem !important;
  }
  .mb-8,
  .my-8 {
    margin-bottom: 5rem !important;
  }
  .ml-8,
  .mx-8 {
    margin-left: 5rem !important;
  }
  .m-9 {
    margin: 5.625rem !important;
  }
  .mt-9,
  .my-9 {
    margin-top: 5.625rem !important;
  }
  .mr-9,
  .mx-9 {
    margin-right: 5.625rem !important;
  }
  .mb-9,
  .my-9 {
    margin-bottom: 5.625rem !important;
  }
  .ml-9,
  .mx-9 {
    margin-left: 5.625rem !important;
  }
  .m-10 {
    margin: 6.25rem !important;
  }
  .mt-10,
  .my-10 {
    margin-top: 6.25rem !important;
  }
  .mr-10,
  .mx-10 {
    margin-right: 6.25rem !important;
  }
  .mb-10,
  .my-10 {
    margin-bottom: 6.25rem !important;
  }
  .ml-10,
  .mx-10 {
    margin-left: 6.25rem !important;
  }
  .p-0 {
    padding: 0 !important;
  }
  .pt-0,
  .py-0 {
    padding-top: 0 !important;
  }
  .pr-0,
  .px-0 {
    padding-right: 0 !important;
  }
  .pb-0,
  .py-0 {
    padding-bottom: 0 !important;
  }
  .pl-0,
  .px-0 {
    padding-left: 0 !important;
  }
  .p-1 {
    padding: 0.625rem !important;
  }
  .pt-1,
  .py-1 {
    padding-top: 0.625rem !important;
  }
  .pr-1,
  .px-1 {
    padding-right: 0.625rem !important;
  }
  .pb-1,
  .py-1 {
    padding-bottom: 0.625rem !important;
  }
  .pl-1,
  .px-1 {
    padding-left: 0.625rem !important;
  }
  .p-2 {
    padding: 1.25rem !important;
  }
  .pt-2,
  .py-2 {
    padding-top: 1.25rem !important;
  }
  .pr-2,
  .px-2 {
    padding-right: 1.25rem !important;
  }
  .pb-2,
  .py-2 {
    padding-bottom: 1.25rem !important;
  }
  .pl-2,
  .px-2 {
    padding-left: 1.25rem !important;
  }
  .p-3 {
    padding: 1.875rem !important;
  }
  .pt-3,
  .py-3 {
    padding-top: 1.875rem !important;
  }
  .pr-3,
  .px-3 {
    padding-right: 1.875rem !important;
  }
  .pb-3,
  .py-3 {
    padding-bottom: 1.875rem !important;
  }
  .pl-3,
  .px-3 {
    padding-left: 1.875rem !important;
  }
  .p-4 {
    padding: 2.5rem !important;
  }
  .pt-4,
  .py-4 {
    padding-top: 2.5rem !important;
  }
  .pr-4,
  .px-4 {
    padding-right: 2.5rem !important;
  }
  .pb-4,
  .py-4 {
    padding-bottom: 2.5rem !important;
  }
  .pl-4,
  .px-4 {
    padding-left: 2.5rem !important;
  }
  .p-5 {
    padding: 3.125rem !important;
  }
  .pt-5,
  .py-5 {
    padding-top: 3.125rem !important;
  }
  .pr-5,
  .px-5 {
    padding-right: 3.125rem !important;
  }
  .pb-5,
  .py-5 {
    padding-bottom: 3.125rem !important;
  }
  .pl-5,
  .px-5 {
    padding-left: 3.125rem !important;
  }
  .p-6 {
    padding: 3.75rem !important;
  }
  .pt-6,
  .py-6 {
    padding-top: 3.75rem !important;
  }
  .pr-6,
  .px-6 {
    padding-right: 3.75rem !important;
  }
  .pb-6,
  .py-6 {
    padding-bottom: 3.75rem !important;
  }
  .pl-6,
  .px-6 {
    padding-left: 3.75rem !important;
  }
  .p-7 {
    padding: 4.375rem !important;
  }
  .pt-7,
  .py-7 {
    padding-top: 4.375rem !important;
  }
  .pr-7,
  .px-7 {
    padding-right: 4.375rem !important;
  }
  .pb-7,
  .py-7 {
    padding-bottom: 4.375rem !important;
  }
  .pl-7,
  .px-7 {
    padding-left: 4.375rem !important;
  }
  .p-8 {
    padding: 5rem !important;
  }
  .pt-8,
  .py-8 {
    padding-top: 5rem !important;
  }
  .pr-8,
  .px-8 {
    padding-right: 5rem !important;
  }
  .pb-8,
  .py-8 {
    padding-bottom: 5rem !important;
  }
  .pl-8,
  .px-8 {
    padding-left: 5rem !important;
  }
  .p-9 {
    padding: 5.625rem !important;
  }
  .pt-9,
  .py-9 {
    padding-top: 5.625rem !important;
  }
  .pr-9,
  .px-9 {
    padding-right: 5.625rem !important;
  }
  .pb-9,
  .py-9 {
    padding-bottom: 5.625rem !important;
  }
  .pl-9,
  .px-9 {
    padding-left: 5.625rem !important;
  }
  .p-10 {
    padding: 6.25rem !important;
  }
  .pt-10,
  .py-10 {
    padding-top: 6.25rem !important;
  }
  .pr-10,
  .px-10 {
    padding-right: 6.25rem !important;
  }
  .pb-10,
  .py-10 {
    padding-bottom: 6.25rem !important;
  }
  .pl-10,
  .px-10 {
    padding-left: 6.25rem !important;
  }
  @media (min-width: 1600px) {
    .container {
      max-width: 1300px;
    }
    section {
      padding: 7.5rem 0;
    }
  }
</style>
