<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="product-grid">
      <Card
        v-for="(arr, key) in productCount"
        :key="key"
        url="https://s3.envato.com/files/89054511/01_preview.png"
        title="GamerMonitor-H202"
        description="Take your gaming to new heights"
        price="$3200.30"
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
      productCount: Array(50).fill(10)
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
  }
}
</style>
