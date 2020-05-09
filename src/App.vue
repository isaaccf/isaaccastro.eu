<template>
  <div id="app">
    <hi></hi>
    <findMe></findMe>
    <cookie-law message="This website uses cookies" v-on:accept="enableGA()"></cookie-law>
  </div>
</template>

<script>

import Hi from '@/components/Hi'
import FindMe from '@/components/FindMe'
import CookieLaw from 'vue-cookie-law'
import { bootstrap } from 'vue-gtag'
import '@/assets/styles.css'

export default {
  name: 'App',
  components: {
    Hi,
    FindMe,
    CookieLaw 
  },
  methods: {
    enableGA () {
      bootstrap()
    }
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
