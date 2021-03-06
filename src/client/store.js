import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import cartService from './services/cart-service';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ Cart: state.Cart })
});

export default new Vuex.Store({
  state: {
    Cart: [],
    _Cart: new Map(),
    ProductList: []
  },
  mutations: {
    addToCart(state, product) {
      state.Cart.push(product._id);
      cartService.addProductToCart(state, product);
    },
    removeOneFromCart(state, id) {
      const index = state.Cart.indexOf(id);
      if (index != -1) {
        state.Cart.splice(index, 1);
      }

      const productId = id.toString();
      cartService.decrementProductFromCart(state, productId);
    },
    setAllProducts(state, products) {
      state.ProductList = products;
    },
    removeItemFromCart(state, id) {
      state.Cart = state.Cart.filter(item => item !== id);

      const productId = id.toString();
      cartService.removeProductFromCart(state, productId);
    }
  },
  actions: {
    async getProducts({ commit }) {
      const url =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:9000/.netlify/functions/app/products'
          : 'https://electronic-store.netlify.com/.netlify/functions/app/products';

      const res = await fetch(url);
      const data = await res.json();

      commit('setAllProducts', data);
    },
    makeOrder({ state }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const url =
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:9000/.netlify/functions/app/cart'
              : 'https://electronic-store.netlify.com/.netlify/functions/app/cart';

          const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ orderInfo: [...state._Cart], userInfo: payload }),
            headers: {
              'Content-Type': 'application/json'
            }
          });

          const data = await res.json();

          resolve(data);
        } catch (err) {
          reject({
            message: 'Something got wrong, we cannot finish this order!',
            error: err
          });
        }
      });
    }
  },
  getters: {
    getCart(state) {
      return state.Cart;
    },
    getProducts(state) {
      return state.ProductList;
    },
    getProductsFromCart(state) {
      return state.ProductList.filter(product =>
        state.Cart.includes(product._id)
      );
    },
    getCartItem: (state) => (id) => state.ProductList.find(item => item._id === id),
    isItemInCart: (state) => (id) => state.Cart.includes(id)

  },
  plugins: [vuexLocal.plugin]
});
