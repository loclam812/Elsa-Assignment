<template>
  <div id="app">
    <home-page />
  </div>
</template>

<script>
import HomePage from './pages/HomePage'

export default {
  name: 'App',

  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
