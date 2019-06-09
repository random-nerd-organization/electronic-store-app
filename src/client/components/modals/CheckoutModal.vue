<template>
  <modal
    id="modal"
    height="auto"
    name="checkout"
    transition="nice-modal-fade"
    :adaptive="true"
    :delay="100"
  >
    <section id="modal-checkout">
      <div>
        <label for="name">Твоето име</label>
        <input type="text" name="name" id="name" placeholder="Име">
      </div>

      <div>
        <label for="phone">Телефон по-който ще може да се свържем с Вас</label>
        <input type="phone" name="phone" id="phone" placeholder="Телефон">
      </div>

      <div>
        <label for="email">Имейл в случей, че не можем да Ви открием по-телефона</label>
        <input type="email" name="email" id="email" placeholder="Имейл">
      </div>

      <div>
        <label for="message">Съобщение</label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Тук може да оставите съобщение, например: 'Може да се свържете с мен по-всяко време на денонощието!'"
        />
      </div>

      <div>
        <button @click="makeOrder">Завърши Поръчка</button>
      </div>
    </section>
  </modal>
</template>

<script>
export default {
  name: 'CheckoutModal',
  data() {
    return {};
  },
  created() {},
  methods: {
    makeOrder(ev) {
      alert(12211121312);
    }
  }
};
</script>

<style lang="scss" scoped>
#modal-checkout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 35px;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px 0;

    label,
    input {
      padding: 3px 0;
    }

    label {
      cursor: pointer;
      font-size: 1.2em;
    }
    input {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    button {
      margin-top: 5px;
      cursor: pointer;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
      background: #229ac8;
      color: white;
      text-transform: uppercase;
    }
  }
}
</style>