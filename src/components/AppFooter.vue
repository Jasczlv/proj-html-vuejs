<template>
  <AccordionFooter />
  <FullscreenBtn text="VIEW ALL LIVE DATES" link="#" />
  <footer class="background-gray">
    <div class="d-flex flex-column">
      <!-- FOOTER MENU -->
      <div
        class="container-footer d-flex align-items-center justify-content-center justify-content-between p-5"
      >
        <img
          src="/src/assets/avada-music-logo.png"
          alt="nessuna immagine trovata"
        />

        <ul class="d-flex gap-3">
          <li v-for="item in menu">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
      <!-- FOOTER CONTACT US -->
      <div
        class="background-darkgray d-flex justify-content-center align-items-center justify-content-between p-5"
      >
        <div class="d-flex gap-3">
          <span>@ Copyright 2012 - 2020</span>
          <span>|</span>
          <span> AVADA THEME BY THEMEFUSION</span>
          <span>|</span>
          <span> ALL RIGHTS RESERVED </span>
          <span>|</span>
          <span> POWERED BY WORDPRESS</span>
        </div>
        <div></div>
      </div>
    </div>
  </footer>
</template>

<script>
import AccordionFooter from "./AccordionFooter.vue";
import FullscreenBtn from "./FullscreenBtn.vue";
export default {
  components: {
    AccordionFooter,
    FullscreenBtn,
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

<style lang="scss" scoped>
* {
  color: white;
}

.container-footer {
  width: 100%;
  height: 100%;
}

.container-footer > .row > img {
  height: 50px;
}
</style>
