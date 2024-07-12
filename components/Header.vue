<template>
    <section data-scroll-section class="header" :class="`header--${props.index}`" ref="headerSection">
        <div class="header__content">
            <div class="index">0{{ displayIndex }}-04</div>
            <h1 class="header__title" v-html="props.text">
            </h1>
            <div class="header__tag">
                <p>{{ props.tag }}</p>
            </div>
        </div>

    </section>

</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from 'vue';
gsap.registerPlugin(ScrollTrigger);
const props = defineProps({
    index: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        default: 'Environnement',
    },
    tag: {
        type: String,
        default: 'RESPONSABILITÉ ENVIRONNEMENTALE',
    },
    bgColor: {
        type: String,
        default: '#9AD8CB',
    },
    txtColor: {
        type: String,
        default: '#005454',
    },
    lineColor: {
        type: String,
        default: '#005454',
    },
});
const headerSection = ref(null);
const displayIndex = props.index + 1;



onMounted(() => {
    const body = document.querySelector('body');

    const lineV = document.querySelectorAll(".line__vertical")
    const lineH = document.querySelectorAll(".line__horizontal")

    ScrollTrigger.create({
        trigger: headerSection.value,
        start: "top 10%",
        id: props.index,
        onEnter: () => {
            gsap.to(body, {
                backgroundColor: props.bgColor,
                color: props.txtColor,
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
                backgroundColor: props.bgColor,
                color: props.txtColor,
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



});


</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";

.header {
    width: 100%;
    height: 100vh;
    // color: $txt-green;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;

    //     &--0 {
    //     @include bgcolor-by-index(0);
    //     @include txtcolor-by-index(0)

    //   }
    //   &--1 {
    //     @include bgcolor-by-index(1);
    //     @include txtcolor-by-index(1)
    //   }
    //   &--2 {
    //     @include bgcolor-by-index(2);
    //     @include txtcolor-by-index(2)
    //   }
    //   &--3 {
    //     @include bgcolor-by-index(3);
    //     @include txtcolor-by-index(3) // Add more as needed, handle index out of bounds in mixin
    //   }
}

.header__content {
    max-width: 116.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.index {
    @extend %description-15;
}

.header__title {
    @extend %title-110-bold;
    text-align: center;
    text-transform: uppercase;
    line-height: 10rem;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    letter-spacing: -.4rem;
}

.header__tag {
    padding: .7rem 3.1rem .7rem 3.1rem;
    border: solid 1.17px $white;
    border-radius: 10rem;

    p {
        @extend %description-15;
        text-transform: uppercase;
        color: $white;
    }

}
</style>
