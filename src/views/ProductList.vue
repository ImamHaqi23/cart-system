<!-- ProductList.vue -->
<template>
  <div class="w-full md:w-2/3 p-4">
    <h1 class="text-2xl mb-4 font-bold">Product List</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
///
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import ProductItem from '../components/ProductItem.vue';

export default defineComponent({
  name: 'ProductList',
  components: { ProductItem },
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    return { products };
  },
});
</script>

<style scoped>
/* Additional styling if needed */
</style>
