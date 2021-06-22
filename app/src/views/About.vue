<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$store.dispatch('memefunc', 1)">Ass Slap</button>

    <button @click="$store.dispatch('getPlayers')">Get em</button>

  </div>
</template>
