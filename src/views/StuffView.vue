<script>
  // Importing necessary components and modules
  import TitleName from '@/components/TitleName.vue'
  import TextComp from '@/components/TextComp.vue'
  import { RouterLink } from 'vue-router';

  export default {
    components: {
      TitleName,
      TextComp,
      RouterLink
    }
  }
</script>

<template>
   <main class="text-white gridContainerStuff" style="margin-bottom: 50px;">

<!-- Back button -->
<RouterLink class="backButton" to="/">
  <img src="@/assets/imgs/back2.png" alt="back button" class="router-link-button">
</RouterLink>

<!-- Title of the projects section -->
<TitleName class="headlineContainer text-7xl" title="COLLECTION" style="margin-bottom: 3rem;"></TitleName>

<img src="@/assets/imgs/sketch1.png" alt="Sketch 1" style="grid-column: 2; grid-row: 3; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem;">
<img src="@/assets/imgs/sketch2.png" alt="Sketch 2" style="grid-column: 3; grid-row: 3; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem;">
<img src="@/assets/imgs/sketch3.png" alt="Sketch 3" style="grid-column: 4; grid-row: 3; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem;">
<img src="@/assets/imgs/sketch4.png" alt="Sketch 4" style="grid-column: 2; grid-row: 4; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem;">
<img src="@/assets/imgs/sketch5.png" alt="Sketch 5" style="grid-column: 3; grid-row: 4; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem;">

<img src="@/assets/imgs/ceramicBird.png" alt="ceramic bird" style="grid-column: 4; grid-row: 4; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">
<img src="@/assets/imgs/ceramicAcorn.png" alt="ceramic acorn" style="grid-column: 2; grid-row: 5; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">
<img src="@/assets/imgs/ceramicFish.png" alt="ceramic fish" style="grid-column: 3 / span 2; grid-row: 5; padding-top: 3rem; padding-left: 3rem; padding-bottom: 3rem; align-self: center;">

<img src="@/assets/imgs/egg1.png" alt="egg1" style="grid-column: 2; grid-row: 6; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">
<img src="@/assets/imgs/egg2.png" alt="egg2" style="grid-column: 3; grid-row: 6; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">
<img src="@/assets/imgs/egg3.png" alt="egg3" style="grid-column: 4; grid-row: 6; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">

<img src="@/assets/imgs/winegum.png" alt="wingum painting" style="grid-column: 2 / span 2; grid-row: 7; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">
<img src="@/assets/imgs/sunflowers.png" alt="sunflowers painting" style="grid-column: 4; grid-row: 7; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">

<img src="@/assets/imgs/paintingBirds.png" alt="birds painting" style="grid-column: 2 / span 2; grid-row: 8; padding-top: 3rem; padding-right: 16rem; padding-bottom: 3rem; align-self: center;">
<img src="@/assets/imgs/geisha.png" alt="geisha painting" style="grid-column: 3 /span 2; grid-row: 8; padding-top: 3rem; padding-left: 16rem; padding-bottom: 3rem; align-self: center;">

<img src="@/assets/imgs/greenhouse1.png" alt="greenhouse paingting 1" style="grid-column: 2; grid-row: 9; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">
<img src="@/assets/imgs/greenhouse2.png" alt="greenhouse paingting 2" style="grid-column: 3; grid-row: 9; padding-top: 3rem; padding-right: 3rem; padding-bottom: 3rem; align-self: center;">
<img src="@/assets/imgs/ceramicVase.png" alt="ceramic vase" style="grid-column: 4; grid-row: 9; padding-top: 3rem; padding-right: 6rem; padding-left: 3rem; padding-bottom: 3rem; align-self: center;">

<!-- Placeholder -->
<div class="placeholder2">
      <TextComp class="m-1" info="&nbsp;"></TextComp>
    </div>
</main>
</template>

<style scoped>

.placeholder2 {
  grid-column: 2;
  grid-row: 10;
  margin-bottom: 30vh;
}

 .gridContainerStuff {
    display: grid;
      grid-template-columns: 1.2fr 2fr 2fr 2fr 1fr ;
      grid-template-rows: 1fr 1fr 3fr 3fr;
      height: 100vh;
      width: 100vw;
      position: static; /* Set the grid container to relative positioning */
  }
</style>
