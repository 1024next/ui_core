<template>
  <header>
    <ul>
      <li>
        <h1>logo</h1>
      </li>
      <li><input type="text"
               placeholder="搜索你感兴趣的"></li>
      <li>
        <span @click="openLoginModal"
              v-if="!userStore.userInfo.isLogin">Log in</span>
        <span v-else
              @click="loginOut">{{ userStore.userInfo.username }}</span>
      </li>
    </ul>
    <Modal>
      <template #header>
        <h1>log out</h1>
      </template>
      <template #default>
        <div></div>
      </template>
      <template #footer>
        <div class="loginOut">
          <button @click="handleFooterAction">yes</button>
        </div>

      </template>
    </Modal>
  </header>

</template>

<script setup>
import { ref } from 'vue'
const { on, emit } = useGlobalEventBus();
const showModal = ref(false)
import { useUserStore } from '~/store/user'
const userStore = useUserStore()
const openLoginModal = () => {
  emit('show-login-modal')
}
const loginOut = () => {
  emit('show-modal');
}
const handleFooterAction = () => {
  userStore.logOut()
  emit('hide-modal');
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--background-color);
  z-index: 100;
  > ul {
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: var(--header-height);
    border-bottom: 1px solid #ccc;
    padding: 0 40px;
    list-style: none;
    li {
      margin: 0 10px;
      line-height: var(--header-height);
      input {
        height: 35px;
        width: 300px;
        border-radius: 35px;
        border: 1px solid #ccc;
        padding: 0 15px;
      }
    }
  }
}
@media ((max-width:768px)) {
  header{
    >ul{
      padding: 0 10px;
      li{
        input{
          width: auto;
        }
        h1{
          font-size: 18px;
        }
      }
    }
  }
  
}
</style>