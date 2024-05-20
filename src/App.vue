<!-- App.vue -->
<template>
  <div id="app">
    <Navbar />
    <div class="flex flex-wrap">
      <ProductList class="w-full md:w-2/3" />
      <Cart class="w-full md:w-1/3" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import ProductList from './views/ProductList.vue';
import Cart from './views/Cart.vue';

export default defineComponent({
  name: 'App',
  components: { Navbar, ProductList, Cart },
});
</script>

<style>
/* Global styles if needed */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
