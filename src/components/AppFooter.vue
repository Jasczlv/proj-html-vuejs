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

        <ul class="d-flex gap-3 lightgray">
          <li v-for="item in menu">
            <a class="lightgray" href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
      <!-- FOOTER CONTACT US -->
      <div
        class="background-darkgray d-flex justify-content-center align-items-center justify-content-between p-5"
      >
        <div class="d-flex gap-3 lightgray">
          <span>@ Copyright 2012 - 2020</span>
          <span>|</span>
          <span> AVADA THEME BY THEMEFUSION</span>
          <span>|</span>
          <span> ALL RIGHTS RESERVED </span>
          <span>|</span>
          <span> POWERED BY WORDPRESS</span>
        </div>
        <div class="d-flex gap-3 lightgray fs-5">
          <a class="lightgray" href="www.facebook.com"
            ><font-awesome-icon icon="fa-brands fa-facebook-f"
          /></a>
          <a class="lightgray" href="#"
            ><font-awesome-icon icon="fa-brands fa-twitter"
          /></a>
          <a class="lightgray" href="#"
            ><font-awesome-icon icon="fa-brands fa-instagram"
          /></a>
          <a class="lightgray" href="#"
            ><font-awesome-icon icon="fa-brands fa-youtube"
          /></a>
        </div>
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
.container-footer {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}

.container-footer > .row > img {
  height: 50px;
}

svg {
  background-color: #323844;
  border-radius: 5px;
  padding: 8px;
  aspect-ratio: 1;
}

a:hover {
  color: white;
}
</style>
