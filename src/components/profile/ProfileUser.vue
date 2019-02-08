<template>
  <section class="profile-user pb-0">
    <div class="container">
      <div class="row justify-content-center align-items-end mb-5">
        <div class="col col-md-8">
          <div class="row align-items-center">
            <div class="col-10">
              <div class="d-flex align-items-center">
                <figure class="user user-circle avatar-block mr-3">
                  <a href="#" class="user-photo show-avatar">
                    <img class="avatar avatar-xl rounded" :src="dataUser.avatar" alt="">
                  </a>
                </figure>
                <div class="media-body">
                  <h2 class="mb-0">
                    <strong>{{dataUser.username}}</strong>
                  </h2>
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
  import {mapGetters} from 'vuex';

  export default {
    name: "ProfileUser",
    computed: {
      ...mapGetters({
        dataUser: 'profile/dataUser'
      })
    },
  }
</script>

<style>
  .user {
    border-radius: 0.25rem;
    position: relative;
    overflow: hidden;
  }
  .user:hover .user-caption {
    padding-top: 6rem;
    padding-bottom: 5.75rem;
  }
  .user:hover .socials {
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  .user[class*="-circle"] {
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
  }
  .user[class*="-circle"] .socials {
    left: 50%;
    -webkit-transform: translate(-50%, calc(100% + 2.5rem));
    -moz-transform: translate(-50%, calc(100% + 2.5rem));
    transform: translate(-50%, calc(100% + 2.5rem));
  }
  .user[class*="-circle"]:hover .socials {
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  .gutter-0 .user {
    border-radius: 0;
  }
  .user-photo {
    display: block;
    overflow: hidden;
    margin: 0;
  }
  .user-photo img {
    max-width: 100%;
  }
  .user-caption {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 1.875rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=0);
  }
  .user-caption > * {
    display: block;
  }
  .user-caption h4 {
    color: #fff;
    margin: 0;
  }
  .user-caption span {
    color: rgba(255, 255, 255, 0.5);
  }
  .user-caption .socials {
    -webkit-transform: translate(0, calc(100% + 2.5rem));
    -moz-transform: translate(0, calc(100% + 2.5rem));
    transform: translate(0, calc(100% + 2.5rem));
    position: absolute;
    bottom: 1.875rem;
  }
  .expanded + .user-panel {
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
    visibility: visible;
    opacity: 1;
    padding: 15rem 0 5rem 0;
  }
  .expanded + .user-panel > .container {
    opacity: 1;
    transition-delay: 0.2s;
  }
  .user-panel {
    -webkit-transform: translate(0, 100%);
    -moz-transform: translate(0, 100%);
    transform: translate(0, 100%);
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    padding: 0;
    opacity: 0;
    z-index: 100;
    visibility: hidden;
    opacity: 0;
  }
  .user-panel::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, black 100%);
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, black 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#00000000', GradientType=0);
  }
  .user-panel > .container {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    opacity: 0;
  }
  .user-panel .collapse {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    position: absolute;
    bottom: 15px;
    left: 50%;
    display: block;
    border-radius: 50%;
    text-align: center;
    width: 4.25rem;
    height: 4.25rem;
    line-height: 4.25rem;
    text-align: center;
    cursor: pointer;
    color: #000;
  }
  .user-panel .collapse::before {
    font-family: 'icomoon';
    font-size: 1.875rem;
    content: "\ecce";
    color: #fff;
  }
  .user-panel .collapse:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .avatar {
    border-radius: 0.25rem;
    width: 3.75rem;
    height: 3.75rem;
  }
  .avatar[class*="-sm"] {
    width: 2.5rem;
    height: auto;
  }
  .avatar[class*="-lg"] {
    width: 5rem;
    height: auto;
  }
  .avatar[class*="-xl"] {
    width: 10rem;
    height: auto;
  }
  .user-grid {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    list-style: none;
    padding: 0;
  }
  .user-grid::after {
    display: block;
    clear: both;
    content: "";
  }
  .user-grid > li {
    float: left;
  }
  .user-grid .user {
    overflow: visible;
  }
  .user-grid .user-photo {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    border-radius: 50%;
    cursor: pointer;
  }
  .user-grid .user-photo:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.1);
  }
  .user-grid .user-photo.expanded {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0px 10px 15px 0 rgba(0, 0, 0, 0.1);
  }
  .user-grid .user-photo img {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
    border-radius: 50%;
  }
  @media (max-width: 1199.98px) {
    .user-grid > li {
      width: 20%;
    }
    .user-grid > li:nth-child(6) {
      margin-left: calc(20% / 2);
    }
  }
  @media (min-width: 1200px) {
    .user-grid > li {
      width: 12.5%;
    }
    .user-grid > li:nth-child(9) {
      margin-left: calc(12.5% / 2);
    }
  }
  .user-list {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .user-list > li {
    position: relative;
    display: inline-block;
    width: 3.125rem;
    border-radius: 50%;
    z-index: 10;
    overflow: hidden;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    transition-delay: 0s;
  }
  .user-list > li:not(:first-child) {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    margin-left: -1rem;
  }
  .user-list > li:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    z-index: 20;
  }
</style>