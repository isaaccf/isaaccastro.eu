<template>
  <div id="app">
    <hi></hi>
    <findMe></findMe>
  </div>
</template>

<script>

import Hi from '@/components/Hi'
import FindMe from '@/components/FindMe'

export default {
  name: 'App',
  components: {
    Hi,
    FindMe
  }
}
</script>

<style>
body {
  background: repeating-linear-gradient(
  45deg,
  #fefefeb2,
  #fefefeb2 5px,
  #efefefb2 5px,
  #efefefb2 10px
);
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
