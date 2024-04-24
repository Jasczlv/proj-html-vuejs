<template>
  <main>
    <ContainerSmall
      v-for="(container, index) in containers"
      :key="index"
      :prop="container"
    />
    <section class="background-darkgray">
      <div class="container-middle pb-5">
        <div class="grid-container">
          <div class="box full">
            <img src="../assets/blog_music_techo.jpg" alt="" />
            <div class="background-gray description">
              <h5 class="orange">Technology and music</h5>
              <p class="gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, explicabo?
              </p>
            </div>
          </div>
          <div class="box half">
            <img src="../assets/blog-post1.jpg" alt="" />
            <div class="background-gray description">
              <h5 class="orange">Taking it back to the old school</h5>
              <p class="gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, explicabo?
              </p>
            </div>
          </div>
          <div class="box half">
            <img src="../assets/blog-post3.jpg" alt="" />
            <div class="background-gray description">
              <h5 class="orange">While my guitar gently weeps</h5>
              <p class="gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, explicabo?
              </p>
            </div>
          </div>
          <div class="box half">
            <img src="../assets/blog-post4.jpg" alt="" />
            <div class="background-gray description">
              <h5 class="orange">It just sounds better</h5>
              <p class="gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, explicabo?
              </p>
            </div>
          </div>
          <div class="box half">
            <img src="../assets/blog-post2.jpg" alt="" />
            <div class="background-gray description">
              <h5 class="orange">Sharing the stage with a legend</h5>
              <p class="gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, explicabo?
              </p>
            </div>
          </div>
          <div class="box full">
            <img src="../assets/blog_flavor_rock.jpg" alt="" />
            <div class="background-gray description">
              <h5 class="orange">The flavor of rock</h5>
              <p class="gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, explicabo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FullscreenBtn text="VIEW ALL LIVE DATES" link="#" />
    <section class="img-background-phrase">
      <div class="d-flex justify-content-center align-items-center">
        <p>
          "I just listened to it and said to myself, "Man, I really love this
          album." Still, today, it just sounds so fresh. It sounds full of
          ideas. These guys knew what they were doing. They're good. And they're
          inventive. I haven't heard anything this year that's as inventive. I
          don't really expect to."
        </p>
        <img
          src="C:\dev\Progetti\proj-html-vuejs\src\assets\band_interview_play_icon.png"
          alt=""
          href="#"
        />
      </div>
    </section>
    <ContainerSmall :prop="live" />
  </main>
</template>

<script>
import ContainerSmall from "./ContainerSmall.vue";
import FullscreenBtn from "./FullscreenBtn.vue";
export default {
  data() {
    return {
      live: {
        title: "Live Dates",
        paragraph:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime unde porro eligendi consectetur iste, vitae reiciendis temporibus minus nobis culpa.",
        enabled: false,
        backgroundClass: "background-darkgray",
      },
    };
  },
  components: {
    ContainerSmall,
    FullscreenBtn,
  },
  props: {
    containers: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: repeat (12, 1fr);
  gap: 20px;
}

.full {
  grid-column: span 8;
  grid-row: span 3;
}

.full > img {
  width: 100%;
  height: 235px;
}

.half {
  grid-column: span 4;
  grid-row: span 6;
}

.background-darkgray {
  background-color: #252a33;
}

h5.orange {
  font-weight: 700;
}

p.gray {
  font-size: 16px;
}

.description {
  padding: 20px;
  max-width: 100%;
}

.padding-card {
  padding: 15px;
}

.img-background-phrase {
  background-image: url("../assets/home-testimonial-parallax.jpg");
  height: 800px;
}

.img-background-phrase > div.d-flex {
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
}

div.d-flex > p {
  color: white;
  max-width: 50%;
  text-align: center;
  font-size: 20px;
  font-style: italic;
}

div.d-flex > img:hover {
  cursor: pointer;
}
</style>
