<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterView,
    RouterLink
  },
};

</script>

<template>

  <div id="app">
    <video id="background-video" autoplay loop muted>
      <source src="@/assets/mp4s/static2.mp4" type="video/mp4">
      <!-- Add additional source elements for other video formats -->
    </video>
  </div>
   <div class="cornerTop">
    <img class="" src="@/assets/imgs/cornerTopLeft.png" alt="Top Left Corner">
  </div>
  
  <div class="cornerBottom">
    <img class="" src="@/assets/imgs/cornerBottomRight.png" alt="Bottom Right Corner">
  </div>
  <RouterView></RouterView>

</template>

<style scoped>
#app {
  /* Ensure the video fills the entire viewport */
  width: 100%;
  height: 100%;
  overflow: hidden; /* Hide any content overflowing from the video */
}

#background-video {
  /* Set the video as background */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the video covers the entire container */
  opacity: 0.02;
  z-index: -1;
}

/* Corners are placed outside of the grid */
.cornerTop,
.cornerBottom {
  margin: 3vw;
  pointer-events: none;;
}

.cornerTop {
  width: 8vw;
  position: fixed;
  top: 0;
  left: 0;
}

.cornerBottom {
  width: 8vw;
  position: fixed;
  bottom: 0;
  right: 0; 
}

</style>