<template>
<section data-scroll-section class="content" ref="contentSection">
  <!-- :style="{ backgroundColor: bgColor, color: txtColor }"  -->
<Marquee :text= textm :text2=texts />


    <Card
      v-for="card in cards"
      :key="card.index"
        :top="card.top"
        :left="card.left"
        :index="card.index"
        :text="card.text"
      />
</section>
</template>

<script setup>
import Card from './Card.vue';
import Marquee from './Marquee.vue';

import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);

const contentSection = ref(null);
const props = defineProps({
  textm: String,
  texts: String,
  image: String,
  bgColor: String,
  txtColor: String,
  cards: Array
});

onMounted(() => {
  const body = document.querySelector('body');

  ScrollTrigger.create({
    trigger: contentSection.value,
    start: "top 10%",
    markers: true,
    id: 5,
    onEnter: () => {
      console.log('enter',props.txtColor, props.bgColor);

      gsap.to(body, {
        backgroundColor:props.bgColor,
        color: props.txtColor,
        duration: .4,
        ease:'ease.in'
      });
    },
  });
});


</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";
.content{
    width: 100%;
    height: 100vh;
    @extend %center;
    position: relative;
    overflow: hidden;
}

</style>