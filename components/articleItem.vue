<template>
  <article class="article_item">
    <div class="article_header">
      <div class="article_avatar">
        <img src="@/assets/communityIcon_gk61dqqvha9b1.png"
             alt="">
      </div>
      <div>
        <span>{{ data.name }}</span>
        <span class="fs12 ">{{ data.time }}</span>
      </div>
    </div>
    <h1 class="article_title">
      <NuxtLink :to="'article/' + data.id">{{ data.title }}</NuxtLink>
    </h1>
    <div class="article_content">
      Joe Biden was not going to win against trump, not a chance.
      He was not going to get even close cause now the people that werent going to vote democrat,
      because it was joe biden, and not vote republican are now going to vote again;
      now the numbers will be more matched again. Trump still very much has a chance but its no longer a guarantee
    </div>
    <div class="coverImg">
      <img src="@/assets/jinse_1721383783088940804_small.jpg"
           alt="">
    </div>

  </article>
</template>
  
<script setup>
defineProps({
  data: {
    type: Object
  }
})

</script>
  
  
 <style lang="scss" scoped>
.article_item {
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  position: relative;
  .article_header {
    display: flex;
    background-color: #fff;
    .article_avatar {
      margin-right: 10px;
      img {
        width: 24px;
        border-radius: 50%;
      }
    }
  }
  .article_title {
    font-size: var(--article-item-font-size);
    background-color: #fff;
  }
  .article_content {
    background-color: #fff;
  }
  .coverImg {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 10px 0;
    background-color: #ccc;
    border-radius: 20px;

    img {
      object-fit: contain;
      max-width: 100%;
    }
  }
}
</style>