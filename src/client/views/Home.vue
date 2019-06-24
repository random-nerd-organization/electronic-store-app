<template>
  <div class="home" v-if="products">
    <div class="categories">
      <p
        v-for="(category, key) in categories"
        :key="key"
        v-on:click="filterProducts(category)"
        :class="{'checked': CategoriesToFilterBy.includes(category)}"
      >{{category}}</p>
    </div>
    <div class="product-grid">
      <Carousel class="carousel">
        <Slide>
          <img src="/imageProducts/11458028339230.jpg">
        </Slide>
        <Slide>
          <img src="/imageProducts/11462603702302.jpg">
        </Slide>
        <Slide>
          <img src="/imageProducts/11570667356190.jpg">
        </Slide>
        <Slide>
          <img src="/imageProducts/11517939679262.jpg">
        </Slide>
      </Carousel>
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
    .carousel {
      grid-column: 1 / 4;
      border: 1px solid rgba(0, 0, 0, 0.2);
      width: 92.7%;
      height: 92.5%;
      margin-left: 30px;
      justify-content: center;
    }
  }
  .categories {
    width: 230px;
    max-height: 370px;
    margin-bottom: 30px;
    text-align: left;
    position: fixed;
    transform: translateX(-230px);
    border-radius: 4px;
    .checked {
      background: linear-gradient(to bottom, #23a1d1, #1f90bb);
      color: white;
    }
    p {
      cursor: pointer;
      background: rgba(#000, 0.1);
      display: flex;
      border-bottom: 1px solid rgba(#000, 0.3);
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 7px;
      &:last-child {
        border: none;
      }
      &:hover {
        background: linear-gradient(to bottom, #23a1d1, #1f90bb);
        color: white;
      }
    }
  }
}
</style>
