<template>
  <teleport to="body">
    <div v-if="isVisible"
         class="modal-overlay"
         @click="close">
      <div class="modal-content"
           @click.stop>
        <header>
          <slot name="header">Default Header</slot>
        </header>
        <main>
          <slot>Default Content</slot>
        </main>
        <footer>
          <slot name="footer">Default Footer</slot>
        </footer>
        <button class="close-button"
                @click="close">Close</button>
      </div>
    </div>
  </teleport>
</template>
  
  <script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const { on, off, emit } = useGlobalEventBus();

// State
const isVisible = ref(false);

// Event Handlers
const showModal = () => {
  isVisible.value = true;
};

const hideModal = () => {
  isVisible.value = false;
};

// Lifecycle Hooks
onMounted(() => {
  on('show-modal', showModal);
  on('hide-modal', hideModal);
});

onUnmounted(() => {
  off('show-modal', showModal);
  off('hide-modal', hideModal);
});

// Methods
const close = () => {
  emit('hide-modal');
};
  </script>
  
  <style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 1em;
  border-radius: 4px;
  position: relative;
  width: 80%;
  max-width: 500px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>