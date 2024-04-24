<script>
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
    <div class="gridContainer">

    <div class="shrimpContainer">
      <img class="shrimpAnimation w-full" src="@/assets/imgs/shrimppx.png" alt="pixelated shrimp">
    </div>

    <div class="titleContainer">
      <TitleName class="bakbak-one-regular text-mainText text-8xl" title="MILLE RØRBÆK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"></TitleName>
      <TextComp class="m-1" info="PORTFOLIO"></TextComp>
    </div>
    <nav class="navContainer bakbak-one-regular text-mainText m-1">
        <div class="navCategories">
            <RouterLink to="/projects">coded projects</RouterLink><br>
        </div>
        <div class="navCategories">
            <RouterLink to="/stuff">collection</RouterLink><br>
        </div>
        <div >
            <RouterLink to="/about">about me</RouterLink>
        </div>
    </nav>
  </div>
</template>

<style scoped>

.shrimpContainer {
  position: absolute;
  grid-column: 4 / span 2;
  grid-row: 2 / span 3;
  justify-self: end;
  margin-right: 17vw;
  margin-top: 14vw;
  width: 25vw;
  min-width: 20em;  
}

.shrimpAnimation{
  /*ease-in-out for at smoother transition */
  animation: rotateShrimp 1s infinite alternate ease-in-out; /* Apply the animation */
}

@keyframes rotateShrimp {
  0% {
    transform: rotate(-3deg); /* Start rotation slightly left */
  }
  100% {
    transform: rotate(3deg); /* Rotate slightly right */
  }
}
</style>