<template>
  <div class="highlights-container">
    <div class="inner">
      <div class="header-text">
        <span>thank</span><span>you!</span><span>see</span> <br>
        <div>you<span>soon.</span></div>
      </div>
      <div class="sub-text">
        You just signed up for early access to exciting stories about everything and anything I venture or have ever ventured into.
      </div>
      <nuxt-link to="/" class="primary-btn come-up">
        <div class="text">
          Go Home
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
  head () {
    return {
      title: 'Thank You!',
      meta: [
        {
          name: 'description',
          content:
            'This is the official portfolio of Favour Felix. I enjoy building software, helping people with efficient and intuitive computer software has always been the dream. These days I live the dream at Acumen Digital'
        }
      ]
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
  padding-top: 10%;
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
  margin-right: calc(1ch / 2);
}
.header-text > div > span {
  color: #DE8500;
  margin-left: calc(1ch / 2);
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
  width: 150px;
  margin-top: 32px;
  height: 45px;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  background: #9E5F00;
  border: 2px solid #000000;
  color: #FFFFFF;
  cursor: pointer;
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
    font-size: 2.5rem;
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
