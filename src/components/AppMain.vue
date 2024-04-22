<template>
  <main>
    <ContainerSmall
      title="Music is LIfe"
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam unde nemo delectus voluptates atque deserunt totam ex, iusto modi?"
      :enabled="true"
      :backgroundClass="'background-gray'"
    />
    <ContainerSmall
      title="Latest Band News"
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam unde nemo delectus voluptates atque deserunt totam ex, iusto modi?"
      :enabled="false"
      :backgroundClass="'background-darkgray'"
    />
  </main>
</template>

<script>
import ContainerSmall from "./ContainerSmall.vue";
export default {
  components: {
    ContainerSmall,
  },
};
</script>

<style lang="scss" scoped></style>
