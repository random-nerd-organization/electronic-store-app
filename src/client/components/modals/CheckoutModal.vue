<template>
  <modal
    id="modal"
    height="auto"
    name="checkout"
    transition="nice-modal-fade"
    :adaptive="true"
    :delay="100"
  >
    <form id="modal-checkout" @submit="makeOrder" action="#" method="post" novalidate="true">
      <section>
        <label for="name">Твоето име</label>
        <input type="text" name="name" id="name" placeholder="Име" v-model="name">
        <div class="field-errors">
          <small v-for="error in errors.name" :key="error.key">{{ error.message }}</small>
        </div>
      </section>

      <section>
        <label for="phone">Телефон по-който ще може да се свържем с Вас</label>
        <input type="phone" name="phone" id="phone" placeholder="Телефон" v-model="phone">
        <div class="field-errors">
          <small v-for="error in errors.phone" :key="error.key">{{ error.message }}</small>
        </div>
      </section>

      <section>
        <label for="email">Имейл в случей, че не можем да Ви открием по-телефона</label>
        <input type="email" name="email" id="email" placeholder="Имейл" v-model="email">
        <div class="field-errors">
          <small v-for="error in errors.email" :key="error.key">{{ error.message }}</small>
        </div>
      </section>

      <section>
        <label for="message">Съобщение</label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Тук може да оставите съобщение, например: 'Може да се свържете с мен по-всяко време на денонощието!'"
          v-model="message"
        />
      </section>

      <section>
        <button id="make-order" type="submit">Завърши Поръчка</button>
      </section>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'CheckoutModal',
  data() {
    return {
      errors: {
        name: [],
        phone: [],
        email: []
      },
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  },
  methods: {
    validateOrder() {
      const emptyString = '';
      const regexPhoneValidator = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      const regexEmailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const emptyErrorsObject = {
        name: [],
        phone: [],
        email: []
      };
      this.errors = JSON.parse(JSON.stringify(emptyErrorsObject));

      if (this.name.trim() === emptyString) {
        this.errors.name.push({
          message: 'Name is required!',
          key: this.errors.name.length
        });
      }

      if (this.phone.trim() === emptyString) {
        this.errors.phone.push({
          message: 'Phone is required!',
          key: this.errors.phone.length
        });
      } else if (!regexPhoneValidator.test(this.phone)) {
        this.errors.phone.push({
          message: 'Invalid phone number!',
          key: this.errors.phone.length
        });
      }

      if (this.email.trim() === emptyString) {
        this.errors.email.push({
          message: 'Email is required!',
          key: this.errors.email.length
        });
      } else if (!regexEmailValidator.test(this.email)) {
        this.errors.email.push({
          message: 'Invalid email!',
          key: this.errors.email.length
        });
      }

      return JSON.stringify(this.errors) === JSON.stringify(emptyErrorsObject);
    },
    makeOrder(ev) {
      ev.preventDefault();

      if (this.validateOrder()) {
        alert(
          `SUCCESS!
          This is your data:
          - Name: ${this.name.trim()}
          - Phone: ${this.phone.trim()}
          - Email: ${this.email.trim()}
          - Message: ${this.message.trim()}`
        );
      } else {
        alert('ERROR!');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
form#modal-checkout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 35px;

  .field-errors > small {
    color: red;
    display: flex;
    margin-top: 4px;
  }

  > section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px 0;

    label {
      cursor: pointer;
      font-size: 0.9em;
      font-weight: 500;
    }

    textarea#message {
      resize: none;
    }

    button#make-order {
      margin-top: 5px;
      cursor: pointer;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
      background: #229ac8;
      color: white;
      text-transform: uppercase;
    }

    label,
    input {
      padding: 3px 0;
    }

    input,
    textarea {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  }
}
</style>