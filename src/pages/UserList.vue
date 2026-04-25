<template>
  <h1 class="text-center text-primary">User List</h1>

  <div class="row">
    <div v-for="(user, index) in users" :key="index" class="col-3">
      <user-item :user="user" />
    </div>
  </div>

</template>

<script>
import UserItem from '@/components/UserItem.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('user');

export default {
  components: {
    UserItem
  },
  computed: {
    ...mapState({
      users: state => state.userList
    })
  }
}
</script>

<style></style>