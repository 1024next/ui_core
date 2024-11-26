<template>
  <div class="comment_item">
    <div class="comment_header">
      <span>AutoModerator</span>
      <span>MOD</span>
      <span>4h ago</span>
      <span>Stickied comment</span>
    </div>
    <div class="comment_content">
      <p class="comment_content_text">
        onvicted felon and rapist Trump being extremely weird with an underage child!
        Convicted felon and rapist Trump being extremely weird with an underage child!
        onvicted felon and rapist Trump being extremely weird with an underage child!
        Convicted felon and rapist Trump being extremely weird with an underage child!
      </p>
      <div class="comment_content_footer">
        <div>
          <span>like</span>
          <span>{{ 100 }}</span>
          <span>hate</span>
        </div>
        <div>
          <span>Reply</span>
          <span>Award</span>
          <span>Share</span>
        </div>
      </div>
    </div>

  </div>
</template>
  
  <script setup>

defineProps({
  data: {
    type: Object
  }
})
const data = [
  {

  }
]

  </script>
  
<style lang="scss" scoped>
.comment_item {
  border-bottom: 1px solid #ccc;
  margin: 5px 20px 0 0;
  .comment_header {
    span {
      margin: 0px 5px;
    }
  }
  .comment_content {
    margin: 0 20px;
  }
  .comment_content_footer {
    display: flex;
    > div {
      display: flex;
      span {
        margin: 0 5px;
        color: blue;
      }
    }
  }
}
</style>