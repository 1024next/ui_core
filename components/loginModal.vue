<template>
  <div>
    <Modal>
      <template #header>
        <h1>log in</h1>
      </template>
      <template #default>
        <div>
          username<input type="text"
                 v-model="payload.username">
        </div>
        <div>
          password<input type="password"
                 v-model="payload.password">
        </div>
      </template>
      <template #footer>
        <div class="submit">
          <button @click="handleFooterAction">submit</button>
        </div>

      </template>
    </Modal>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useUserStore } from '~/store/user'
import { useRouteStore } from '~/store/route'
import { useRouter } from '#app';
const userStore = useUserStore()
const routeStore = useRouteStore()
const router = useRouter()

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  }
})
const isVisible = ref(false)
const { on, emit } = useGlobalEventBus();
const payload = reactive({
  username: "admin",
  password: "123456"
})
onMounted(() => {
  emit('show-modal');
  on('hide-modal', () => {
    emit('hide-login-modal')
    isVisible.value = false
  });
});
const handleFooterAction = () => {
  userStore.userLogin(payload).then(res=>{
    if(res){
      emit('hide-modal')
    }
  })
};
  </script>
<style lang="scss" scoped>
.submit {
  text-align: center;
}
</style>