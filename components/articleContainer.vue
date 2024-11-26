<template>
  <div class="content_container">
    <articleItem v-for="item in data"
                 :key="item"
                 :data="item" />
  </div>
</template>
  
<script setup>

const data = [
  {
    title: "to get even close cause now the people that werent",
    avatar: "@/assets/communityIcon_gk61dqqvha9b1.png",
    name: "@666",
    time: "2024/07/19 17:10 10.2万",
    coverImg: "@/assets/jinse_1721383783088940804_small.jpg",
    id: '123123123'
  },
  {
    title: "to get even close cause now the people that werent",
    avatar: "@/assets/communityIcon_gk61dqqvha9b1.png",
    name: "@666",
    time: "2024/07/19 17:10 10.2万",
    coverImg: "@/assets/jinse_1721383783088940804_small.jpg",
    id: '1231231232'
  },
  {
    title: "to get even close cause now the people that werent",
    avatar: "@/assets/communityIcon_gk61dqqvha9b1.png",
    name: "@666",
    time: "2024/07/19 17:10 10.2万",
    coverImg: "@/assets/jinse_1721383783088940804_small.jpg",
    id: '1231231233'
  }
]


</script>
  
  
  <style lang="scss" scoped>
</style>