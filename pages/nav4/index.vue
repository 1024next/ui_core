<template>
  <div>
    <button @click="openModal">Open Global Modal</button>
    <Modal>
      <template #header>
        <h1>Custom Header</h1>
      </template>
      <template #default>
        <p>This is the custom content of the modal.</p>
      </template>
      <template #footer>
        <button @click="handleFooterAction">Custom Footer Action</button>
      </template>
    </Modal>
  </div>
</template>
  
  <script setup>
import { ref } from 'vue';

const { emit } = useGlobalEventBus();

const openModal = () => {
  emit('show-modal');
};

const handleFooterAction = () => {
  alert('Footer action triggered');
};
  </script>