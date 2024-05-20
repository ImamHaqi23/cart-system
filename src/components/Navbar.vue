<!-- Navbar.vue -->
<template>
  <nav class="bg-gray-800 p-4 text-white flex justify-between items-center">
    <div class="text-2xl">Cart System</div>
    <div class="relative">
      <span class="text-lg">Cart: {{ totalItems }}</span>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const store = useStore();
    const totalItems = computed(() => store.getters.totalCartItems);
    return { totalItems };
  },
});
</script>

<style scoped>
/* Additional styling if needed */
</style>
