<template>
  <div class="highlights-container">
    <div class="inner">
      <div class="left-side">
        <div class="card">
          <div class="card-img" :style="`background-image: url(${highlightOne.image});`" />
          <div class="card-img-overlay" />
          <div class="card-info">
            <div class="card-text">
              <div class="card-title">
                {{ highlightOne.title[0] }}
              </div>
              <div class="card-briefs">
                <div class="card-date">
                  {{ highlightOne.pubDate }}
                </div>
                <div class="bar" />
                <div class="article-time">
                  {{ highlightOne.read_time }} min read
                </div>
              </div>
            </div>
            <div class="card-action">
              <nuxt-link :to="`/stories/${highlightOne.id}`">
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
      </div>
      <div class="right-side">
        <div class="card">
          <div class="card-img" :style="`background-image: url(${highlightTwo.image});`" />
          <div class="card-img-overlay" />
          <div class="card-info">
            <div class="card-text">
              <div class="card-title">
                {{ highlightTwo.title[0] }}
              </div>
              <div class="card-briefs">
                <div class="card-date">
                  {{ highlightTwo.pubDate }}
                </div>
                <div class="bar" />
                <div class="article-time">
                  {{ highlightTwo.read_time }} min read
                </div>
              </div>
            </div>
            <div class="card-action">
              <nuxt-link :to="`/stories/${highlightTwo.id}`">
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
        <div class="card">
          <div class="card-img" :style="`background-image: url(${highlightThree.image});`" />
          <div class="card-img-overlay" />
          <div class="card-info">
            <div class="card-text">
              <div class="card-title">
                {{ highlightThree.title[0] }}
              </div>
              <div class="card-briefs">
                <div class="card-date">
                  {{ highlightThree.pubDate }}
                </div>
                <div class="bar" />
                <div class="article-time">
                  {{ highlightThree.read_time }} min read
                </div>
              </div>
            </div>
            <div class="card-action">
              <nuxt-link :disabled="!highlightThree.id" :to="`/stories/${highlightThree.id}`">
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
      </div>
    </div>
    <div v-if="$store.state.stories.length >= 3" class="card-action outer">
      <nuxt-link to="/stories">
        <div class="text">
          See all stories
        </div>
        <div class="material-icons">
          arrow_forward
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
  data () {
    return {
      highlightOne: this.$store.state.stories[0],
      highlightTwo: this.$store.state.stories[1] || { title: [] },
      highlightThree: this.$store.state.stories[2] || { title: [] }
    }
  },
  head: {
    title: "Favour Felix's Stories - The Highlights",
    meta: [
      { hid: 'description', name: 'description', content: 'One story explaining a detailed experience, exciting topics across faith, career, hobbies and many more. Sometimes stepping into the mind of others could be very helpful in reshaping your perspective.' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Favour Felix\'s Stories - The Highlights'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'One story explaining a detailed experience, exciting topics across faith, career, hobbies and many more. Sometimes stepping into the mind of others could be very helpful in reshaping your perspective.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://firebasestorage.googleapis.com/v0/b/favour-portfolio.appspot.com/o/favour-felix.jpg?alt=media&token=903343a2-0823-4383-9b9f-3ad1cad45180'
      }
    ]
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.highlights-container {
  height: 100%;
}
.highlights-container > .card-action > a {
  margin-top: 6px;
  display: flex;
  width: 300px;
  height: 45px;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: 2px solid;
  font-size: 18px;
  background: #DE8500;
  color: #000000;
}
.highlights-container .inner {
  display: flex;
  justify-content: space-between;
  height: 600px;
}
.card {
  border: 6px solid;
  position: relative;
}
.card-info {
  padding: 16px;
}
.left-side .card-info {
  padding: 32px;
  display: flex;
  justify-content: space-between;
}
.card-title {
  font-size: 18px;
  font-weight: 500;
}
.left-side a {
  display: flex;
  width: 170px;
  height: 45px;
  justify-content: space-around;
  align-items: center;
  outline: none;
  border: none;
  font-size: 18px;
  background: #000;
  color: #DE8500;
  padding: 0 24px;
}
.right-side a {
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

.left-side {
  flex-basis: 63%;
  margin-top: 0;
}
.left-side .card {
  /* height: 100%; */
}
.right-side .card {
  height: 46%;
}
.right-side {
  flex-basis: 33%;
}
.left-side .card-img {
  background: url('~assets/bitmaps/spotify.png') no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 440px;
}
.left-side .card-img-overlay {
  position: absolute;
  background: #de850021;
  background-size: cover;
  width: 100%;
  top: 0;
  height: 440px;
}
.right-side .card:nth-child(1) {
  margin-bottom: 60px;
}
.right-side .card-img {
  background: url('~assets/bitmaps/spotify.png') no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 160px;
}
.right-side .card-img-overlay {
  position: absolute;
  background: #de850021;
  background-size: cover;
  width: 100%;
  top: 0;
  height: 160px;
}
.card-action a .text {
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
}

@media screen and (max-width: 1400px) {
  .left-side .card-img, .left-side .card .card-img-overlay {
    height: 350px;
  }
  .right-side .card-img, .right-side .card .card-img-overlay {
    height: 130px;
  }
  .right-side .card {
    height: 38%;
  }
  .right-side a {
    margin-top: 16px;
  }
  .card-action.outer {
    margin-top: -90px;
  }
}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 800px) {

}

@media screen and (max-width: 600px) {
  .highlights-container > .inner {
    flex-direction: column;
    height: auto;
  }
  .left-side .card-img, .left-side .card .card-img-overlay {
    height: 30vh;
  }
  .left-side .card-info {
    flex-direction: column;
    padding: 16px;
  }
  .left-side .card-action {
    margin-top: 32px;
  }
  .left-side .card-action a {
    width: auto;
    justify-content: space-between;
    padding: 0 5%;
  }
  .right-side {
    display: none;
  }
  .card-action.outer {
    margin-top: 0px;
    width: auto;
  }
  .highlights-container > .card-action > a {
    width: auto;
    margin-top: 8vh;
  }
}
</style>
