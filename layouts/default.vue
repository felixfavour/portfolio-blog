<template>
  <div class="body">
    <div v-if="!isLoading" class="main">
      <QuotePurger v-if="false" />
      <Header v-if="screenWidth > 1024" class="fadedown" />
      <MobileHeader v-if="screenWidth <= 1024" class="fadedown" />
      <div class="ellipse one">
        <img src="~assets/bitmaps/ellipse1.png">
      </div>
      <div class="ellipse two">
        <img src="~assets/bitmaps/ellipse2.png">
      </div>
      <div v-show="false" class="image">
        <div class="personal-image-sill" />
        <div class="personal-image" />
      </div>
      <!-- <div class="ellipse three">
        <img src="~assets/bitmaps/ellipse1.png">
      </div>
      <div class="ellipse four">
        <img src="~assets/bitmaps/ellipse2.png">
      </div> -->
      <div class="container">
        <Nuxt />
      </div>
      <Footer class="fadein" />
    </div>
    <div v-else class="loader">
      <div :class="'logo fadein ' + (exiting ? 'zoomout' : '')" />
    </div>
  </div>
</template>

<script>
import QuotePurger from '~/components/QuotePurger.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { QuotePurger, MobileHeader, Header, Footer },
  data () {
    return {
      isLoading: true,
      exiting: false,
      screenWidth: 0
    }
  },
  created () {
    this.getStories()
  },
  mounted () {
    this.screenWidth = window.screen.availWidth
    this.onResize()
    this.loadingTimer()
  },
  methods: {
    loadingTimer () {
      window.setTimeout(() => {
        this.isLoading = false
      }, 2000)
      window.setTimeout(() => {
        this.exiting = true
      }, 1500)
    },
    onResize () {
      window.addEventListener('resize', () => {
        this.screenWidth = window.screen.availWidth
      })
    },
    async getStories () {
      const storiesPromise = await fetch('https://favour-portfolio-be.herokuapp.com/v1/stories')
      const stories = await storiesPromise.json()
      this.$store.commit('setStories', stories.data)
    }
  }
}
</script>

<style scoped>
  .body {
    /* height: 100vh; */
    /* max-height: 100vh; */
    max-width: 100vw;
  }
  .container {
    padding: 0 10vw;
    padding-top: 95px;
    min-height: var(--container-height);
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ellipse {
    display: none;
    top: 0%;
    opacity: 0.6;
    left: 0%;
    position: absolute;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
  .ellipse.one img {
    width: 300px;
    /* background: #000; */
    animation: gallavant 10s forwards infinite;
  }
  .ellipse.two img {
    width: 300px;
    animation: gallavant 10s forwards infinite;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .logo {
    height: 50px;
    width: 160px;
    justify-content: flex-start;
    background: url('~assets/bitmaps/header-logo.png') no-repeat left;
  }

  @keyframes gallavant {
    0% {
      margin-left: 0px;
      margin-top: 0px;
      transform: scale(1.5);
    }
    30% {
      margin-left: 100px;
      margin-top: 200px;
      transform: scale(1);
    }
    50% {
      margin-left: 100px;
      margin-top: 400px;
      transform: scale(1.5);
    }
    75% {
      margin-left: 300px;
      margin-top: 200px;
      transform: scale(1);
    }
    75% {
      margin-left: 300px;
      margin-top: 500px;
      transform: scale(2.5);
    }
    100% {
      margin-left: 0px;
      margin-top: 0px;
      transform: scale(1.5);
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      padding: 0 5vw;
    }
  }

  /* LOAD IMAGE BEFORE INDEX */

  .personal-image {
    width: 350px;
    position: absolute;
    height: 550px;
    background: url('~assets/bitmaps/banner-2-min.png') no-repeat;
    filter: drop-shadow(0px 38px 56px rgba(0, 0, 0, 0.25));
  }
  .personal-image-sill {
    width: 350px;
    height: 550px;
    background: url('~assets/bitmaps/banner-2-sill.png') no-repeat;
    box-sizing: border-box;
    filter: drop-shadow(0px 38px 56px rgba(0, 0, 0, 0.25));
    transform: translate(-35px, 10px);
    animation: reveal 1s forwards;
  }
</style>
