<template>
  <div class="card">
    <div class="card-img" />
    <div class="card-info">
      <div class="card-text">
        <div class="card-title">
          {{ story.title[0] }}
        </div>
        <div class="card-briefs">
          <div class="card-date">
            {{ story.pubDate[0] }}
          </div>
          <div class="bar" />
          <div class="article-time">
            20 mins read
          </div>
        </div>
      </div>
      <div class="card-action">
        <nuxt-link :to="`/stories/${story.id}`">
          <div class="text">
            Read Story
          </div>
          <div class="material-icons">
            arrow_forward
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    story: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.card-img {
  background: url('~assets/bitmaps/spotify.png') no-repeat;
  background-size: cover;
  width: 100%;
  height: 220px;
}
a {
  text-decoration: none;
  display: flex;
  width: auto;
  margin-top: 32px;
  height: 45px;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: none;
  font-size: 18px;
  background: #000;
  color: #DE8500;
}
.card {
  border: 2px solid;
  position: relative;
}
.card-info {
  padding: 16px;
}
.card-title {
  font-size: 18px;
  font-weight: 500;
}
.card-briefs {
  margin: 8px 0;
  display: flex;
  color: #0000007a;
}
.bar {
  margin: auto 24px;
  width: 3px;
  height: 20px;
  background: #DE8500;
  border-radius: 16px;
}
</style>
