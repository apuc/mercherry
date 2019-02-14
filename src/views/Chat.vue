<template>
  <main class="main">
    <section class="chat-section pt-0 pb-2 py-xl-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="chat-wrap chat" v-bar>
              <div>
                  <ChatItem v-if="messages.length > 0"
                            v-for="data in messages"
                            :data="data"
                  />
                  <div v-else class="py-5 px-3">
                    Сообщений пока нет
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
        totalPages: 0
      }
    },
    methods: {
      ...mapActions({
        CHATS: 'chat/CHATS'
      })
    },
    created() {
      this.CHATS()
        .then(
          (res) => {
            this.messages = res.body.result;
            this.totalPages = res.body.totalPages;
          }
        );
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