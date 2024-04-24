<script>
import UntoldStories from "./UntoldStories.vue";
import OffCanvas from "./OffCanvas.vue";
export default {
  components: {
    UntoldStories,
    OffCanvas,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {};
  },
};
</script>

<template>
  <div class="background-header d-flex flex-column">
    <header>
      <div class="container-header container-big">
        <div
          class="row flex-nowrap justify-content-between justify-content-center align-items-center px-4 py-3"
        >
          <img
            src="/src/assets/avada-music-logo.png"
            alt="nessuna immagine trovata"
            class="col-auto"
          />
          <OffCanvas :items="menu" />
        </div>
      </div>
    </header>
    <UntoldStories />
  </div>
</template>

<style scoped>
* {
  color: white;
}

.container-header > .row > img {
  height: 50px;
}

header {
  height: 140px;
}

.background-header {
  background-image: url("../assets/home_slider.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 800px;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
