<template>
  <div class="stories-ctn section">
    <div class="inner">
      <div class="stories-grid">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stories'
}
</script>

<style scoped>
.stories-grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2%;
  row-gap: 32px;
}
</style>
