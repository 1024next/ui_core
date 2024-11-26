<template>
    <div class="image-uploader">
      <button @click="triggerFileInput" :disabled="uploadCount >= uploadLimit">Upload Image</button>
      <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" style="display: none;" multiple />
      <div class="image-previews">
        <div v-for="(image, index) in imageUrls" :key="index" class="image-preview">
          <img :src="image" alt="Image Preview" />
        </div>
      </div>
      <p v-if="uploadCount >= uploadLimit" class="limit-message">Upload limit reached</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const fileInput = ref(null);
  const imageUrls = ref([]);
  const uploadCount = ref(0); // 用于跟踪上传的图片数量
  const uploadLimit = 5; // 上传数量限制
  
  const triggerFileInput = () => {
    if (uploadCount.value < uploadLimit) {
      fileInput.value.click();
    }
  };
  
  const onFileChange = async (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
  
    for (const file of fileArray) {
      if (uploadCount.value >= uploadLimit) {
        break;
      }
  
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          imageUrls.value.push(reader.result);
        };
        reader.readAsDataURL(file);
  
        // 创建 FormData 对象
        const formData = new FormData();
        formData.append('file', file);
  
        try {
          // 上传图片到服务器
          const response = await axios.post('/api/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Upload successful:', response.data);
          uploadCount.value += 1; // 成功上传后增加计数
        } catch (error) {
          console.error('Upload failed:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .image-uploader {
    margin: 10px ;    
  }
  
  .image-previews {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  
  .image-preview {
    margin: 5px;
  }
  
  .image-preview img {
    max-width: 150px;
    max-height: 150px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  button:hover:enabled {
    background-color: #45a049;
  }
  
  .limit-message {
    color: red;
    margin-top: 10px;
  }
  </style>
  