<template>
  <div class="stories-ctn section">
    <div class="inner">
      <div class="stories-grid">
        <StoryCard v-for="story in stories" :key="story.id" :story="story" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StoryCard from '~/components/StoryCard.vue'
export default {
  name: 'StoriesPage',
  components: { StoryCard },
  computed: {
    ...mapState({
      stories: state => state.stories
    })
  },
  head: {
    title: "Favour Felix's Stories - All Stories",
    meta: [
      { hid: 'description', name: 'description', content: 'Have a look at the exciting stories of a young man, a Software Engineer currently based in Lagos, Nigeria.' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Favour Felix\'s Stories - Stories about everything'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Have a look at the exciting stories of a young man, a Software Engineer currently based in Lagos, Nigeria.'
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
.stories-grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2%;
  row-gap: 32px;
  padding-bottom: 10%;
  padding-top: 40px;
}

@media screen and (max-width: 600px) {
  .stories-grid {
    grid-template-columns: repeat(1, auto);
  }
  .stories-grid >>> .card-img, .stories-grid >>> .card-img-overlay {
    height: 180px;
  }
}
</style>
