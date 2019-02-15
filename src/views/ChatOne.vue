<template>
  <main class="main">
    <section class="chat-section pt-0 pb-2 py-xl-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="chat-wrap">
              <div class="chat-top">
                <div class="chat-top__main">
                  <div class="chat__item-main">
                    <span class="chat__name">
                      {{job}}
                    </span>
                  </div>
                </div>
                <div class="chat-detail">
                  <div class="chat-detail__btn">
                    <i class="fa fa-ellipsis-v"></i>
                  </div>
                  <div class="chat-detail__dropdown">
                    <span class="chat-detail__item">Item 1</span>
                    <span class="chat-detail__item">Item 2</span>
                  </div>
                </div>
              </div>
              <div class="chat-messages-wrap" ref="chatMessagesWrap" v-bar>
                <div @scroll="scrollMsg()" ref="scrollMsg" :style="heightMessages">
                  <div class="chat-messages" ref="chatMessages">
                    <ChatMessage v-for="dataMsg in messages"
                                 :data="dataMsg"
                                 :ref="`message`"
                                 :key="dataMsg.id"
                    />
                  </div>
                </div>
              </div>
              <form @submit.prevent="submitMessage()">
                <div class="chat-form">
                  <textarea class="form-control" v-model="message"></textarea>
                  <button class="btn btn-danger ml-2 d-none d-sm-inline-block">Отправить</button>
                  <button class="btn btn-danger ml-1 d-sm-none chat-form__btn">
                    <i class="fa fa-send"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import ChatMessage from "../components/chat/ChatMessage";
  import {mapActions} from 'vuex';

  export default {
    name: "ChatOne",
    components: {ChatMessage},
    data() {
      return {
        heightMessages: '',
        job: '',
        currentPage: 1,
        totalPages: 1,
        messages: [],
        message: '',
        loaded: false,
        countNewMessages: 0
      }
    },
    methods: {
      ...mapActions({
        CHAT: 'chat/CHAT',
        SEND_MESSAGE: 'chat/SEND_MESSAGE'
      }),
      submitMessage() {
        this.SEND_MESSAGE({
          id: parseInt(this.$route.params.id),
          text: this.message
        }).then(() => {
          this.message = '';
        });
      },
      scrollMsg:
      _.throttle(function() {
        if (this.currentPage < this.totalPages) {
          if (this.$refs.scrollMsg.scrollTop < 10) {
            this.CHAT({page: this.currentPage + 1, id: this.$route.params.id})
              .then(res => {
                this.currentPage = res.body.currentPage;
                let newMessages = [];
                for (let i = 0; i < res.body.result.length; i++) {
                  newMessages[i] = res.body.result[res.body.result.length - i - 1];
                }
                this.messages = newMessages.concat(this.messages);
                this.countNewMessages = res.body.result.length;
              })
          }
        }
      }, 500)
    },
    created() {
      this.CHAT({page: this.currentPage, id: this.$route.params.id})
        .then((res) => {
          for (let i = 0; i < res.body.result.length; i++) {
            this.messages[i] = res.body.result[res.body.result.length - i - 1];
          }
          this.currentPage = res.body.currentPage;
          this.job = res.body.job;
          this.totalPages = res.body.totalPages;
          this.loaded = true;
        });
    },
    mounted() {
      let chatHeight = getComputedStyle(this.$refs.chatMessagesWrap).height;
      this.heightMessages = 'height: ' + chatHeight;
    },
    updated() {
      if (this.loaded) {
        let chatHeight = getComputedStyle(this.$refs.chatMessagesWrap).height;
        let messagesHeight = getComputedStyle(this.$refs.chatMessages).height;
        this.$refs.scrollMsg.scrollTo(0, parseInt(messagesHeight) - parseInt(chatHeight));
        this.loaded = false;
      }
      if (this.countNewMessages > 0) {
        let newMessageHeight = 0;
        for (let i = 0; i < this.countNewMessages; i++) {
          newMessageHeight += parseInt(getComputedStyle(this.$refs.message[i].$el).height);
        }
        this.$refs.scrollMsg.scrollTo(0, newMessageHeight);
        this.countNewMessages = 0;
      }
    }
  }
</script>

<style lang="scss">
  .chat {
    &-messages {
      padding: 15px 20px;
      @media (max-width: 575px) {
        padding: 15px;
      }
      &-wrap {
        flex-grow: 1;
      }
    }
    &__status {
      font-size: 12px;
    }
    &-top {
      display: flex;
      align-items: flex-start;
      padding: 15px 20px;
      border-bottom: 1px solid #e5e5e5;
      &__main {
        width: calc(100% - 150px);
      }
      @media (max-width: 575px) {
        padding: 15px;
      }
    }
    &-detail {
      position: relative;
      width: 10px;
      margin-right: -5px;
      margin-left: auto;
      text-align: center;
      cursor: pointer;
      &:hover {
        .chat-detail__dropdown {
          display: flex;
        }
      }
      &__dropdown {
        position: absolute;
        z-index: 1;
        top: 100%;
        right: 0;
        display: none;
        flex-direction: column;
        width: 100px;
        padding: 5px 15px;
        text-align: left;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        background-color: #fff;
      }
      &__item {
        padding: 5px 0;
      }
    }
    &-form {
      display: flex;
      padding: 15px 20px;
      @media (max-width: 575px) {
        padding: 15px;
      }
      .form-control {
        resize: none;
        min-height: 50px;
        max-height: 50px;
      }
      &__btn {
        @media (max-width: 575px) {
          min-width: unset;
        }
      }
    }
  }
</style>