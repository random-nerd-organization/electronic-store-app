`<template>
  <div id="app">
    <div class="main-container">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Nav.vue";

export default {
  name: "navigation",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  .main-container {
    margin: auto;
    width: 1200px;
    border: 1px solid black;
  }
}
</style>
