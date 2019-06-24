<template>
  <div class="card">
    <div class="showcase">
      <img :src="'/imageProducts/' + card.imgUrl">
      <div class="details-overlay">
        <router-link :to="'/products/' + card._id">
          <button class="details">Details</button>
        </router-link>
      </div>
    </div>

    <div class="details">
      <div class="title">{{ card.title }}</div>
      <div class="description">{{ desc }}</div>
      <div class="price">${{ card.price }}</div>
    </div>
    <button v-on:click="addToCart(card)" class="add" v-if="!addedToCart">
      <i class="fas fa-shopping-cart"></i>
      <svg
        baseProfile="tiny"
        height="24px"
        version="1.2"
        viewBox="0 0 24 24"
        width="24px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_1">
          <g>
            <path
              d="M20.756,5.345C20.565,5.126,20.29,5,20,5H6.181L5.986,
        3.836C5.906,3.354,5.489,3,5,3H2.75c-0.553,0-1,0.447-1,1
        s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,
        0.045,0.124c0.016,0.053,0.029,0.103,0.054,0.151
        c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,
        0.078,0.095,0.112c0.058,0.054,0.125,0.092,0.193,0.13
        c0.038,0.021,0.071,0.049,0.112,0.065C6.748,16.972,6.87,
        17,6.999,17C7,17,18,17,18,17c0.553,0,1-0.447,1-1s-0.447-1-1-1H7.847
        l-0.166-1H19c0.498,0,0.92-0.366,0.99-0.858l1-7C21.031,
        5.854,20.945,5.563,20.756,5.345z M18.847,7l-0.285,2H15V7H18.847z M14,7
        v2h-3V7H14z M14,10v2h-3v-2H14z M10,7v2H7C6.947,9,6.899,
        9.015,6.852,9.03L6.514,7H10z M7.014,10H10v2H7.347L7.014,10z M15,12v-2
        h3.418l-0.285,2H15z"
            ></path>
            <circle cx="8.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
          </g>
        </g>
      </svg>
      <span>Add to Cart</span>
    </button>
    <button v-on:click="removeItemFromCart(card._id)" class="add checked" v-if="addedToCart">
      <i class="fas fa-shopping-cart"></i>
      <svg
        baseProfile="tiny"
        height="24px"
        version="1.2"
        viewBox="0 0 24 24"
        width="24px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_1">
          <g>
            <path
              d="M20.756,5.345C20.565,5.126,20.29,5,20,5H6.181L5.986,
        3.836C5.906,3.354,5.489,3,5,3H2.75c-0.553,0-1,0.447-1,1
        s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,
        0.045,0.124c0.016,0.053,0.029,0.103,0.054,0.151
        c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,
        0.078,0.095,0.112c0.058,0.054,0.125,0.092,0.193,0.13
        c0.038,0.021,0.071,0.049,0.112,0.065C6.748,16.972,6.87,
        17,6.999,17C7,17,18,17,18,17c0.553,0,1-0.447,1-1s-0.447-1-1-1H7.847
        l-0.166-1H19c0.498,0,0.92-0.366,0.99-0.858l1-7C21.031,
        5.854,20.945,5.563,20.756,5.345z M18.847,7l-0.285,2H15V7H18.847z M14,7
        v2h-3V7H14z M14,10v2h-3v-2H14z M10,7v2H7C6.947,9,6.899,
        9.015,6.852,9.03L6.514,7H10z M7.014,10H10v2H7.347L7.014,10z M15,12v-2
        h3.418l-0.285,2H15z"
            ></path>
            <circle cx="8.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
          </g>
        </g>
      </svg>
      <span>Remove form Cart</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['card', 'addedToCart'],
  computed: {
    desc: function() {
      let arr = this.card.description.split(' ');
      let shorterDesc = '';
      for (let i = 0; shorterDesc.length < 25; i++) {
        shorterDesc += arr[i] + ' ';
      }
      return shorterDesc;
    }
  },
  methods: {
    addToCart(id) {
      this.$store.commit('addToCart', id);
    },
    removeItemFromCart(id) {
      this.$store.commit('removeItemFromCart', id);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  // delete this margin
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 230px;
  height: 370px;
  justify-content: space-between;
  padding: 0;
  transition: transform 0.2s ease-in, box-shadow 0.2s ease-in;
  .details-overlay {
    width: 100%;
    height: 200px;
    position: absolute;
    background: rgba(#000, 0.6);
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease-in, transform 0.2s ease-in;
    transform: scale(0.8);
    a {
      text-decoration: none;
    }
    .details {
      color: white;
      background: transparent;
      border: 1px solid crimson;
      font-size: 1.2em;
      padding: 15px;
      width: 100px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: crimson;
        color: white;
      }
    }
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 3px 1px lightgray;
    .details-overlay {
      opacity: 1;
      transform: scale(1);
    }
  }
  .showcase {
    width: 100%;
    padding-top: 20px;
    box-sizing: border-box;
    max-height: 200px;
    position: relative;
    img {
      width: 80%;
      height: auto;
      max-height: 100%;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    .title {
      font-size: 15px;
      font-weight: bold;
    }

    .description {
      width: 60%;
      font-size: 12px;
      margin-top: 10px;
    }

    .price {
      color: rgb(40, 200, 164);
      font-size: 1em;
      margin-top: 10px;
    }
  }
  .add {
    background: linear-gradient(to bottom, #23a1d1, #1f90bb);
    opacity: 0.8;
    color: white;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 100%;
    outline: none;
    cursor: pointer;
    svg {
      fill: white;
    }
    &:hover {
      opacity: 1;
    }
    &:active {
      outline: none;
    }
  }
  .checked {
    background: crimson;
  }
}
</style>
