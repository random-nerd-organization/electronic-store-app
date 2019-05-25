<template>
  <div class="home">
    <div class="product-grid">
      <Card
        v-for="prod in products"
        :key="prod.id"
        :card="prod"
        :addedToCart="addedToCart(prod.id)"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "home",
  components: {
    Card
  },
  async beforeCreate() {
    const res = await fetch(
      "http://localhost:9000/.netlify/functions/app/products"
    );
    this.products = await res.json();
    if (this.products) {
      console.log(this.products);
      console.log("XIXI");
    }
  },
  data: function() {
    return {
      products: []
    };
  },
  methods: {
    addedToCart(id) {
      return this.$store.getters.getCart.includes(id);
    }
  }
};
</script>

<style lang="scss">
.home {
  .product-grid {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    margin-top: 50px;
  }
}
</style>
