<template>
    <div class="news_item" :style="imgStyle">
        <img :src="url" alt="">
    </div>
  </template>
    
<script setup>
defineProps({
    url:{
        type:String;
    }
})

const imgStyle = ()=>{
    backgroundImage:url
}

</script>
    
    
<style lang="scss" scoped>
 
</style>