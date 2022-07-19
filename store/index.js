// import Persistence from 'vuex-persist'

export const state = () => ({
  stories: []
})

export const mutations = {
  setStories (state, value) {
    const formattedStories = value
    const imageLinkRegex = /<img\s+(?:[^>]*?\s+)?src=(["'])(.*?)\1/m
    for (const story of formattedStories) {
      const content = story['content:encoded'][0].replaceAll(/<[^>]*>/g, '')
      story.content = content
      story.image = story['content:encoded'][0].match(imageLinkRegex)[2]
      story.pubDate = story.pubDate[0].slice(0, story.pubDate[0].length - 7)
      story.id = story.title[0].replaceAll(': ', '-')
        .replaceAll(' ', '-')
        .replaceAll('\'', '')
        .toLowerCase()
      story.read_time = Math.round(content.split(' ').length / 200)
    }
    state.stories = formattedStories
  }
}
