// import Persistence from 'vuex-persist'

export const state = () => ({
  stories: []
})

export const mutations = {
  setStories (state, value) {
    const formattedStories = value
    const imageLinkRegex = /<img\s+(?:[^>]*?\s+)?src=(["'])(.*?)\1/m
    for (const story of formattedStories) {
      story.image = story['content:encoded'][0].match(imageLinkRegex)[2]
      story.id = story.title[0].replaceAll(': ', '-')
        .replaceAll(' ', '-')
        .replaceAll('\'', '')
        .toLowerCase()
    }
    state.stories = formattedStories
  }
}
