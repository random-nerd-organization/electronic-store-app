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
    Cart: []
  },
  mutations: {
    addToCart(state, product) {
      if (!state.Cart.includes(product.id)) {
        state.Cart.push(product.id);
      }
    },
    removeFromCardById(state, id) {
      const index = state.Cart.findIndex(product => product.id === id);
      if (index != -1) {
        state.Cart = state.Cart.splice(index, 1);
      }
    }
  },
  actions: {},
  getters: {
    getCart(state) {
      return state.Cart;
    }
  },
  plugins: [vuexLocal.plugin]
});
