<template>
  <div class="find-container">
    <div class="find-me">
      <a href="https://www.linkedin.com/in/isaacastro/" target="_blank">linkedin</a>
      <a href="https://github.com/isaaccf" target="_blank">github</a>
      <a href="https://blog.isaaccastro.eu" target="_blank">blog</a>
      <a href="https://twitter.com/isaaccf" target="_blank">twitter</a>
      <a href="https://instagram.com/isaaccf" target="_blank">instagram</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FindMe'
}
</script>

<style scoped>
.find-container {
  display: flex;
  justify-content: center;
}
.find-me {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 10vh;
  text-transform: uppercase;
  font-weight: bold;
  width: 100vw;
  padding: 0 1em;
  text-align: center;
}
.find-me a{
  color: #aeaeae;
}
@media (min-width: 1025px) {
  .find-me {
    width: 30vw;
    padding-left: 2em;
    padding-right: 2em;
  }
}
</style>
