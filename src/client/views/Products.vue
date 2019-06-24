<template>
  <div v-if="getCartItem" class="products">
    <img :src="'/imageProducts/' + getCartItem.imgUrl">
    <div class="product-details">
      <h3>{{ getCartItem.title }}</h3>
      <p>{{ getCartItem.description }}</p>
    </div>
    <div class="options">
      <div class="container">
        <h6>Quantity</h6>
        <div class="input">
          <h3>{{quantity}}</h3>
          <button class="add" v-on:click="addToCart(getCartItem)">+</button>
          <button class="subtract" v-on:click="removeOneFromCart(getRoute)">-</button>
        </div>
      </div>
      <button v-if="!inCart" v-on:click="addToCart(getCartItem)" class="btn add">Add to Cart</button>
      <button v-if="inCart" v-on:click="removeItemFromCart(getRoute)" class="btn">Remove from Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    removeItemFromCart(id) {
      this.$store.commit('removeItemFromCart', id);
    },
    removeOneFromCart(id) {
      this.$store.commit('removeOneFromCart', id);
    }
  },
  computed: {
    getRoute() {
      return this.$route.params.id;
    },
    getCartItem() {
      return this.$store.getters.getCartItem(this.getRoute);
    },
    inCart() {
      return this.$store.getters.isItemInCart(this.getCartItem._id);
    },
    quantity() {
      let count = 0;
      this.$store.getters.getCart.forEach(idOfObj => {
        if (idOfObj === this.$route.params.id) {
          count++;
        }
      });
      return count;
    }
  }
};
</script>

<style lang="scss" scoped>
.products {
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  .product-details {
    width: 40%;
    h3 {
      font-size: 1.6em;
      margin-bottom: 50px;
    }
  }
  .options {
    border: 1px solid rgba(#000, 0.3);
    padding: 10px;
    .container {
      height: fit-content;
      width: 150px;
      text-align: left;

      .input {
        display: flex;
        height: 30px;
        align-items: center;
        button {
          height: 30px;
          width: 30px;
          border: none;
          background: linear-gradient(to bottom, #23a1d1, #1f90bb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.3em;
          cursor: pointer;
        }
        .subtract {
          background: crimson;
        }
        h3 {
          margin-right: 10px;
        }
      }
    }
  }
  .btn {
    margin-top: 20px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    box-sizing: border-box;
    width: 100%;
    background: crimson;
    color: white;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .add {
    background: #28c8a4;
  }
}
</style>
