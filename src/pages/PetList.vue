<template>
  <h1 class="text-center text-primary">Pet List</h1>

  <div class="row">
    <div v-for="(pet, index) in pets" :key="index" class="col-3">
      <pet-item :pet="pet" />
    </div>
  </div>
</template>

<script>
import PetItem from '@/components/PetItem.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('pet');

export default {
  components: {
    PetItem
  },
  computed: {
    ...mapState({
      pets: state => state.petList
    })
  }
}
</script>

<style></style>