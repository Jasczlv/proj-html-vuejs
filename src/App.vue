<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      containersData: [
        {
          title: "Music is LIfe",
          paragraph:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime unde porro eligendi consectetur iste, vitae reiciendis temporibus minus nobis culpa.",
          enabled: true,
          backgroundClass: "background-gray",
        },
        {
          title: "Latest Band News",
          paragraph:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime unde porro eligendi consectetur iste, vitae reiciendis temporibus minus nobis culpa.",
          enabled: false,
          backgroundClass: "background-darkgray",
        },
      ],
      menuData: [
        "Home",
        "Meet The Band",
        "Live Dates",
        "Latest News",
        "Albums",
        "Fans",
      ],
    };
  },
};
</script>

<template>
  <AppHeader :menu="menuData" />
  <AppMain :containers="containersData" />
  <AppFooter :menu="menuData" />
</template>

<style scoped></style>
