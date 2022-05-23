<template>
  <div class="stories-ctn section">
    <div class="inner">
      <div class="stories-grid">
        <StoryCard v-for="index in 3" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import StoryCard from '~/components/StoryCard.vue'
export default {
  name: 'StoriesPage',
  components: { StoryCard }
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
  height: 100%;
  min-height: 80vh;
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
