<template>
  <div>
    <article class="article_details">
      <div class="article_details_header">
        <div class="article_details_avatar">
          <img src="@/assets/communityIcon_gk61dqqvha9b1.png"
               alt="">
        </div>
        <div>
          <span>millenials
          </span>
          <span class="fs12 ">12 hr. ago</span>
        </div>
      </div>
      <h1 class="article_details_title fs20">
        the Democrats now have a real shot of winning against trump again
      </h1>
      <div>
        <p class="article_details_content_text"
           v-for="item in 5"
           :key="item">
          Joe Biden was not going to win against trump, not a chance.
          He was not going to get even close cause now the people that werent going to vote democrat,
          because it was joe biden, and not vote republican are now going to vote again;
          now the numbers will be more matched again. Trump still very much has a chance but its no longer a guarantee

        </p>
      </div>
    </article>
    <div class="comments">
      <comments />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.article_details {
  padding-bottom: 5px;
  padding-top: 20px;

  .article_details_header {
    display: flex;
    .article_details_avatar {
      margin-right: 10px;
      img {
        width: 24px;
        border-radius: 50%;
      }
    }
  }
}
</style>