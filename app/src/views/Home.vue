<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>Ass slaps: {{$store.state.counter}}</div>

    <div>Kelvin: {{$store.getters.getPlayerById1(1)}}</div>
    <div>Kelvin: {{$store.getters.getPlayerById2.find(player => player.id === 1)}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
