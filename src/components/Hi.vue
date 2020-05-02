<template>
  <div class="hi">
    <h1>Isaac Castro Fuentes</h1>
    <p>Software engineer</p>
    <div class="img">
      <div class="me"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hi'
}
</script>

<style scoped>
.hi {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  min-height: 90vh;
}

h1 {
  margin: 0;
  font-size: 1.7em;
  font-weight: normal;
}

@media (min-width: 1025px) {
  h1 {
    font-size: 1.7em;
  }
}

h4 {
  font-style: italic;
  font-weight: normal;
}
.img {
  display: flex;
  justify-content: center;
}
.me {
  background-color: #000;
  border-color: #000;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-sizing: content-box;
  background-image: url("/img/me.jpg");
  background-size: 100% 100%;
  height: 6em;
  width: 6em;
  overflow: hidden;
  transition: background-image 300ms ease-in-out;
}
</style>
