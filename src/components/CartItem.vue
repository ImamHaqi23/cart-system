<!-- CartItem.vue -->
<template>
  <div class="border p-4 rounded">
    <h2 class="text-lg font-bold pb-1">{{ item.name }}</h2>
    <p class="font-semibold pb-1">$ {{ item.price }}</p>

    <div class="flex items-center space-x-2">
      <button
        @click="decreaseQuantity"
        class="bg-green-500 text-xl font-bold text-white w-8 pb-1.5 rounded-full"
      >
        -
      </button>
      <p>x {{ item.quantity }}</p>
      <button
        @click="increaseQuantity"
        class="bg-green-500 text-xl font-bold text-white w-8 pb-1.5 rounded-full"
      >
        +
      </button>
    </div>
    <button
      @click="removeFromCart"
      class="bg-red-500 text-white p-2 rounded mt-2"
    >
      Remove
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'CartItem',
  props: {
    item: {
      type: Object as PropType<{
        id: number;
        name: string;
        price: number;
        quantity: number;
      }>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const removeFromCart = () => {
      store.commit('removeFromCart', props.item.id);
    };
    const increaseQuantity = () => {
      store.commit('increaseQuantity', props.item.id);
    };
    const decreaseQuantity = () => {
      store.commit('decreaseQuantity', props.item.id);
    };
    return { removeFromCart, increaseQuantity, decreaseQuantity };
  },
});
</script>

<style scoped>
/* Additional styling if needed */
</style>
