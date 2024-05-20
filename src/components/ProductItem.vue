<!-- ProductItem.vue -->
<template>
  <div class="border p-4 rounded">
    <h2 class="text-xl font-bold mb-2">{{ product.name }}</h2>
    <p class="text-lg font-semibold mb-2">$ {{ product.price }}</p>
    <button
      @click="addToCart"
      class="bg-blue-500 text-white p-2 rounded font-semibold"
    >
      Add to Cart
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ProductItem',
  props: {
    product: {
      type: Object as PropType<{ id: number; name: string; price: number }>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const addToCart = () => {
      store.commit('addToCart', props.product);
    };
    return { addToCart };
  },
});
</script>

<style scoped>
/* Additional styling if needed */
</style>
