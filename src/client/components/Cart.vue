<template>
  <div class="cart">
    <div class="initial-box" v-on:click="detailsToggle">
      <h3>Products in Cart</h3>
      <div>^</div>
    </div>
    <div class="main-box" :class="{ open: showDetails }">
      <div class="item" v-for="(item, key) in getCart" :key="key">
        <div class="add"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data: function() {
    return {
      showDetails: false
    };
  },
  methods: {
    detailsToggle() {
      this.showDetails = !this.showDetails;
    }
  },
  computed: {
    getCart() {
      return this.$store.getters.getProductsFromCart;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  bottom: 0px;
  right: 0;
  width: 400px;
  display: flex;
  flex-direction: column-reverse;
  opacity: 0.9999;
  z-index: 1;
  .initial-box {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: lightgray;
    cursor: pointer;
    color: black;
  }

  .main-box {
    width: 100%;
    height: 0px;
    transition: height 0.2s ease-in;
    background: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 8px;
    .item {
      display: flex;
    }
  }

  .open {
    height: 400px;
  }
}
</style>
