import { createStore } from 'vuex';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface State {
  products: Product[];
  cart: Product[];
}

export default createStore<State>({
  state: {
    products: [
      { id: 1, name: 'Shampo', price: 100, quantity: 1 },
      { id: 2, name: 'Pasta Gigi', price: 200, quantity: 1 },
      { id: 3, name: 'Sabun Mandi', price: 500, quantity: 1 },
      { id: 4, name: 'Sikat Gigi', price: 150, quantity: 1 },
      { id: 5, name: 'Handuk', price: 250, quantity: 1 },
    ],
    cart: [],
  },
  mutations: {
    addToCart(state: State, product: Product) {
      const item = state.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state: State, productId: number) {
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    clearCart(state: State) {
      state.cart = [];
    },
    increaseQuantity(state: State, productId: number) {
      const item = state.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state: State, productId: number) {
      const item = state.cart.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== productId);
      }
    },
    checkout(state: State) {
      state.cart = [];
    },
  },
  getters: {
    totalCartItems(state: State): number {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice(state: State): number {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});
