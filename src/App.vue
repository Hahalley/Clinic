<template>
  <div id="app">
    <Navbar v-if="$route.path !== '/'" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'

export default {
  created() {
    console.log(this.$route.path)
  },
  components: {
    Navbar,
  },
}
</script>

<style lang="scss"></style>
