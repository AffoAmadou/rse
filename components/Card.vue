<template>
  <div :data-rellax-speed=props.rellax ref="card" @mouseenter="isHovered = false" @mouseleave="isHovered = true"
    :id="dynamicId" @click="open" :style="{ top: props.top, left: props.left }" class="card rellax">
    <div class="card__top">
      <div class="card__top__wrapper">
        <div :style="{ colors: props.colors.number }" class="card__index">{{ props.index }}</div>
        <button @click="open" ref="button">
          <Plus :isHovered="isHovered" />
        </button>
      </div>

    </div>

    <div class="card__bottom__wrapper">
      <p class="card__bottom__text" :style="{ colors: props.colors.text }">{{ props.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";

.card {
  width: 32.5rem;
  aspect-ratio: 1/1;
  background-color: white;
  position: absolute;
  top: 10.1rem;
  left: 15.5rem;
  border-radius: 1.806rem;
  padding: 3.43rem 3rem 3rem 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 100;

  @media screen and (max-width: 600px) {
    width: 25.5rem;
    position: static;
    padding: 3.06rem 2.354rem 3.24rem 2.354rem;
  }
}

.card__top__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__bottom__wrapper {
  max-width: 22.7rem;
  @extend %title-35-medium;

  @media screen and (max-width: 600px) {
    max-width: 16.2rem;
  }
}

.card__index {
  @extend %title-60;

  font-size: 4.708rem;
}
</style>

<script setup>
import Plus from './icons/plus.vue';
import Signal from '~/utils/signal';
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import Rellax from 'rellax';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const button = ref();
const isHovered = ref(false);
const card = ref();

const props = defineProps({
  top: {
    type: String,
  },
  left: {
    type: String,
  },
  index: {
    type: String,
  },
  text: {
    type: String,
  },
  colors: {
    type: Object,
  },
  cards: {
    type: Array,
  },
  categoryId: {
    type: Number,
    required: true,
  },
  categoryTag: {
    type: String,
    default: 'Environnement',
  },
  contentIndex: {
    type: String,
  },

  image: {
    type: String,
    default: '',
  },

  rellax: {
    type: Number,
    default: 1,
  },

});

const open = () => {
  let body = document.querySelector('body');
  // gsap.set(body, { overflow: 'hidden !important' });
  body.style.overflow = 'hidden';
  // body.style.pointerEvents = 'none';
  disableBodyScroll(body);
  Signal.emit(':openCard', (props));
  Signal.emit(':sendId', dynamicId);
}
const dynamicId = `card--${props.categoryTag}--${props.contentIndex.replace(/[^a-zA-Z0-9]/g, '')}--${props.index}`;

onMounted(() => {

  // var rellax = new Rellax('.rellax');

})

</script>