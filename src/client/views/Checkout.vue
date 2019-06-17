<template>
  <div class="checkout">
    <checkout-modal/>
    <div class="products-grid">
      <div>
        <h1>Checkout page</h1>
        <button class="checkout"  @click="$modal.show('checkout')">Make Order</button>
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
import CheckoutModal from '@/components/modals/CheckoutModal.vue';

export default {
  components: {
    Card,
    CheckoutModal
  },
  methods: {
    showCheckoutModal() {
      this.$modal.show('hello-world');
    },
    hideCheckoutModal() {
      this.$modal.hide('hello-world');
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
