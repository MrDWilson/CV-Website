<template>
  <div id="app">
    <AppNavigation></AppNavigation>
    <router-view id="view"></router-view>
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap');

  html, body {
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
  }

  #view {
    height: 100%;
    /*background-image: linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url('./assets/code-background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;*/
    background: #616161;
  }

  #app {
    height: 100%;
  }

</style>
