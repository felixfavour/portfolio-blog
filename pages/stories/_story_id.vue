<template>
  <div class="story-ctn section">
    <div class="inner">
      <div class="header">
        {{ story.title[0] }}
      </div>
      <div class="hero-img">
        <img src="~assets/bitmaps/spotify.png" alt="">
      </div>
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
.section > .inner {
  padding: 50px 0;
  padding-bottom: 15%;
  width: 70%;
  margin: 0 auto;
}
.hero-img img {
  width: 100%;
  margin: 5% 0;
}
.header {
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 40px;
  color: #000000;
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
