<template>
  <h1 class="text-center text-primary">User Detail</h1>

  <div v-if="userDetail" class="card mb-3" style="max-width: 540px; margin: 0 auto">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="userDetail.avatar" class="img-fluid rounded-start" :alt="userDetail.name" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ userDetail.name }}</h5>
          <p class="card-text">Age: {{ userDetail.age }}</p>
          <p class="card-text">Email: {{ userDetail.email }}</p>
          <p class="card-text">Phone: {{ userDetail.phone }}</p>
          <p class="card-text">Type Pets: {{ userDetail.typePets.join(", ") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers("user");

export default {
  created() {
    this.getUserById(+this.$route.params.id);
  },
  computed: {
    ...mapState({
      userDetail: state => state.userDetail
    })
  },
  methods: {
    ...mapActions({
      getUserById: "getUserById"
    })
  },
}
</script>

<style></style>