<script>
import UntoldStories from "./UntoldStories.vue";
import OffCanvas from "./OffCanvas.vue";
export default {
  components: {
    UntoldStories,
    OffCanvas,
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
          <OffCanvas
            one="Home"
            two="Meet The Band"
            three="Live Dates"
            four="Latest News"
            five="Albums"
            six="Fans"
          />
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

.container-big {
  max-width: 1890px;
  margin: 0 auto;
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
