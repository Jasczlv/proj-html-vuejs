<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="background-header">
    <header>
      <div class="container">
        <div
          class="row flex-nowrap justify-content-between justify-content-center align-items-center p-3"
        >
          <img
            src="/src/assets/avada-music-logo.png"
            alt="nessuna immagine trovata"
            class="col-auto"
          />
          <p class="col-auto">Lorem</p>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="title">Untold Stories</h1>
        <div>
          <span>There is an untold story behind every favorite song.</span>
        </div>
        <div class="buttons-container">
          <button class="button-left">LATEST ALBUM</button>
          <button class="button-right">LIVE DATES</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  color: white;
}

.title {
  font-size: 100px;
  font-weight: 700;
}

.buttons-container {
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
  width: 210px;
}

button {
  border: none;
}

.button-left {
  background-color: #ec4858;
}
.button-right {
  background-color: #ffffff00;
  border: 1px solid white;
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
</style>
