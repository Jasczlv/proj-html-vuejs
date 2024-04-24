<template>
  <font-awesome-icon
    class="col-auto cursor-pointer"
    :icon="['fas', 'bars']"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasTop"
    aria-controls="offcanvasTop"
  />

  <div
    class="offcanvas offcanvas-top"
    tabindex="-1"
    id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasTopLabel">
        <img
          src="/src/assets/avada-music-logo.png"
          alt="nessuna immagine trovata"
          class="col-auto"
        />
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-flex justify-content-center align-items-center">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <a :href="'#'">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
* {
  color: white;
}

.offcanvas {
  height: 450px;
}

li {
  margin-bottom: 15px;
}

li:hover {
  cursor: pointer;
}

.offcanvas-body {
  padding: 0;
  text-align: center;
  font-size: 20px;
}

.offcanvas.offcanvas-top {
  background-color: #ec4858;
}
</style>
