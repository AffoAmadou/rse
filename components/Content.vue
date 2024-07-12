<template>
  <section class="content" ref="contentSection">

    <!-- <Marquee 
id="marquee"
 :text= props.textm :text2=props.texts /> -->


    <Card v-for="card in props.cards" :key="card.index" :top="card.top" :left="card.left" :index="card.index"
      :text="card.text" :colors="props.cardsColors" />
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
  cards: Array,
  cardsColors: Object,
  lineColor: String,
});

onMounted(() => {
  const body = document.querySelector('body');

  const cards = document.querySelectorAll('.card__index');

  const carsTexts = document.querySelectorAll('.card__bottom__text');

  const btn = document.querySelectorAll('.p__circle');

  const lineV = document.querySelectorAll(".line__vertical")
  const lineH = document.querySelectorAll(".line__horizontal")

  ScrollTrigger.create({
    trigger: contentSection.value,
    start: "top top",
    id: 5,
    onEnter: () => {

      gsap.to(body, {
        backgroundColor: props.bgColor,
        color: props.txtColor,
        duration: .4,
        ease: 'ease.in'
      });

      gsap.to(cards, {
        color: props.cardsColors.number,
        duration: .4,
        ease: 'ease.in'
      });

      gsap.to(carsTexts, {
        color: props.cardsColors.text,
        duration: .4,
        ease: 'ease.in'
      })

      gsap.to(btn, {
        fill: props.cardsColors.text,
        duration: .4,
        ease: 'ease.in'
      })

      gsap.to(lineV, {
        borderColor: props.lineColor,
        duration: 2,
        stagger: .1,
      });

      gsap.to(lineH, {
        borderColor: props.lineColor,
        duration: 2,
        stagger: .1,
      });
    },
    onEnterBack: () => {
      gsap.to(body, {
        backgroundColor: props.bgColor,
        color: props.txtColor,
        duration: .4,
        ease: 'ease.in'
      });

      gsap.to(cards, {
        color: props.cardsColors.number,
        duration: .4,
        ease: 'ease.in'
      });

      gsap.to(carsTexts, {
        color: props.cardsColors.text,
        duration: .4,
        ease: 'ease.in'
      })

      gsap.to(btn, {
        fill: props.cardsColors.text,
        duration: .4,
        ease: 'ease.in'
      })

      gsap.to(lineV, {
        borderColor: props.lineColor,
        duration: 2,
        stagger: .1,
      });

      gsap.to(lineH, {
        borderColor: props.lineColor,
        duration: 2,
        stagger: .1,
      });
    }
  });
});


</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";

.content {
  width: 100%;
  height: 100vh;
  @extend %center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
</style>