<template>
  <section data-scroll-section class="text__reveal" ref="textSection">
    <component :style="{
      width: props.icons[0].width,
      height: props.icons[0].height,
      top: props.icons[0].top,
      left: props.icons[0].left,
      transform: props.icons[0].transform,
      zIndex: '0',
    }" :is="firstIcon" :color=props.icons[0].fill class="icon" />


    <component v-if="props.icons[1]" :style="{
      width: props.icons[1].width,
      height: props.icons[1].height,
      top: props.icons[1].top,
      left: props.icons[1].left,
      transform: props.icons[1].transform,
      zIndex: '0',
    }" :is="secondIcon" :color=props.icons[1].fill class="icon" />

    <p v-if="isMobileT" ref="textRevealRef" class="text__reveal__content" v-html="props.textMobile"></p>
    <p v-else ref="textRevealRef" class="text__reveal__content" v-html="props.text"></p>
  </section>
</template>
<!-- :style="{ backgroundColor: bg }"
  :style="{ color: textColor }" -->
<script setup>
import { onMounted, ref } from 'vue';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from "mobile-device-detect";

gsap.registerPlugin(ScrollTrigger);


const textSection = ref(null);
const isMobileT = isMobile;
console.log(isMobileT);

const props = defineProps({
  text: {
    type: String,
  },
  bg: {
    type: String,
  },
  textColor: {
    type: String,
  },
  lineColor: {
    type: String,
    default: '#005454',
  },
  icons: {
    type: Array,
    default: () => [],
  },
});

const textRevealRef = ref(null);

// Define the components using async imports
const components = [
  defineAsyncComponent(() => import('../components/icons/environnement.vue')),
  defineAsyncComponent(() => import('../components/icons/star.vue')),
  defineAsyncComponent(() => import('../components/icons/social.vue')),
  defineAsyncComponent(() => import('../components/icons/engagement.vue'))
];

const firstIcon = computed(() => {
  if (props.icons[0].index >= 0 && props.icons[0].index < components.length) {
    return components[props.icons[0].index];
  }
  // Default to the first component if index is out of bounds
  return components[0];
});

const secondIcon = computed(() => {
  if (props.icons[1].index >= 0 && props.icons[1].index < components.length) {
    return components[props.icons[1].index];
  }
  // Default to the first component if index is out of bounds
  return components[0];
});

onMounted(() => {
  const text = new SplitType(textRevealRef.value, { types: 'words,chars' });


  const body = document.querySelector('body');
  const lineV = document.querySelectorAll(".line__vertical")
  const lineH = document.querySelectorAll(".line__horizontal")

  gsap.set(text.chars, { autoAlpha: 0.1 });


  ScrollTrigger.create({
    trigger: textSection.value,
    start: "top 70%",
    id: props.index,
    onEnter: () => {
      gsap.to(body, {
        backgroundColor: props.bg,
        color: props.textColor,
        duration: .4,
        ease: "ease.in",
      });


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
        backgroundColor: props.bg,
        color: props.textColor,
        duration: .4,
        ease: "ease.in",
      });

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
  });

  gsap.to(text.chars, {
    autoAlpha: 1,
    stagger: 0.1,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: textRevealRef.value,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      // markers: true,
      id: "TextReveal",
      ease: "ease.out",
    },
  });


});
</script>



<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/title.scss";

.text__reveal {
  width: 100%;
  padding-top: 18.4rem;
  padding-left: 15.5rem;
  padding-bottom: 10rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 600px) {
    overflow: hidden;
    padding: 14.269rem 2.2rem 5rem 2.1rem;
  }
}

.text__reveal__content {
  @extend %title-110-bold;
  max-width: 102.2rem;

  // .word {
  //   opacity: .1;
  // }

  .char {
    opacity: 0.1;
  }

  @media screen and (max-width: 600px){
  }
}

.icon {
  position: absolute;
  z-index: 0;
}
</style>