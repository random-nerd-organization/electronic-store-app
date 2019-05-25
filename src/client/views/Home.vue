<template>
  <div class="home">
    <div class="product-grid">
      <Card
        v-for="prod in products"
        :key="prod.id"
        :url="prod.imgUrl"
        :title="prod.title"
        :description="prod.description"
        :price="'$' + prod.price"
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
    // const res = await fetch('http://localhost:9000/.netlify/functions/app/products');
    // console.log(await res.json());
  },
  data: function() {
    return {
        products:[]
    };
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
