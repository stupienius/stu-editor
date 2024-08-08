<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import StartMenu from "./components/pages/start_menu.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <StartMenu />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: rgb(54, 54, 54);
}
</style>
