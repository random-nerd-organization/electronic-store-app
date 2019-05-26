import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

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
      if (!state.Cart.includes(product._id)) {
        state.Cart.push(product._id);
      }
    },
    removeFromCardById(state, id) {
      const index = state.Cart.indexOf(id);
      if (index != -1) {
        state.Cart.splice(index, 1);
      }
    },
    setAllProducts(state, products) {
      state.ProductList = products;
    }
  },
  actions: {
    async getProducts({ commit }) {
      const res = await fetch(
        `http://localhost:9000/.netlify/functions/app/products`
        //`https://${window.location.host}/.netlify/functions/app/products`
      );

      const data = await res.json();
      commit("setAllProducts", data);
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
    }
  },
  plugins: [vuexLocal.plugin]
});
