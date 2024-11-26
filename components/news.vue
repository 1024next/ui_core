<template>
  <div class="news_item">
    <div class="news_header">
      <div class="news_avatar">
        <img src="@/assets/communityIcon_gk61dqqvha9b1.png"
             alt="">
      </div>
      <div>
        <span>@Convicted</span>
      </div>
    </div>
    <h3 class="news_title">
      Convicted felon and rapist Trump being extremely weird with an underage child
    </h3>

  </div>
</template>
  
  <script setup>

  </script>
  
  
  <style lang="scss" scoped>
.news_item {
  margin-bottom: 20px;
  .news_header {
    display: flex;
    .news_avatar {
      margin-right: 10px;
      img {
        width: 24px;
        border-radius: 50%;
      }
    }
  }

  .news_title {
    font-size: var(--news-item-font-size);
    font-weight: 400;
  }
}
</style>