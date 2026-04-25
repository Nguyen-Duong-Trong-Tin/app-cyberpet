<template>
  <header>
    <the-header></the-header>
  </header>

  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>

  <footer></footer>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style></style>
