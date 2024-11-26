<template>
    <div class="input-container">
      <input
        type="text"
        v-model="inputValue"
        :placeholder="placeholder"
        @input="handleInput"
        class="clearable-input"
      />
      <button v-if="inputValue" @click="clearInput" class="clear-button">✕</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  });
  
  const emits = defineEmits(['update:modelValue']);
  
  const inputValue = ref(props.modelValue);
  
  watch(inputValue, (newValue) => {
    emits('update:modelValue', newValue);
  });
  
  const handleInput = (event) => {
    inputValue.value = event.target.value;
  };
  
  const clearInput = () => {
    inputValue.value = '';
  };
  </script>
  
  <style scoped lang="scss">
  .input-container {
    position: relative;
    width: 100%;
    max-width: 300px;
    margin: 10px 0;
    border-radius:15px ;
    input{
        border-radius: 15px;
    }
  }
  
  .clearable-input {
    width: 100%;
    padding: 8px;
    padding-right: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
    
  .clear-button {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
  }
  </style>