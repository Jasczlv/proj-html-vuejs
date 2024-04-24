<template>
  <button class="fullscreen-btn" :href="link">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.fullscreen-btn {
  border: none;
  width: 100%;
  height: 150px;
  background-color: #ec4858;
  color: white;
}

.fullscreen-btn:hover {
  background-color: white;
  color: black;
}
</style>
