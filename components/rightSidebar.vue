<template>
  <aside>
    <div class="news">
      <div class="news_header">
        <span>news</span>
        <span>more</span>
      </div>
      <News v-for="item in 5"
            :key="item" />
    </div>
  </aside>
</template>
  
  <script setup>

  </script>
  
  
  <style scoped lang="scss">
aside {
  width: var(--sideBar-width);
  position: relative;
  .news {
    position: sticky;
    left: 20px;
    top: calc(var(--header-height) + 50px);
    width: 250px;
    background-color: #f2f2f2;
    padding: 10px 20px;
    .news_header {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>