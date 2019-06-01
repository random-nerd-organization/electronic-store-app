<template>
  <div class="checkout">
    <div class="products-grid">
      <div>
        <h1>Checkout page</h1>
        <button class="checkout" @click="makeOrder">Make Order</button>
      </div>

      <Card
        v-for="prod in products"
        :key="prod._id"
        :card="prod"
        :addedToCart="addedToCart(prod._id)"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card
  },
  methods: {
    makeOrder() {
      alert(
        'This will send email to the admin and he have to call the buyer, this will be done after email backend service is implemented :)'
      );
    },
    addedToCart(id) {
      return this.$store.getters.getCart.includes(id);
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProductsFromCart;
    }
  }
};
</script>

<style lang="scss" scoped>
.checkout {
  .products-grid {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    margin-top: 50px;
  }

  button.checkout {
    width: 100%;
    text-transform: uppercase;
    padding: 15px;
    border-radius: 2px;
    border: 1px solid #661fff67;
    background: transparent;
    color: #651fff;
    font-size: 1.3em;
    cursor: pointer;

    &:hover {
      background: #651fff;
      color: #f2f2f2;
    }
  }
}
</style>
