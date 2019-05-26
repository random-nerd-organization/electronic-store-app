<template>
  <div class="home">
    <div class="product-grid">
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
import Card from "@/components/Card.vue";
export default {
  name: "home",
  components: {
    Card
  },
  data: function() {
    return {
      // products: []
    };
  },
  methods: {
    addedToCart(id) {
      return this.$store.getters.getCart.includes(id);
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
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
