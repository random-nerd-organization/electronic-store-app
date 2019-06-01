<template>
  <nav>
    <div class="product-nav">
      <router-link to="/category1">Category1</router-link>
      <router-link to="/category2">Category2</router-link>
      <router-link to="/category3">Category1</router-link>
    </div>
    <div class="info">
      <div class="cart-number" v-if="getCart.length > 0">
        {{ getCart.length }}
      </div>
      <svg
        baseProfile="tiny"
        height="24px"
        version="1.2"
        viewBox="0 0 24 24"
        width="24px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        v-on:click="toggleCart"
      >
        <g id="Layer_1">
          <g>
            <path
              d="M20.756,5.345C20.565,5.126,20.29,5,20,5H6.181L5.986,
        3.836C5.906,3.354,5.489,3,5,3H2.75c-0.553,0-1,0.447-1,1
        s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,
        0.045,0.124c0.016,0.053,0.029,0.103,0.054,0.151
        c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,
        0.078,0.095,0.112c0.058,0.054,0.125,0.092,0.193,0.13
        c0.038,0.021,0.071,0.049,0.112,0.065C6.748,16.972,6.87,
        17,6.999,17C7,17,18,17,18,17c0.553,0,1-0.447,1-1s-0.447-1-1-1H7.847
        l-0.166-1H19c0.498,0,0.92-0.366,0.99-0.858l1-7C21.031,
        5.854,20.945,5.563,20.756,5.345z M18.847,7l-0.285,2H15V7H18.847z M14,7
        v2h-3V7H14z M14,10v2h-3v-2H14z M10,7v2H7C6.947,9,6.899,
        9.015,6.852,9.03L6.514,7H10z M7.014,10H10v2H7.347L7.014,10z M15,12v-2
        h3.418l-0.285,2H15z"
            ></path>
            <circle cx="8.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
          </g>
        </g>
      </svg>
    </div>
    <Cart :showCart="showCart && getCart.length > 0" />
  </nav>
</template>

<script>
import Cart from './Cart';
export default {
  name: 'navigation',
  components: {
    Cart
  },
  data: function() {
    return {
      showCart: false
    };
  },
  methods: {
    toggleCart() {
      if (this.getCart.length > 0) {
        this.showCart = !this.showCart;
      }
    }
  },
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  background-color: #229ac8;
  background-image: linear-gradient(to bottom, #23a1d1, #1f90bb);
  background-repeat: repeat-x;
  border-color: #1f90bb #1f90bb #145e7a;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 10px;
  position: relative;
  .product-nav {
    display: flex;
    height: 100%;
    a {
      font-size: 1.2em;
      color: white;
      text-decoration: none;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
  .info {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    position: relative;
    margin-right: 20px;
    transition: transform 0.1s ease-in;
    &:hover {
      transform: scale(0.9);
    }
    .cart-number {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: crimson;
      position: absolute;
      color: white;
      font-size: 0.6em;
      right: -7px;
      bottom: 2px;
      z-index: 1;
    }
    svg {
      background: white;
      border-radius: 50%;
      padding: 4px;
      cursor: pointer;
    }
  }
}
</style>
