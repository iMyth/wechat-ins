<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: \5FAE\8F6F\96C5\9ED1, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
  font-weight: 200;
}
html, body{
  padding: 0;
  margin: 0;
  font-size: 40px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
