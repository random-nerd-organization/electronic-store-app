<template>
  <div class="products">
    <h3>{{ getCartItem.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'products',
  date() {
    return {};
  },
  computed: {
    getCartItem() {
      return this.$store.getters.getCartItem(this.$route.params.id);
    }
  }
};
</script>
