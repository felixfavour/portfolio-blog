<template>
  <div :class="['header-container', ($route.name.includes('-') ? 'elevated' : '')]">
    <a class="logo" href="/" />
    <div class="nav-actions">
      <div class="action">
        <a target="_blank" href="https://favourfelix.com">
          Go Home
        </a>
      </div>
      <div class="bar" />
      <div class="action">
        <span>
          {{ ($route.name === 'index' ? 'Highlights' : ($route.name.includes('-') ? 'MY STORY' : $route.name.toUpperCase())) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeActive: false,
      headerVisible: true
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler (_to, _fro) {
        this.headerVisible = false
      }
    }
  }
}
</script>

<style scoped>
  .header-container {
    background-color: #FFDEAC;
    height: 95px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 10vw;
  }
  .header-container.elevated {
    box-shadow: 40px 5px 45px 4px #de850049;
  }
  .material-icons {
    margin-left: 4px;
  }
  .logo {
    height: 50px;
    flex-basis: 35%;
    justify-content: flex-start;
    background: url('~assets/bitmaps/header-logo.png') no-repeat left;
  }
  .nav-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .action a {
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: .4s;
    justify-content: center;
    font-weight: 500;
    font-size: 24px;
    color: #000;
  }
  .action a:hover {
    display: block;
    transition: .4s;
    color: #DE8500;
  }
  .action span {
    cursor: default;
    font-size: 24px;
    font-weight: 500;
  }
  .action span::after {
    content: '.';
    color: #DE8500;
    font-weight: 500;
  }
  .bar {
    margin: auto 24px;
    width: 3px;
    height: 30px;
    background: #DE8500;
    border-radius: 16px;
  }
</style>
