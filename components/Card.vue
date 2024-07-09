<template>
<div :style="{ top:props.top, left:props.left }" class="card">
    <div class="card__top">
        <div class="card__top__wrapper">
            <div class="card__index">{{ props.index }}</div>
                <Plus/>
        </div>
    </div>

    <div class="card__bottom__wrapper">
        <p>{{props.text}}</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
 @import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";

.card{
    width: 32.5rem;
    aspect-ratio: 1/1;
    background-color: lightgray;
    position: absolute;
    top: 10.1rem;
    left: 15.5rem;
    border-radius: 1.806rem;
    padding: 3.43rem 3rem 3rem 3rem;
    // color: #9AD8CB;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card__top__wrapper{
   
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card__bottom__wrapper{
    max-width: 22.7rem;
    @extend   %title-35-medium;
    // color: #005454;
}
.card__index{
    @extend %title-60;

}
</style>

<script setup>
import Plus from './icons/plus.vue';

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
  });
</script>