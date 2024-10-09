<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Books</RouterLink> <br>
        <RouterLink to="/ping">ping</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
#app {
  margin-top: 60px
}
</style>
