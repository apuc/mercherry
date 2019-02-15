<template>
  <main class="main">
    <section class="chat-section pt-0 pb-2 py-xl-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="chat-wrap chat" v-bar>
              <div @scroll="scrollMsg()" ref="scrollMsg">
                <div ref="chatMessages">
                  <ChatItem v-if="messages.length > 0"
                            v-for="data in messages"
                            :data="data"
                            :key="data.id"
                  />
                  <div v-else class="py-5 px-3">
                    Сообщений пока нет
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import ChatItem from "../components/chat/ChatItem";
  import {mapActions} from 'vuex';

  export default {
    name: "Chat",
    components: {ChatItem},
    data() {
      return {
        messages: [],
        totalPages: 1,
        currentPage: 1,
        bottomPos: 0
      }
    },
    methods: {
      ...mapActions({
        CHATS: 'chat/CHATS'
      }),
      scrollMsg:
        _.throttle(function() {
          if (this.currentPage < this.totalPages) {
            if (this.$refs.scrollMsg.scrollTop > this.bottomPos - 10) {
              this.CHATS({page: this.currentPage + 1})
                .then(res => {
                  this.currentPage = res.body.currentPage;
                  this.totalPages = res.body.totalPages;
                  this.messages = this.messages.concat(res.body.result);
                });
            }
          }
        }, 500)
    },
    created() {
      this.CHATS({page: this.currentPage})
        .then(
          (res) => {
            this.currentPage = res.body.currentPage;
            this.totalPages = res.body.totalPages;
            this.messages = res.body.result;
          }
        );
    },
    updated() {
      let chatHeight = getComputedStyle(this.$refs.scrollMsg).height;
      let messagesHeight = getComputedStyle(this.$refs.chatMessages).height;
      this.bottomPos = parseInt(messagesHeight) - parseInt(chatHeight);
    }
  }
</script>

<style lang="scss">
  .chat {
    &-wrap {
      display: flex;
      flex-direction: column;
      height: calc(100vh - 180px);
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      @media (max-width: 1199px) {
        height: calc(100vh - 130px);
      }
    }
  }
  .vb-dragger {
    right: 0;
    width: 5px;
    border-radius: 3px;
    background-color: #ccc;
  }
</style>