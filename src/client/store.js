import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { rejects } from 'assert';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ Cart: state.Cart })
});

export default new Vuex.Store({
  state: {
    Cart: [],
    ProductList: []
  },
  mutations: {
    addToCart(state, product) {
      state.Cart.push(product._id);
    },
    removeOneFromCart(state, id) {
      const index = state.Cart.indexOf(id);
      if (index != -1) {
        state.Cart.splice(index, 1);
      }
    },
    setAllProducts(state, products) {
      state.ProductList = products;
    },
    removeItemFromCart(state, id) {
      state.Cart = state.Cart.filter(item => item !== id);
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
    makeOrder({ commit }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          const url =
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:9000/.netlify/functions/app/cart'
              : 'https://electronic-store.netlify.com/.netlify/functions/app/cart';

          const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            // mode:'no-cors',
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
    getCartItem(state) {
      console.log(id);
      return this.state.ProductList.find(item => item._id === id);
    }
  },
  plugins: [vuexLocal.plugin]
});
