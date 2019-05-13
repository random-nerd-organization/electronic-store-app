<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
  </nav>
</template>

<script>
export default {
  name: "navigation"
};
</script>

<style lang="scss">
nav {
  display: flex;
  background-color: #229ac8;
  background-image: linear-gradient(to bottom, #23a1d1, #1f90bb);
  background-repeat: repeat-x;
  border-color: #1f90bb #1f90bb #145e7a;
  height: 45px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10px;
  a {
    font-size: 1.2em;
    color: white;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
