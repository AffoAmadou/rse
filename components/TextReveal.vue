<template>
    <section data-scroll-section  class="text__reveal" ref="textSection">
      <p  ref="textRevealRef" class="text__reveal__content" v-html="props.text"></p>
    </section>
  </template>
  <!-- :style="{ backgroundColor: bg }"
  :style="{ color: textColor }" -->
  <script setup>
  import { onMounted, ref } from 'vue';
  import SplitType from 'split-type';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);

    const textSection = ref(null);
  
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
  });
  
  const textRevealRef = ref(null);

  onMounted(() => {
    // const text = new SplitType(textRevealRef.value, { types: 'chars, words' });
  // console.log(text)
    // gsap.to(text.words, {
    //   opacity: 1,
    //   stagger: 0.1,
    //   duration: 1,
    //   ease: 'power4.out',
    //   scrollTrigger: {
    //     trigger: textRevealRef.value,
    //     start: 'top 80%',
    //     end: 'bottom 20%',
    //     scrub: true,
    //     id: 'TextReveal',
    //     ease: 'ease.out',
    //     onComplete: () => {
    //       ScrollTrigger.refresh();
    //     },
    //   },
    // });

    const body = document.querySelector('body');

ScrollTrigger.create({
    trigger: textSection.value,
    start: "top 10%",
    id: props.index,
    onEnter: () => {
        console.log('enter');
        gsap.to(body, {
            backgroundColor: props.bg,
            color: props.textColor,
            duration: .4,
            ease: "ease.in",
        });
    },
    onEnterBack: () => {
        gsap.to(body, {
            backgroundColor: props.bg,
            color: props.textColor,
            duration: .4,
            ease: "ease.in",
        });

    },

});
  });
  </script>
  


<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/title.scss";
.text__reveal{
    width: 100%;
    padding-top: 18.4rem;
    padding-left:15.5rem;
    padding-bottom: 10rem;
}

.text__reveal__content{
    @extend %title-110-bold;
    max-width: 102.2rem;
.word{
   
   
}
}

.char{
        opacity: 0.1;
    }
</style>