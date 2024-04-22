<template>
  <div :class="backgroundClass">
    <div
      class="d-flex flex-column justify-content-center align-items-center container-small"
    >
      <span v-if="enabled === true" class="barra"></span>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>{{ title }}</h1>
        +
        <span class="barra-sottile mb-4"></span>
        <p>{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    paragraph: {
      type: String,
    },
    enabled: {
      type: Boolean,
    },
    backgroundClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
div.d-flex {
  height: 100%;
}

.container-small {
  max-width: 700px;
  margin: 0 auto;
}

.barra {
  width: 300px;
  height: 10px;
  background-color: #ec4858;
}

h1 {
  color: white;
}

p {
  color: #7d7b8d;
  text-align: center;
}

.barra-sottile {
  border-top: 0.5px solid #444e62;
  width: 180px;
  margin-top: -15px;
}

.background-gray {
  background-color: #323844;
  height: 250px;
}
.background-darkgray {
  background-color: #252a33;
  height: 250px;
}
</style>
