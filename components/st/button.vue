<template>
    <button @click="buttonHandler" class="st-button">
        <slot></slot>
    </button>
  </template>
  
  <script setup>
 defineProps({
    text:{
        type:String
    }
 })
 const buttonHandler = ()=>{

 }
  </script>
  
  
  <style lang="scss">
  .st-button{
    cursor: pointer;
    outline: none;
    padding: 4px 6px;
    border-radius: 8px;
    margin: 5px;
  }
  </style>