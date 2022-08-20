<template>
  <div class="story-ctn section">
    <div class="inner">
      <div class="header">
        <h2>
          {{ story.title[0] }}
        </h2>
        <div class="pub-date">
          published on <b>{{ story.pubDate }}</b> <span class="separator">-</span> {{ story.read_time }} min read
        </div>
        <div class="tags">
          <nuxt-link v-for="(tag, index) in story.category" :key="tag" to="#" class="primary-btn">
            {{ index }} - {{ tag }}
          </nuxt-link>
        </div>
      </div>
      <div class="hero-img" :style="`background-image: url(${story.image});`" />
      <p class="content" v-html="story['content:encoded'][0]" />
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
  head () {
    return {
      title: 'GitHub Pages: Hosting your code on GitHub | Story by Favour Felix',
      meta: [
        {
          hid: 'story-page',
          name: 'description',
          content: `${this.story.content.split(0, 50)}`
        },
        {
          hid: 'og:type-story',
          name: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:type-story-author',
          name: 'article:author',
          content: 'Favour Felix'
        },
        {
          hid: 'og:type-story-tag',
          name: 'article:tag',
          content: `${this.story.category.toString()}`
        },
        {
          hid: 'og:title-story',
          name: 'og:title',
          content: `${this.story.title[0]} | Story by Favour Felix`
        },
        {
          hid: 'og:description-story',
          name: 'og:description',
          content: `${this.story.content.split(0, 50)}`
        },
        {
          hid: 'og:image-story',
          name: 'og:image',
          content: `${this.story.image}`
        }
      ]
    }
  },
  created () {
    this.story = this.$store.state.stories.find(story => story.id === this.$route.params.story_id)
  }
}
</script>

<style scoped>
h1, h2, h3, h4 {
  font-weight: 900;
}
.separator {
  margin: 0 8px;
}
.tags {
  display: flex;
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
  white-space: nowrap;
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
  min-height: 300px;
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  font-size: 1rem;
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
    padding-top: 5%;
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
  .separator {
    display: block;
    max-height: 0px;
    margin: 4px 0;
  }
}
</style>
