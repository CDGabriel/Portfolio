<template>
  <header>
    <div class="container-fluid vh-100 vw-100">
      <div class="dropping-texts">
        <div>FAST</div>
        <div>CHEAP</div>
        <div>STYLISH</div>
        <p>Colt</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    this.headerDisplayNone();
  },
  methods: {
    headerDisplayNone() {
      const header = document.querySelector("header");
      window.setTimeout(() => {
        header.classList.add("d-none");
      }, 8000);
    },
  },
};
</script>

<style scoped></style>
