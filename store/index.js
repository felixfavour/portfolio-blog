// import Persistence from 'vuex-persist'

export const state = () => ({
  stories: []
})

export const mutations = {
  setStories (state, value) {
    const formattedStories = value
    for (const story of formattedStories) {
      story.id = story.title[0].replaceAll(': ', '-')
        .replaceAll(' ', '-')
        .replaceAll('\'', '')
        .toLowerCase()
    }
    state.stories = formattedStories
  }
}
