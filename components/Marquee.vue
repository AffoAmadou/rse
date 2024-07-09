<template>
<vue-marquee-slider
  class="marquee-slider"
  :speed="200000"
  :width="9000"
>

<div class="marquee__content">
<img class="marquee__image" src="/public/img/locaux.png" alt="">
<p class="marquee__text">{{ text }}</p>
<img class="marquee__image" src="/public/img/locaux.png" alt="">
<p class="marquee__text">{{ text2 }}</p>
</div>
</vue-marquee-slider>
</template>


<script setup>
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '@/node_modules/vue3-marquee-slider/dist/style.css'

const props = defineProps({
    text: {
      type: String,
      required: true
    },
    text2: {
      type: String,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";

.marquee__content{
    display: flex;
    gap: 5rem;
}
.marquee__text{
@extend %title-150-bold ;
}

.marquee__image{
    width: 23.3rem;
    height: 14.995rem;
    border-radius: 3rem;
}
</style>