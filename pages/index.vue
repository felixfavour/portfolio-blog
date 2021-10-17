<template>
  <div class="highlights-container">
    <div class="inner">
      <div class="header-text">
        <span class="comeup-one">you</span>
        <span class="comeup-two">don't</span>
        <span class="comeup-three">rush</span>
        <div class="comeup-four">
          genius.
        </div>
      </div>
      <div class="sub-text comeup-five">
        “Good things take time. Great things take a long time. And the best things take the longest time.”
      </div>
      <div class="form comeup-six">
        <label :class="isEmailValid ? '' : 'error-input'" for="input">
          Your Email Address
          <input v-model="email" type="text">
        </label>
        <button :disabled="!isEmailValid" class="primary-btn" @click="addEmailToMailingList">
          <div class="text">
            Get Early Access
          </div>
          <div v-show="!isUploading" class="material-icons">
            arrow_forward
          </div>
          <Loader v-show="isUploading" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
// initialize firebase analytics
import 'firebase/analytics'
export default {
  name: 'Highlights',
  data () {
    return {
      isUploading: false,
      email: ''
    }
  },
  head () {
    return {
      title: 'Favour Felix, Stories',
      meta: [
        {
          name: 'description',
          content:
            'Dig into the life of a Software Engineer, talking about everything you want to hear.'
        }
      ]
    }
  },
  computed: {
    isEmailValid () {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(String(this.email).toLowerCase())
    }
  },
  mounted () {
    const analytics = firebase.analytics()
    analytics.logEvent('page_visited', { name: 'TEST_VISIT' })
  },
  methods: {
    addEmailToMailingList () {
      const firestore = firebase.firestore()
      this.isUploading = true
      firestore.collection('emails').doc().set({
        to: this.email,
        message: {
          subject: 'Hi, Its Favour.',
          text: 'Thanks for showing interest in my online journal, trust me! you made a very good decision. I\'d be reaching out to you soon.'
        }
      }).then((_onfulfilled) => {
        firestore.collection('visitors').doc().set({
          email: this.email
        }).then((_onfulfilled) => {
          this.isUploading = false
          this.$router.push('/thanks')
        })
      })
    }
  }
}
</script>

<style scoped>
.highlights-container > * {
  transition: 0.2s;
  z-index: 1;
}
.highlights-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6%;
  transition: 0.2s;
}
.highlights-container > .inner {
  width: 1000px;
}
.header-text {
  font-family: 'Graphik', sans-serif;
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 2%;
  color: #9E5F00;
  transition: 0.2s;
}
.header-text > span {
  margin-right: calc(1ch / 5);
  display: inline-block;
}
.header-text > div {
  color: #DE8500;
}
.sub-text {
  font-family: 'Crimson Text', serif;
  font-size: 2rem;
  margin-bottom: 10%;
  width: 70%;
}
.primary-btn {
  text-decoration: none;
  display: flex;
  width: auto;
  margin-top: 32px;
  height: 45px;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  background: #9E5F00;
  border: 2px solid #000000;
  color: #FFFFFF;
  transition: 0.2s;
  cursor: pointer;
}
.primary-btn:disabled {
  cursor: not-allowed;
  background: #cecece;
  border-color: #cecece;
}
.primary-btn .text {
  margin-right: 28px;
}
label > input {
  display: block;
  background: #FFFFFF;
  border: 2px solid #000000;
  height: 50px;
  margin-top: 8px;
  width: 100%;
  max-width: 800px;
  outline: none;
  font-size: 1.2rem;
  padding: 0 8px;
  box-sizing: border-box;
  transition: 0.2s;
}
label:focus-within {
  color: #9E5F00;
}
label > input:focus {
  background: #DE8500;
}
.error-input > input {
  border: 2px solid #DE8500;
  background: #FFFFFF;
}
label::after {
  content: ' ';
  display: block;
  width: 100%;
  margin-top: 6px;
  color: #DE8500;
  animation: 2s comeup-one forwards;
  height: 30px;
}
.error-input::after {
  content: 'Email address is not valid';
}

/* Animations */
.comeup-one {
  opacity: 0;
  animation: 2s comeup-one forwards ease-in-out;
}
.comeup-two {
  opacity: 0;
  animation: 2s comeup-two forwards ease-in-out;
}
.comeup-three {
  opacity: 0;
  animation: 2s comeup-three forwards ease-in-out;
}
.comeup-four {
  opacity: 0;
  animation: 2s comeup-four forwards ease-in-out;
}
.comeup-five {
  opacity: 0;
  animation: 2.5s comeup-four forwards ease-in-out;
}
.comeup-six {
  opacity: 0;
  animation: 3s comeup-six forwards ease-in-out;
}
@keyframes comeup-one {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  25% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes comeup-two {
  25% {
    opacity: 0;
    transform: translateY(15px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes comeup-three {
  50% {
    opacity: 0;
    transform: translateY(15px);
  }
  75% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes comeup-four {
  75% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes comeup-five {
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes comeup-six {
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Media Queries */
@media screen and (max-width: 1400px) {
  .highlights-container {
    padding-top: 5%;
  }
  .header-text {
    font-size: 5rem;
  }
  .sub-text {
    font-size: 1.5rem;
    margin-bottom: 6%;
  }
}
@media screen and (max-width: 1050px) {
  .highlights-container {
    padding-top: 15%;
  }
  .header-text {
    font-size: 5rem;
  }
}
@media screen and (max-width: 800px) {
  .highlights-container {
    padding-top: 10%;
  }
  .highlights-container > .inner {
    width: 100%;
  }
  .header-text {
    font-size: 5rem;
  }
  .sub-text {
    width: 85%;
  }
}
@media screen and (max-width: 600px) {
  .highlights-container {
    padding-top: 20%;
  }
  .highlights-container > .inner {
    width: 100%;
  }
  .header-text {
    font-size: 3rem;
  }
  .sub-text {
    width: 95%;
    font-size: 1.2rem;
  }
  label {
    font-size: 0.8rem;
  }
  label > input {
    font-size: 1rem;
  }
  .primary-btn {
    font-size: 0.95rem;
  }
}
</style>
