<script>
export default {
    props: ['info'],
}
</script>

<template>
 <div>
        <div>
            <h2 class="text-mainAccent bakbak-one-regular sizing">{{info}}</h2>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');

.bakbak-one-regular {
  font-family: "Bakbak One", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1em;
}

.sizing {
  font-size: 2em;
}
 
</style>