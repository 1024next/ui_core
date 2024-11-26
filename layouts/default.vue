<template>
  <NuxtPwaManifest/>
  <div>
    <Header />
    <main>
      <div class="main_container">
        <SideBar  class="sideBar"/>
        <div class="content_container">
          <KeepAlive>
            <NuxtPage />
          </KeepAlive>
        </div>
        <rightSidebar class="rightSidebar"/>
      </div>
    </main>
    <loginModal v-if="showModal" />
  </div>
</template>
  
<script setup>
import { onMounted } from 'vue';
import Header from './components/header.vue'
import SideBar from '~/layouts/components/sideBar.vue'
import { useUserStore } from '~/store/user'
const userStore = useUserStore()
import { ref } from 'vue'
const { on, emit } = useGlobalEventBus();
const showModal = ref(false)
const currentTheme = localStorage.getItem('theme') || 'light'
useTheme(currentTheme)
onMounted(() => {
  on('show-login-modal', () => {
    showModal.value = true
  });
  on('hide-login-modal', () => {
    showModal.value = false
  });
  console.log(useToken.getToken());
  if(useToken.getToken()){
        userStore.getUserInfo()
  }  
})


</script>
  
<style lang="scss" scoped>
main {
  height: calc(100vh - var(--header-height));
  margin-top: var(--header-height);
  .main_container {
    display: flex;
    justify-content: space-around;
    position: relative;
    max-width: 1660px;
    margin: 0 auto;
    .content_container {
      padding: 20px 0 30px 0;
      margin: 0 15px;
      min-height: 500px;
      position: relative;
      flex: 3;

    }
    .sideBar{
    flex: 1;
  }
  }

}
@media ((max-width: 1120px)) {
  .rightSidebar{
    display: none;
  }
}
@media ((max-width: 768px)) {
  .sideBar {
    // display: none;
  }
}
</style>