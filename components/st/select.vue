<template>
    <div class="select-container" @click.stop="toggleDropdown" tabindex="0">
      <div class="search-input-wrapper">
        <input
          type="text"
          v-model="searchQuery"
          @input="filterOptions"
          :placeholder="selectedLabel"
          class="search-input"
        />
        <button v-if="searchQuery" @click="clearSearch" class="clear-button">✕</button>
      </div>
      <div class="dropdown" v-if="dropdownOpen">
        <ul>
          <li
            v-for="option in filteredOptions"
            :key="option.value"
            @click.stop="selectOption(option)"
            class="dropdown-item"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    selectedLabel: {
      type:String,
      default: '',
    },
  });
  
  const emits = defineEmits(['update:modelValue', 'change']);
  
  const selectedValue = ref(props.modelValue);
  const searchQuery = ref('');
  const dropdownOpen = ref(false);
  
//   const selectedLabel = computed(() => {
//     const selectedOption = props.options.find(option => option.value === selectedValue.value);
//     return selectedOption ? selectedOption.label : 'Select an option';
//   });
  
  const filteredOptions = computed(() => {
    if (!searchQuery.value) return props.options;
    return props.options.filter(option =>
      option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  watch(selectedValue, (newValue) => {
    emits('update:modelValue', newValue);
  });
  
  const selectOption = (option) => {
    selectedValue.value = option.value;
    searchQuery.value = option.label;
    dropdownOpen.value = false;
    emits('change', option.value);
  };
  
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
  };
  
  const closeDropdown = (event) => {
    if (!event.target.closest('.select-container')) {
      dropdownOpen.value = false;
    }
  };
  
  const filterOptions = () => {
    dropdownOpen.value = true; // Reopen dropdown when searching
  };
  
  const clearSearch = (event) => {
    searchQuery.value = '';
    dropdownOpen.value = true;
    event.stopPropagation();
  };
  
  onMounted(() => {
    document.addEventListener('click', closeDropdown);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('click', closeDropdown);
  });
  </script>
  
  <style scoped>
  .select-container {
    position: relative;
    width: 100%;
    max-width: 300px;
    margin: 20px 0px 5px 0px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    padding:4px 8px;
  }
  
  .search-input-wrapper {
    display: flex;
    align-items: center;
  }
  
  .search-input {
    width: 100%;
    padding: 8px;
    border: none;
    outline: none;
  }
  
  .clear-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 0 8px;
  }
  
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-top: none;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: white;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
  }
  
  .dropdown ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .dropdown-item {
    padding: 8px;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f1f1f1;
  }
  </style>
  