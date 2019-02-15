<template>
  <div class="chat-message" :class="data.owner_id === dataUser.id ? 'chat-message--right' : ''">
    <div class="chat-message__main">
      {{data.text}}
    </div>
    <span class="chat-message__time c-dark-gray">
      {{time}}
    </span>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "ChatMessage",
    data() {
      return {
        time: ''
      }
    },
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters({
        dataUser: 'profile/dataUser'
      })
    },
    methods: {
      getTime() {
        let date = new Date(this.data.created * 1000);
        let dateToday = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        this.time = `${hours}:${minutes}`;
        const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
          "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
        if (date.toLocaleDateString() !== dateToday.toLocaleDateString()) {
          this.time += ` ${date.getDate()} ${monthNames[date.getMonth()]}`;
          if (dateToday.getFullYear() !== date.getFullYear()) {
            this.time += ` ${date.getFullYear()}`
          }
        }
      }
    },
    created() {
      this.getTime();
    },
    beforeUpdate() {
      this.getTime();
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