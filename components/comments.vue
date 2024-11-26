<template>
  <div class="comments">
    <commentItem v-for="item,index in data"
                 :key="index" />

  </div>
</template>

<script setup>

const data = [1, 2, 3, 4, 5, 6]

</script>

<style lang="scss" scoped>
.comments {
  padding: 20px 0;
}
</style>