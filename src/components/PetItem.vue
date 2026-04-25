<template>
  <div class="card mb-3">
    <img class="card-img-top" :src="pet.image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ pet.name }}</h5>
      <p class="card-text">pet.description</p>
      <div class="badge badge-success">{{ pet.type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pet: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
