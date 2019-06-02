<template>
  <div class="home">
    <div class="product-grid">
      <div class="categories">
        <p
          v-for="(category, key) in categories"
          :key="key"
          v-on:click="filterProducts(category)"
          :class="{'checked': CategoriesToFilterBy.includes(category)}"
        >{{category}}</p>
      </div>
      <Card
        v-for="prod in products"
        :key="prod._id"
        :card="prod"
        :addedToCart="addedToCart(prod._id)"
      />
      <Carousel>
        <Slide></Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'home',
  data: function() {
    return {
      CategoriesToFilterBy: []
    };
  },
  components: {
    Card,
    Carousel,
    Slide
  },
  methods: {
    addedToCart(id) {
      return this.$store.getters.getCart.includes(id);
    },
    filterProducts(category) {
      if (this.CategoriesToFilterBy.includes(category)) {
        this.CategoriesToFilterBy.splice(
          this.CategoriesToFilterBy.indexOf(category),
          1
        );
      } else {
        this.CategoriesToFilterBy.push(category);
      }
    }
  },
  computed: {
    products() {
      let products = this.$store.getters.getProducts;
      if (this.CategoriesToFilterBy.length > 0) {
        return products.filter(prod => {
          let check = true;
          this.CategoriesToFilterBy.forEach(item => {
            if (!prod.categories.includes(item)) {
              check = false;
            }
          });
          return check;
        });
      } else {
        return products;
      }
    },
    categories() {
      const cat = new Set();
      this.$store.getters.getProducts
        .map(item => item.categories)
        .forEach(i => {
          i.forEach(c => {
            cat.add(c);
          });
        });
      return Array.from(cat);
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
    place-items: center;
  }
  .categories {
    border: 1px solid rgba(#000, 0.1);
    width: 230px;
    height: 370px;
    max-height: 370px;
    margin-bottom: 30px;
    text-align: left;
    .checked {
      color: crimson;
    }
    p {
      cursor: pointer;
      &:hover {
        color: crimson;
      }
    }
  }
}
</style>
