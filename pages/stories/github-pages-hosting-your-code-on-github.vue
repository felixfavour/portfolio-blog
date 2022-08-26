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
          'GitHub Pages: Hosting your code on GitHub'
        ],
        link: [
          'https://medium.com/@felixfavour0/github-pages-hosting-your-code-on-github-43a369f9cbb9?source=rss-fbcb62752cc6------2'
        ],
        guid: [
          {
            _: 'https://medium.com/p/43a369f9cbb9',
            $: {
              isPermaLink: 'false'
            }
          }
        ],
        category: [
          'github-pages',
          'hosting',
          'website',
          'github'
        ],
        'dc:creator': [
          'Favour Felix'
        ],
        pubDate: 'Wed, 11 Dec 2019 23:38',
        'atom:updated': [
          '2022-07-16T19:50:17.447Z'
        ],
        'content:encoded': [
          '<h3>What is GitHub Pages?</h3><p>GitHub Pages is a web hosting service that deploys HTML, CSS and JS code straight from a GitHub repository to a website. It is free to all users and for all plans on GitHub, Although you are allotted a site per account. Users/Organizations by default have their domain name in this format:</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/886/1*AXMk7gRPutmJgSrz6az_kQ.png" /></figure><p>https://&lt;username&gt;.github.io or https://&lt;organization&gt;.github.io</p><h3>How do I Create my Own GitHub Pages Site?</h3><h4>Create a GitHub Account</h4><p>A GitHub account is a prerequisite for a GitHub pages site as the pages on the website can only be collected from a Github repository. To create a GitHub account, log on to Github and <a href="https://github.com/join">register</a>. I’m assuming the advantages of GitHub is something you are very familiar with so I’ll spare you my explanation.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/780/1*wo6O1G5SXIiXK5crui0hYw.png" /></figure><h4>Create a New Repository</h4><p>You would need to create a new repository in your GitHub account, that would contain your static HTML, CSS and JS files. Note that during the creation of the repository, there would be a prompt to make your repository <strong>Public </strong>or <strong>private</strong>, your selection doesn’t alter the accessibility of the GitHub Pages site rather it hides the source code from the General Public.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/192/0*Nnm0gjXTxynYuub6.png" /><figcaption>image source: GitHub</figcaption></figure><h4>Enable the Publishing Option of your Repository</h4><p>Now that your repository is on your GitHub profile, the next step is to publish the repository for general viewing on a GitHub pages site. To do that you’d have to navigate to the repository’s page and then click the <strong>settings </strong>tab.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/983/1*_poGxp1QJ3u1IS_-iHLzOg.png" /></figure><p>Move to the <strong>GitHub Pages</strong> section in the settings. Select the source and make sure it is set to the master branch.</p><p><strong>NB</strong>: Your Website code in the repository should be committed/merged to the master branch.</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/750/1*1cBB1VnCFq1zaENzqLPu7g.png" /></figure><p>Your Github Pages site is Ready!</p><h4>Unpublishing your site</h4><p>To Unpublish the site, simply change the <strong>Source</strong> option in the GitHub Pages section to none. Changes usually occur in less than 20 minutes.</p><h4>Using Jekyll themes on GitHub</h4><p>Still in the GitHub Pages section, there is an option to add a theme to your webpage and make little changes just before deploying. A use-case is a portfolio website. Themes are the best options to have a website with a beautiful UI in no time!</p><figure><img alt="" src="https://cdn-images-1.medium.com/max/772/0*-zGGpK819mPTv6c6.png" /><figcaption>Image Source: GitHub</figcaption></figure><img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=43a369f9cbb9" width="1" height="1" alt="">'
        ],
        content: 'What is GitHub Pages?GitHub Pages is a web hosting service that deploys HTML, CSS and JS code straight from a GitHub repository to a website. It is free to all users and for all plans on GitHub, Although you are allotted a site per account. Users/Organizations by default have their domain name in this format:https://&lt;username&gt;.github.io or https://&lt;organization&gt;.github.ioHow do I Create my Own GitHub Pages Site?Create a GitHub AccountA GitHub account is a prerequisite for a GitHub pages site as the pages on the website can only be collected from a Github repository. To create a GitHub account, log on to Github and register. I’m assuming the advantages of GitHub is something you are very familiar with so I’ll spare you my explanation.Create a New RepositoryYou would need to create a new repository in your GitHub account, that would contain your static HTML, CSS and JS files. Note that during the creation of the repository, there would be a prompt to make your repository Public or private, your selection doesn’t alter the accessibility of the GitHub Pages site rather it hides the source code from the General Public.image source: GitHubEnable the Publishing Option of your RepositoryNow that your repository is on your GitHub profile, the next step is to publish the repository for general viewing on a GitHub pages site. To do that you’d have to navigate to the repository’s page and then click the settings tab.Move to the GitHub Pages section in the settings. Select the source and make sure it is set to the master branch.NB: Your Website code in the repository should be committed/merged to the master branch.Your Github Pages site is Ready!Unpublishing your siteTo Unpublish the site, simply change the Source option in the GitHub Pages section to none. Changes usually occur in less than 20 minutes.Using Jekyll themes on GitHubStill in the GitHub Pages section, there is an option to add a theme to your webpage and make little changes just before deploying. A use-case is a portfolio website. Themes are the best options to have a website with a beautiful UI in no time!Image Source: GitHub',
        image: 'https://cdn-images-1.medium.com/max/886/1*AXMk7gRPutmJgSrz6az_kQ.png',
        id: 'github-pages-hosting-your-code-on-github',
        read_time: 2
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
