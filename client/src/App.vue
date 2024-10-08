<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Books</RouterLink>
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
