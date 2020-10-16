<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/vue.svg" />
        <HelloWorld msg="Hello Vue + Razzle" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import './assets/site.css';
</style>