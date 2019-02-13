<template>
  <div class="chat-message" :class="data.person === 1 ? 'chat-message--right' : ''">
    <div class="chat-message__main">
      {{data.text}}
    </div>
    <span class="chat-message__time c-dark-gray">
      {{data.time}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "ChatMessage",
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
    &-message {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 15px 30px 15px 0;
      &__main {
        padding: 10px 20px;
        color: #fff;
        background-color: #f20311;
        border-radius: 5px 5px 0 5px;
      }
      &__time {
        margin-top: 5px;
        font-size: 12px;
      }
      &--right {
        align-items: flex-end;
        padding: 15px 0 15px 30px;
        .chat-message__main {
          background-color: #151515;
        }
      }
    }
  }
</style>