<template>
  <div :class="prop.backgroundClass" class="height250">
    <div
      class="d-flex flex-column justify-content-center align-items-center container-small"
    >
      <span v-if="prop.enabled" class="barra"></span>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>{{ prop.title }}</h1>
        <span class="barra-sottile mb-4"></span>
        <p>{{ prop.paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prop: {
      type: Object,
      required: true,
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
  font-weight: 700;
  font-size: 50px;
}

p {
  color: #7d7b8d;
  text-align: center;
}

.barra-sottile {
  border-top: 0.5px solid #444e62;
  width: 180px;
  margin-top: 10px;
}

.height250 {
  height: 250px;
}
</style>
