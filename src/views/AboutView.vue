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
  <main class="text-white gridContainerAbout" style="margin-bottom: 50px;">

    <!-- Back button -->
    <RouterLink class="backButton" to="/">
      <img src="@/assets/imgs/back2.png" alt="back button" class="router-link-button">
    </RouterLink>

    <!-- Title of the projects section -->
    <TitleName class="headlineContainer text-7xl" title="ABOUT"></TitleName>
    
    <!-- Picture -->
      <div class="frogImage">
        <img src="@/assets/imgs/meAndFrog.png" alt="Me on a frog">
      </div>

    <!-- floaty text -->
    <div class="floatText">
        <TitleName title="hello world!"> </TitleName>
      </div>
      
      <!-- about text -->
      <div class="aboutText">
          <h1>My name is Mille Rørbæk and i'm currently diving deep into the world of Coded Design at The Danish School of Media and Journalism (DMJX). <br>Before that, I graduated in public administration from EUX and spent some time indulging my creativity at Holbæk's Art School. My focus right now is creative thinking and exploration, whether it's through pixels or paintbrushes. <br>I hope to evoke emotions with my work and leave an impression.</h1>
      <!-- contact info     -->
    <h1 style="padding-top: 3rem; padding-bottom: 1vw; font-size: 1.5rem;"  class="text-mainAccent" >Get in contact:</h1>   
        <p>mille.rorbak@hotmail.com</p>    
    <div class="socialLinks">
        <a href="https://www.instagram.com/millesgalleri/" target="_blank">
            <img class="logoStyle" src="@/assets/imgs/igLogo.png" alt="Instagram">
        </a>    
        <a href="https://github.com/MilleRrbk" target="_blank">
            <img class="logoStyle" src="@/assets/imgs/gitLogo.png" alt="GitHub">
        </a>    
        <a href="https://www.linkedin.com/in/mille-r%C3%B8rb%C3%A6k-13a774176/" target="_blank">
            <img class="logoStyle" src="@/assets/imgs/linkedinLogo.png" alt="LinkedIn">
        </a>  
    </div>  
</div>

  </main>
</template>

<style scoped>

.socialLinks a {
    display: inline-block;
    margin-right: 2vw; 
    margin-top: 2vw; 
}
.logoStyle {
    width: 3vw;
}
.aboutText {
    grid-column: 2;
    grid-row: 2;
    align-self: top;
    padding-top: 10rem;
    padding-right: 3rem;
}

.frogImage {
    grid-column: 3;
    grid-row: 2;
    padding: 6rem;
    position: static;
    width: 30rem;
}

.floatText {
    grid-column: 3;
    grid-row: 2;
    justify-self: center;
    margin-top: 7rem;
    margin-left: 13rem;
    font-size: x-large;
    animation: hoverAnimation 2s infinite alternate ease-in-out; /* apply animation */
}
 

 
</style>
