<template>
  <nav class="navbar navbar-expand-sm fixed-top rounded fadeIn navBackground">
    <div class="container-fluid d-flex flex-row justify-content-between">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <h1 class="fw-bold brand navbar-text">Colt</h1>
          </a>
        </li>
        <li class="nav-item">
          <slot name="accLink"> </slot>
        </li>
        <li class="nav-item">
          <slot name="appLink"> </slot>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">
            <button>Contact</button>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link shopOpen z-10000"
            style="cursor: pointer"
            @click="toggleShopCart"
            ><i
              class="fa fa-solid fa-cart-shopping position-relative hide-p navbar-text"
            >
              <p class="shopping-cart-number position-absolute hide-p">
                <slot name="shopNumber"></slot>
              </p>
            </i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style></style>

<script>
export default {
  props: {
    toggleShopCart: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handletoggleShopCart() {
      this.toggleShopCart();
    },
  },
};
</script>
