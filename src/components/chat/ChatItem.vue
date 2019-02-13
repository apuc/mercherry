<template>
  <div class="chat__item">
    <router-link class="chat__link" :to="`/chat/${data.id}`"></router-link>
    <div class="chat__avatar">
      <img :src="data.avatar" alt="">
    </div>
    <div class="chat__item-main">
      <span class="chat__name">
        {{data.name}}
      </span>
      <span class="chat__text c-dark-gray">
        {{data.text}}
      </span>
    </div>
    <div class="chat__item-ad">
      <span class="chat__time">
        {{data.time}}
      </span>
      <span v-if="data.newMessages > 0" class="chat__new-messages">
        {{data.newMessages}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChatItem",
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .chat {
    &__link {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    &__item {
      position: relative;
      display: flex;
      padding: 15px 20px;
      white-space: nowrap;
      border-bottom: 1px solid #e5e5e5;
      @media (max-width: 575px) {
        padding: 15px;
      }
      &:hover {
        background-color: #f7f7f7;
      }
      &:last-of-type {
        border-bottom: none;
      }
      &-main {
        display: flex;
        flex-direction: column;
        width: calc(100% - 150px);
      }
      &-ad {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-left: auto;
        text-align: right;
      }
    }
    &__avatar {
      min-width: 50px;
      max-width: 50px;
      height: 50px;
      margin-right: 15px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__text {
      width: 60%;
      margin-top: 3px;
      font-size: 14px;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      overflow: hidden;
      @media (max-width: 575px) {
        width: 100%;
      }
    }
    &__name {
      font-weight: 700;
    }
    &__time {
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
    }
    &__new-messages {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 20px;
      margin-top: 5px;
      padding: 0 5px;
      height: 20px;
      color: #fff;
      font-size: 12px;
      background-color: #fc2c38;
      border-radius: 50%;
    }
  }
</style>