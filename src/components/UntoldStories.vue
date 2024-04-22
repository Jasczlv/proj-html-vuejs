<script>
export default {};
</script>
<template>
  <div
    class="container d-flex flex-column flex-grow-1 justify-content-center align-items-center"
  >
    <h1 class="title text-center">Untold Stories</h1>
    <div>
      <span class="text-center"
        >There is an untold story behind every favorite song.</span
      >
    </div>
    <div class="buttons-container">
      <button class="button-left">LATEST ALBUM</button>
      <button class="button-right">LIVE DATES</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: white;
}

.title {
  font-size: 100px;
  font-weight: 700;
}

button {
  border: none;
  padding: 10px;
}

.button-left {
  background-color: #ec4858;
}
.button-right {
  background-color: #ffffff00;
  border: 1px solid white;
}

.buttons-container {
  display: flex;
  margin-top: 40px;
  gap: 20px;
  align-items: center;
}

.button-right:hover {
  background-color: white;
  color: black;
}
</style>
