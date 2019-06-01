<template>
  <div class="cart" v-if="getCartItems.length > 0">
    <div class="initial-box" v-on:click="detailsToggle">
      <h3>Products in Cart</h3>
      <div>${{ totalPrice }}</div>
    </div>
    <div
      class="main-box"
      :class="{ open: showDetails, scroll: getCartItems.length > 3 }"
    >
      <div class="item" v-for="(item, key) in getCartItems" :key="key">
        <div class="details">
          <img :src="'/imageProducts/' + item.imgUrl" />
          <div class="price">
            <h6>{{ item.title }}</h6>
            <p>${{ getProductCount(item._id) * item.price }}</p>
          </div>
        </div>
        <div class="item-options">
          <button class="add" v-on:click="addToCart(item)">+</button>
          <button class="remove" v-on:click="removeOneFromCart(item._id)">
            <span>-</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data: function() {
    return {
      showDetails: false
    };
  },
  methods: {
    detailsToggle() {
      this.showDetails = !this.showDetails;
    },
    removeOneFromCart(id) {
      this.$store.commit('removeOneFromCart', id);
    },
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    getProductCount(id) {
      let count = 0;
      this.getCart.forEach(item => {
        if (item === id) {
          count++;
        }
      });
      return count;
    }
  },
  computed: {
    getCartItems() {
      return this.$store.getters.getProductsFromCart;
    },
    getCart() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.getCartItems
        .map(x => x.price)
        .reduce((sum = 0, prod) => sum + prod);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 300px;
  display: flex;
  flex-direction: column-reverse;
  opacity: 0.9999;
  z-index: 1;
  .order {
    position: absolute;
    left: -30px;
    top: -30px;
    background: crimson;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .initial-box {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    background-color: #229ac8;
    background-image: linear-gradient(to bottom, #23a1d1, #1f90bb);
    background-repeat: repeat-x;
  }

  .main-box {
    width: 100%;
    height: 0px;
    transition: height 0.2s ease-in, opacity 0.2s ease-in;
    background: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 8px;
    box-sizing: border-box;
    opacity: 0;
    position: relative;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      &:last-child {
        border: none;
        padding-bottom: 0px;
      }

      .item-options {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
        .remove {
          background: crimson;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
          opacity: 0.8;
          color: white;
          font-size: 1.5em;
          font-weight: 100;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
        .add {
          background: springgreen;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
          opacity: 0.8;
          color: white;
          font-size: 1.5em;
          font-weight: 100;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }

      .details {
        display: flex;
        width: 75%;

        img {
          border: 1px solid rgba(0, 0, 0, 0.3);
          width: 90px;
          height: 90px;
          min-width: 90px;
        }
        .price {
          padding-left: 5px;
          p {
            color: #28c8a4;
            margin-top: 10px;
          }
          h6 {
            font-size: 0.8em;
          }
        }
      }
    }
  }

  .open {
    height: 350px;
    opacity: 1;
  }

  .scroll {
    overflow-y: scroll;
  }
}
</style>
