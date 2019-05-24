import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inCart: []
  },
  mutations: {
    addToCart(state, product) {
      state.inCart.push(product);
    },
    removeFromCardById(state, id) {
      const index = state.inCart.findIndex(product => product.id === id);
      state.inCart = state.inCart.splice(index, 1);
    }
  },
  actions: {},
  getters: {
    cart(state) {
      return state.inCart;
    }
  }
});
