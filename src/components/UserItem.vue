<template>
  <div class="user-item">
    <h1>{{ user.name }}</h1>

    <span v-for="(typePet, index) in user.typePets" :key="index" class="badge badge-success ml-1">
      {{ typePet }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.user-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>