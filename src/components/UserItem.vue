<template>
  <div class="user-item">
    <h1>{{ user.name }}</h1>

    <div>
      <span v-for="(typePet, index) in user.typePets" :key="index" class="badge badge-success ml-1">
        {{ typePet }}
      </span>
    </div>

    <button class="btn btn-primary mt-2" @click="handleNavigateToUserDetail">Detail</button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleNavigateToUserDetail() {
      this.$router.push(`/user-detail/${this.user.id}`);
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