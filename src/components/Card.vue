<template>
  <div class="card">
    <div class="showcase">
      <img :src="'/imageProducts/' + url" />
    </div>

    <div class="details">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <div class="price">{{ price }}</div>
    </div>
    <button class="add">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["url", "title", "description", "price"]
};
</script>

<style lang="scss">
.card {
  // delete this margin
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  //box-shadow: 0 0 2px gray;
  width: 230px;
  height: 400px;
  justify-content: space-between;
  padding: 0;
  .showcase {
    width: 100%;
    max-height: 250px;
    img {
      width: 100%;
      height: auto;
      max-height: 250px;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    .title {
      font-size: 1.2em;
      font-weight: bold;
    }

    .description {
      width: 60%;
      font-size: 0.9em;
      margin-top: 10px;
    }

    .price {
      color: rgb(40, 200, 164);
      font-size: 1em;
      margin-top: 10px;
    }
  }
  .add {
    background: rgb(40, 200, 164);
    color: white;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100%;
    outline: none;
    &:active {
      outline: none;
    }
  }
}
</style>
