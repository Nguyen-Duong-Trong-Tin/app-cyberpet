<template>
  <h1 class="text-center text-primary">User Detail</h1>
  <div>Id: {{ $route.params.id }}</div>
</template>
<script>

export default {
  created() {
    console.log("Id", this.$route.params.id);
  }
}
</script>

<style></style>