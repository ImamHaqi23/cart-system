<!-- Cart.vue -->
<template>
  <div class="w-full md:w-1/3 p-4 border-l">
    <h1 class="text-2xl mb-4 font-bold">Cart</h1>
    <div v-if="cart.length > 0">
      <CartItem v-for="item in cart" :key="item.id" :item="item" />
      <div class="mt-4 flex justify-between items-center">
        <span class="text-lg font-bold">Total: $ {{ totalPrice }}</span>
        <button
          @click="checkout"
          class="bg-green-500 text-white p-2 rounded font-semibold text-lg"
        >
          Checkout
        </button>
      </div>
    </div>
    <div
      v-else-if="orderPlaced"
      class="bg-green-100 p-4 rounded flex justify-between items-center"
    >
      <p>Order successfully placed!</p>
      <button @click="resetOrder">x</button>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import CartItem from '../components/CartItem.vue';

export default defineComponent({
  name: 'Cart',
  components: { CartItem },
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);
    const totalPrice = computed(() => store.getters.totalPrice);
    const orderPlaced = ref(false);

    const checkout = () => {
      store.commit('checkout');
      orderPlaced.value = true;
    };

    const resetOrder = () => {
      orderPlaced.value = false;
    };

    return { cart, totalPrice, checkout, orderPlaced, resetOrder };
  },
});
</script>

<style scoped>
/* Additional styling if needed */
</style>
