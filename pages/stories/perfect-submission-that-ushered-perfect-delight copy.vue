<template>
  <div v-if="story" class="story-ctn section">
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
      <!-- <div class="hero-img" :style="`background-image: url(${story.image});`" /> -->
      <p class="content" v-html="story['content:encoded'][0]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStory',
  data () {
    return {
      story: {
        title: [
          'Perfect Submission that ushered Perfect Delight'
        ],
        link: [
          'https://medium.com/@felixfavour0/perfect-submission-that-ushered-perfect-delight-8bf490c51ecd?source=rss-fbcb62752cc6------2'
        ],
        guid: [
          {
            _: 'https://medium.com/p/8bf490c51ecd',
            $: {
              isPermaLink: 'false'
            }
          }
        ],
        category: [
          'christian-living',
          'faith'
        ],
        'dc:creator': [
          'Favour Felix'
        ],
        pubDate: 'Fri, 26 Aug 2022 06:10',
        'atom:updated': [
          '2022-08-26T06:44:29.825Z'
        ],
        'content:encoded': [
          '<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*CFjHfqu8l4YHQWfudcb8gA.jpeg" /></figure><p>It can be awfully annoying to have numerous questions with little or no answers, especially when it seems like the answers to all of these questions are the roadblock to a path you are coerced to follow. A scientific outlook on life seems reasonable enough, as it gives answers with empirical evidence.</p><p>From my lens, I have had to believe many things, with miracles as empirical evidence in this case — close friends, families and sometimes me were the usual recipients of these miracles. This evidence is usually enough until I face a personal challenge and my requests don’t tally with results. Hence, more questions come in, my faith is challenged, and I take a step back to evaluate life’s choices from the past to the present; this kept happening like a cycle until I found a lasting solution — Perfect Submission.</p><p>I was inspired to write this piece a few days ago; I came across a note I had made in my Bible some years back. It read, “If I am wise, I should give thought to my faith in God”. I cannot be 100% certain of what I was thinking about, but if I am sure of anything, it’s that my faith was challenged at the time. I knew I was not one to believe anything hook, line and sinker; I had to test all truths and the best way to start this was by studying an old book of history, the Bible.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*yqmCzhdWdvBjLwshMh9R3A.jpeg" /><figcaption>Random books from my collection.</figcaption></figure><p>Thankfully, I had been introduced to the Bible as a kid, so reading it was not foreign to me. However, I had to take a different approach while reading the Bible this time; I studied it to make sense of it and find the truth; starting from the New Testament, I made references to the Old Testament, some supplementary books and, of course, the internet. It was then it all started to make sense. I gradually learned about the trinity, how important the Holy Spirit was to every Christian and their journey, and how blessed I was to have the gift of salvation. I remember reading the Bible for hours and reading some history and theological publications just to satisfy my curiosity. Around that time, I knew I had to take a U-turn in “this Jesus thing” and do better. I was challenged to practise God’s word in reality — I do not think I have ever enjoyed reading the Bible so much since birth; it felt like the joy of my salvation was restored, and the best term I can give to that moment is Perfect Delight.</p><p>Since my Perfect Delight moment, what has changed? A lot — I do things with full consciousness of what the Bible teaches, and I now understand how powerful my thoughts and words can be. I have also faced more challenges, but this time around, they were rather easy to overcome because I had built a solid foundation, not just on my parents’ teachings or the church’s teachings but my conviction.</p><p>Overall, I am happy I took the bold step to test my faith; the quality of my life has dramatically improved!</p><p>If you read this far, thank you!</p><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=8bf490c51ecd" width="1" height="1" alt="">'
        ],
        content: 'It can be awfully annoying to have numerous questions with little or no answers, especially when it seems like the answers to all of these questions are the roadblock to a path you are coerced to follow. A scientific outlook on life seems reasonable enough, as it gives answers with empirical evidence.From my lens, I have had to believe many things, with miracles as empirical evidence in this case — close friends, families and sometimes me were the usual recipients of these miracles. This evidence is usually enough until I face a personal challenge and my requests don’t tally with results. Hence, more questions come in, my faith is challenged, and I take a step back to evaluate life’s choices from the past to the present; this kept happening like a cycle until I found a lasting solution — Perfect Submission.I was inspired to write this piece a few days ago; I came across a note I had made in my Bible some years back. It read, “If I am wise, I should give thought to my faith in God”. I cannot be 100% certain of what I was thinking about, but if I am sure of anything, it’s that my faith was challenged at the time. I knew I was not one to believe anything hook, line and sinker; I had to test all truths and the best way to start this was by studying an old book of history, the Bible.Random books from my collection.Thankfully, I had been introduced to the Bible as a kid, so reading it was not foreign to me. However, I had to take a different approach while reading the Bible this time; I studied it to make sense of it and find the truth; starting from the New Testament, I made references to the Old Testament, some supplementary books and, of course, the internet. It was then it all started to make sense. I gradually learned about the trinity, how important the Holy Spirit was to every Christian and their journey, and how blessed I was to have the gift of salvation. I remember reading the Bible for hours and reading some history and theological publications just to satisfy my curiosity. Around that time, I knew I had to take a U-turn in “this Jesus thing” and do better. I was challenged to practise God’s word in reality — I do not think I have ever enjoyed reading the Bible so much since birth; it felt like the joy of my salvation was restored, and the best term I can give to that moment is Perfect Delight.Since my Perfect Delight moment, what has changed? A lot — I do things with full consciousness of what the Bible teaches, and I now understand how powerful my thoughts and words can be. I have also faced more challenges, but this time around, they were rather easy to overcome because I had built a solid foundation, not just on my parents’ teachings or the church’s teachings but my conviction.Overall, I am happy I took the bold step to test my faith; the quality of my life has dramatically improved!If you read this far, thank you!',
        image: 'https://cdn-images-1.medium.com/max/1024/1*CFjHfqu8l4YHQWfudcb8gA.jpeg',
        id: 'perfect-submission-that-ushered-perfect-delight',
        read_time: 3
      }
    }
  },
  head () {
    return {
      title: this.story ? `${this.story.title[0]} | Story by Favour Felix` : 'Story bt Favour Felix',
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
  width: 55%;
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
