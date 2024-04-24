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
  <!-- Main container for projects -->
  <main class="text-white gridContainerProjects">

    <!-- Back button -->
    <RouterLink class="backButton" to="/">
      <img src="@/assets/imgs/back2.png" alt="back button" class="router-link-button">
    </RouterLink>

    <!-- Title of the projects section -->
    <TitleName class="headlineContainer text-7xl" title="CODED PROJECTS"></TitleName>
    

    <!-- Project 1 -->
    <div class="image-item relative group overflow-hidden duration-500 " style="width: 70vw; height: 70vh; border-radius: 0.6rem; ">
      <div>
        <video class="duration-500 object-cover" style="border-radius: 0.6rem; height: auto; width: 70vw; object-position: center top; box-shadow: 0 0 2rem #FF4E8F;" autoplay loop muted>
          <source src="@/assets/mp4s/fishVideo.mp4" type="video/mp4">
        </video>
        <div class="absolute left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div class="absolute -z-10 left-0 duration-500 group-hover:opacity-70 group-hover:bg-mainAccent" style="width: 70vw; height: 60vh;"></div>
          <span class="text-2xl">X-ray fish skeleton</span>
          <p style="padding-top: 6%; padding-bottom: 2%;" class="text-1xl">
            Processing.org sketch
          </p>
        </div>
      </div>
    </div>

    <!-- Project 2 -->
    <div class="image-item2 relative group overflow-hidden duration-500" style="width: 30vw; height: 58vh; border-radius: 0.6rem;">
      <div>
        <video class="duration-500 object-cover" style="border-radius: 0.6rem; height: 50vh; width: 35vw; object-position: center; box-shadow: 0 0 2rem #FF4E8F;" autoplay loop muted>
          <source src="@/assets/mp4s/fronk.mp4" type="video/mp4">
        </video>
        <div class="absolute left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div class="absolute -z-10 left-0 duration-500 group-hover:opacity-70 group-hover:bg-mainAccent" style="width: 70vw; height: 60vh;"></div>
          <span class="text-2xl">Froggy</span>
          <p style="padding-top: 6%; padding-bottom: 10%;" class="text-1xl">
            Processing.org sketch
          </p>
        </div>
      </div>
    </div>

    <!-- Project 3 -->
    <div class="image-item3 relative group overflow-hidden duration-500" style="width: 30vw; height: auto; border-radius: 0.6rem; margin-left: 2vw;">
      <div>
        <video class="duration-500 object-cover" style="border-radius: 0.6rem; height: 50vh; width: 35vw; object-position: center; box-shadow: 0 0 2rem #FF4E8F;" autoplay loop muted>
          <source src="@/assets/mp4s/scupltureVideo.mp4" type="video/mp4">
        </video>
        <div class="absolute left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div class="absolute -z-10 left-0 duration-500 group-hover:opacity-70 group-hover:bg-mainAccent" style="width: 70vw; height: 60vh;"></div>
          <span class="text-2xl">Infinity loop</span>
          <p style="padding-top: 6%; padding-bottom: 10%;" class="text-1xl">
            Processing.org sketch
          </p>
        </div>
      </div>
    </div>

    <!-- Project 4 -->
    <div class="image-item4 relative group overflow-hidden duration-500" style="width: 70vw; height: 100vh; border-radius: 0.6rem;">
      <div>
        <img src="@/assets/imgs/studieKort.png" class="group-hover:scale-10 duration-500 object-cover" style="border-radius: 0.6rem; height: 92vh; width: 70vw; object-position: center center; box-shadow: 0 0 2rem #FF4E8F;" autoplay loop muted>
        <div class="absolute left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div class="absolute -z-10 left-0 duration-500 group-hover:opacity-70 group-hover:bg-mainAccent" style="width: 70vw; height: 60vh;"></div>
          <span class="text-2xl">New ID cards for DMJX</span>
          <p style="padding-top: 3%;" class="text-1xl">
            Group project designing ID cards for our school - using Blender and Processing
          </p>
        </div>
      </div>
    </div>

 <!-- Project 5 -->
 <div class="image-item5 relative group overflow-hidden duration-500" style="width: 30vw; height: 58vh; border-radius: 0.6rem;">
      <div>
        <video class="duration-500 object-cover" style="border-radius: 0.6rem; height: 50vh; width: 35vw; object-position: center; box-shadow: 0 0 2rem #FF4E8F;" autoplay loop muted>
          <source src="@/assets/mp4s/p3d.mp4" type="video/mp4">
        </video>
        <div class="absolute left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div class="absolute -z-10 left-0 duration-500 group-hover:opacity-70 group-hover:bg-mainAccent" style="width: 70vw; height: 60vh;"></div>
          <span class="text-2xl">3D sphere</span>
          <p style="padding-top: 6%; padding-bottom: 10%;" class="text-1xl">
            Processing.org sketch
          </p>
        </div>
      </div>
    </div>

    <!-- Placeholder -->
    <div class="placeholder">
      <TextComp class="m-1" info="&nbsp;"></TextComp>
    </div>

  </main>
</template>

<style scoped>
.image-item {
  grid-column: 2 / span 3;
  grid-row: 3 / span 2;
  margin-bottom: 10vh;
  margin-top: 10vh;
}

.image-item2 {
  grid-column: 2 / span 3;
  grid-row: 5 / span 2;
  margin-bottom: 10vh;
  
}

.image-item3 {
  grid-column: 3 / span 3;
  grid-row: 5 / span 2;
  margin-bottom: 10vh;
  
}

.image-item4 {
  grid-column: 2 / span 3;
  grid-row: 7 / span 2;
  margin-bottom: 10vh;
  
}

.image-item5 {
  grid-column: 2;
  grid-row: 9;
  margin-bottom: 20vh;
}

.placeholder {
  grid-column: 2;
  grid-row: 10;
  margin-bottom: 20vh;
}
</style>
