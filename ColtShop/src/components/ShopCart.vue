<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="tyMessage fadeIn" v-if="showMessage">
      <h1>Thank You For Buying From Colt!</h1>
    </div>
    <div
      class="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title" id="modalFullscreenSizeLabel">Shop Cart</h1>
        </div>
        <div class="modal-body">
          <div
            class="container-fluid d-flex gap-5 p-4 align-items-center justify-content-between"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="d-flex align-items-center justify-content-center">
              <button class="deleteItem" @click="removeShopItem(index)">
                &times
              </button>
              <img :src="item.url" alt="ERR" />
            </div>
            <h4>{{ item.name }}</h4>
            <h4>{{ item.price }}$</h4>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <h3>Total: {{ totalPrice }}$</h3>
          <div class="button-container d-flex gap-3">
            <button
              type="button"
              class="btn btn-secondary"
              @click="toggleShopCart"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="placeOrder">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    toggleShopCart: {
      type: Function,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showMessage: false,
    };
  },
  methods: {
    handletoggleShopCart() {
      this.toggleShopCart();
    },
    removeShopItem(index) {
      this.items.splice(index, 1);
    },
    placeOrder() {
      if (this.items.length === 0) {
        alert("There Are No Items In The Shopping Cart!");
      } else {
        this.showMessage = true;
        setTimeout(() => {
          this.items.splice(0, this.items.length);
          this.toggleShopCart();
          this.showMessage = false;
        }, 4000);
      }
    },
  },
  computed: {
    totalPrice() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    },
  },
};
</script>
<style scoped>
.modal-content {
  background: rgb(0, 0, 0);
  color: white;
}

img {
  height: 5rem;
  width: 5rem;
  object-fit: contain;
  border-radius: 50%;
}
.deleteItem {
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
}
.deleteItem:hover {
  color: red;
}
.tyMessage {
  text-align: center;
  background-image: url(./src/images/1650997913-shutterstock-428604088.png);
  background-repeat: no-repeat;
  background-color: rgb(248, 93, 124);
  background-size: cover;
  z-index: 100;
  display: block;
  height: 80%;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
.tyMessage > h1 {
  background-image: linear-gradient(
    -225deg,
    rgb(248, 93, 124) 0%,
    #20d2f1 29%,
    #ff5874 67%,
    rgb(72, 173, 255) 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
}
</style>
