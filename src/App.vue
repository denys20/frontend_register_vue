<template>
  <Register msg="Sign Up Form"/>
</template>

<script>
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    Register
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: monospace, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: rgb(88,88,88);
  padding: 40px;
}

</style>