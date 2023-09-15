<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" v-if="false" />
    <div>Vue version: {{ version }}</div>
    <p>
      <tiny-tabs v-model="activeName" @click="handleClick">
        <tiny-tab-item title="首页" name="home"></tiny-tab-item>
        <tiny-tab-item title="表单" name="form"></tiny-tab-item>
        <tiny-tab-item title="表格" name="list"></tiny-tab-item>
      </tiny-tabs>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      activeName: 'home',
      version: Vue.version
    }
  },
  methods: {
    handleClick(tab) {
      this.$router.push({ path: `/${tab.name}` })
    }
  },
  watch: {
    $route(to) {
      this.activeName = to.path.slice(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 60px;
  width: 800px;
}
</style>
