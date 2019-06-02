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
    async makeOrder() {
      const name = window.prompt("What's your name?"),
        phone = window.prompt('Please give us a phone number to contact you!'),
        email = window.prompt(
          "Your email address in case we can't reach you from the phone!"
        ),
        message = "Hello we are friendly gus who don't want problems!!!";

      let res = await this.$store.dispatch('makeOrder', {
        name,
        phone,
        email,
        message
      });

      window.alert(JSON.stringify(res));
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
