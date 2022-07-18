<template>
  <div class="story-ctn section">
    <div class="inner">
      <div class="header">
        <h2>
          {{ story.title[0] }}
        </h2>
        <div class="pub-date">published on <b>{{ story.pubDate[0].slice(0, story.pubDate[0].length - 7) }}</b></div>
        <div class="tags">
          <nuxt-link v-for="(tag, index) in story.category" :key="tag" to="#" class="primary-btn">{{ index }} - {{ tag }}</nuxt-link>
        </div>
      </div>
      <div class="hero-img" :style="`background-image: url(${story.image});`" />
      <p v-html="story['content:encoded'][0]" class="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStory',
  data () {
    return {
      story: {}
    }
  },
  created () {
    this.story = this.$store.state.stories.find(story => story.id === this.$route.params.story_id)
  }
}
</script>

<style scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: auto;
}
.primary-btn {
  margin-top: 6px;
  display: flex;
  height: 35px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: 2px solid #000000;
  font-size: 14px;
  background: #DE8500;
  color: #000000;
  border-right: 0;
  transition: 0.2s;
  text-decoration: none;
}
.primary-btn:hover {
  background: #9E5F00;
  color: #FFDEAC;
}
.primary-btn:nth-last-child(1) {
  border-right: 2px solid #000000;
}
.section > .inner {
  padding: 50px 0;
  padding-bottom: 15%;
  width: 70%;
  margin: 0 auto;
}
.hero-img {
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 5% 0;
}
.header > h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 2.3rem;
  line-height: 3.3rem;
  color: #000000;
  margin-bottom: 8px;
}
.pub-date {
  margin-bottom: 1.5rem;
}
.pub-date b {
  font-weight: 500;
}
.content {
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 204.5%;
  font-family: 'Lora', serif;
}

@media screen and (max-width: 600px) {
  .section > .inner {
    padding-top: 10%;
  }
  .header {
    font-size: 1.8rem;
  }
  .content {
    margin-top: 0;
    font-size: 1.1rem;
    line-height: 2rem;
  }
  .section > .inner {
    width: 100%;
  }
}
</style>
