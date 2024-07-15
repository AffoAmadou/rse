<template>
  <section class="content" ref="contentSection">

    <div class="marquee__wrapper">
      <!-- <h3>MAQUEEEEE</h3> -->
      <Vue3Marquee>
        <div class="marquee__content">
          <img class="marquee__image" src="/public/img/locaux.png" alt="">
          <p class="marquee__text">{{ props.textm }}</p>
          <img class="marquee__image" src="/public/img/locaux.png" alt="">
          <p class="marquee__text">{{ props.texts }}</p>
        </div>
      </Vue3Marquee>


    </div>
    <div class="content__wrapper" ref="contentWrapper">
      <!-- <Marquee id="marquee" :text=props.textm :text2=props.texts /> -->



      <div class="card__wrapper" ref="cardWrapper">
        <Card v-for="card in props.cards" :key="card.index" :top="card.top" :left="card.left" :index="card.index"
          :text="card.text" :colors="props.cardsColors" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from './Card.vue';
import Marquee from './Marquee.txt';

import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const contentSection = ref(null);
const contentWrapper = ref(null);
const cardWrapper = ref(null);
let tl;

const props = defineProps({
  textm: String,
  texts: String,
  image: String,
  bgColor: String,
  txtColor: String,
  cards: Array,
  cardsColors: Object,
  lineColor: String,
  computed: {
    dynamicId() {
      return `marquee--${this.textm}`;
    }
  }
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

  let cardWrapperHeight = cardWrapper.value.offsetHeight;


  // console.log(cards.length, "cards")

  // let ContentCards = gsap.utils.toArray(contentSection.value.querySelectorAll('.card'));
  // console.log(ContentCards, "All_cards")


  // gsap.to(cardWrapper.value, {
  //   scrollTrigger: {
  //     trigger: contentSection.value,
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%",

  //   },
  //   y: `-=${cardWrapperHeight / 2}`,
  //   ease: "none"
  // });


  // Assuming you have the `contentSection` and `cardWrapper` already defined and set up

  // Get all cards inside the content section
  let ContentCards = gsap.utils.toArray(contentSection.value.querySelectorAll('.card'));
  console.log(ContentCards, "All_cards");

  // Calculate the total height of all cards including the gaps between them
  let totalHeight = 0;
  ContentCards.forEach((card, index) => {
    if (index === 0) {
      totalHeight += card.offsetHeight; // Add the height of the first card
    } else {
      const prevCard = ContentCards[index - 1];
      const gap = card.offsetTop - (prevCard.offsetTop + prevCard.offsetHeight);
      totalHeight += card.offsetHeight + gap; // Add the height and gap of subsequent cards
    }
  });

  let additionalOffset = 50; // Add some additional offset if needed
  let endValue = `+=${totalHeight + additionalOffset}px`;

  gsap.to(cardWrapper.value, {
    scrollTrigger: {
      trigger: contentSection.value,
      scrub: true,
      pin: true,
      start: "top top",
      end: endValue,
    },
    y: `-=${cardWrapperHeight / 2}`,
    ease: "none"
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
  z-index: 1;
}

.marquee__wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @extend %center;
  z-index: 0;

  h3 {
    font-size: 10rem;
  }
}

.content__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.card__wrapper {
  width: 100%;
  height: 200vh;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.marquee__content {
  display: flex;
  gap: 5rem;
}

.marquee__text {
  @extend %title-150-bold;
}

.marquee__image {
  width: 23.3rem;
  height: 14.995rem;
  border-radius: 3rem;
}
</style>