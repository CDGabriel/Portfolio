<template>
  <Navbar v-if="visibleNavbar" :toggleShopCart="toggleShopCart">
    <template #accLink
      ><a class="nav-link">
        <button @click="switchToAccessories">Accesories</button>
      </a></template
    >
    <template #appLink>
      <a class="nav-link">
        <button @click="switchToClothes">Apparel</button>
      </a></template
    >
    <template #shopNumber>{{ itemList.length }}</template>
  </Navbar>
  <Header v-if="isFirstVisit"></Header>
  <main>
    <div class="row container-fluid p-0 m-0 z-1 vh-100 flip-card">
      <div
        class="container-fluid w-50 f-background z-1 flip-card-front"
        ref="femaleBackground"
      >
        <FemaleClothes
          v-if="currentGender === 'Female' && currentShop === 'Clothes'"
          :addToCart="addToCart"
        ></FemaleClothes>
        <FemaleAccessories
          v-if="currentGender === 'Female' && currentShop === 'Accessories'"
          :addToCart="addToCart"
        ></FemaleAccessories>
        <button
          type="button"
          class="b-center left-button"
          @click="femaleChoice"
          ref="leftButton"
        >
          Female clothes
        </button>
      </div>
      <div
        class="container-fluid w-50 m-background z-1 flip-card-back"
        ref="maleBackground"
      >
        <MaleClothes
          v-if="currentGender === 'Male' && currentShop === 'Clothes'"
          :addToCart="addToCart"
        ></MaleClothes>
        <MaleAccessories
          v-if="currentGender === 'Male' && currentShop === 'Accessories'"
          :addToCart="addToCart"
        ></MaleAccessories>
        <button
          type="button"
          class="b-center right-button"
          @click="maleChoice"
          ref="rightButton"
        >
          Male clothes
        </button>
      </div>
    </div>
    <div class="pick-query" v-if="currentGender === ''">
      <h1>Pick your side</h1>
    </div>
    <div class="switchButton" @click="switchGender" v-if="visibleNavbar">
      Switch to {{ oppositeGender }}
    </div>
    <div class="toast" v-if="showToast" @transitionend="showToast = false">
      {{ addedItem }} added to Cart.
    </div>
  </main>
  <Footer v-if="visibleNavbar"></Footer>
  <ShopCart
    v-if="shopCart"
    :toggleShopCart="toggleShopCart"
    :items="itemList"
  ></ShopCart>
</template>

<script>
import { ref } from "vue";
import { body } from "../variables";
export default {
  data() {
    return {
      isFirstVisit: true,
      visibleNavbar: false,
      currentGender: "",
      itemList: [],
      addedItem: "",
      showToast: false,
      currentShop: "Clothes",
      shopCart: false,
    };
  },
  mounted() {
    this.firsVisit();
    this.maleBackground = this.$refs.maleBackground;
    this.femaleBackground = this.$refs.femaleBackground;
    this.leftButton = this.$refs.leftButton;
    this.rightButton = this.$refs.rightButton;
  },
  methods: {
    toggleShopCart() {
      this.shopCart = !this.shopCart;
    },
    switchToClothes() {
      this.currentShop = "Clothes";
    },
    switchToAccessories() {
      this.currentShop = "Accessories";
    },
    addToCart(item) {
      this.itemList.push(item);
      this.addedItem = item.name;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    },
    firsVisit() {
      const visited = localStorage.getItem("visited");
      if (visited) {
        this.isFirstVisit = false;
      } else {
        localStorage.setItem("visited", "true");
      }
    },
    removeButtons() {
      const flipCard = document.querySelector(".flip-card");
      this.leftButton.remove();
      this.rightButton.remove();
      flipCard.classList.remove("vh-100");
    },
    femaleChoice() {
      this.currentGender = "Female";
      this.visibleNavbar = true;
      this.maleBackground.classList.remove("w-50");
      this.maleBackground.classList.add("div-0");
      this.femaleBackground.classList.remove("w-50");
      this.femaleBackground.classList.add("div-100");
      setTimeout(() => {
        this.maleBackground.classList.add("d-none");
      }, 870);
      this.removeButtons();
      body.style.background =
        "linear-gradient(to right, #ffcaca 5%, rgb(248, 93, 124))";
    },
    maleChoice() {
      this.currentGender = "Male";
      this.visibleNavbar = true;
      this.maleBackground.classList.remove("w-50");
      this.maleBackground.classList.add("div-100");
      this.femaleBackground.classList.remove("w-50");
      this.femaleBackground.classList.add("div-0");
      setTimeout(() => {
        this.femaleBackground.classList.add("d-none");
      }, 870);
      this.removeButtons();
      body.style.background =
        "linear-gradient(to right, rgb(72, 173, 255) 5%, #6293fc)";
    },
    switchGender() {
      if (this.currentGender === "Female") {
        this.maleChoice();
        this.maleBackground.classList.remove("d-none");
        this.maleBackground.classList.remove("div-0");
      } else {
        this.currentGender = "Female";
        this.femaleChoice();
        this.femaleBackground.classList.remove("d-none");
        this.femaleBackground.classList.remove("div-0");
      }
    },
  },
  computed: {
    oppositeGender() {
      return this.currentGender === "Male" ? "Female" : "Male";
    },
    itemName() {
      return (this.addedItem = this.itemList[0].name);
    },
  },
};
</script>

<style scoped>
/* Switch Button */

.switchButton {
  z-index: 1000;
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 3px 5px;
  background-color: white;
  color: black;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-style: italic;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5),
    inset 0px 0px 40px rgba(255, 255, 255, 0.9);
}
.switchButton:hover {
  background-image: linear-gradient(
    144deg,
    rgb(248, 93, 124),
    rgb(72, 173, 255)
  );
}
.toast {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  z-index: 1002;
  min-width: 150px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes fadeToast {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
