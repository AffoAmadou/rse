<template>
    <div :style="{ color: colorC }" id="idCard" ref="openCard" class="open__card">
        <div ref="card" class="card__wrapper">
            <div class="open__card__top">
                <div class="open__card__icons">
                    <TagItem :index=categoryId :text=categoryTag />
                    <button>
                        <Close @click="close" />
                    </button>
                </div>
                <div v-if="currentCard" class="open__card__title">
                    <p v-html="currentCard.text"></p>
                </div>

                <p v-if="currentCard" v-html="currentCard.contenu" class="open_card__content">
                </p>

                <img v-if="image" :src="currentCard.image" alt="" class="open__card__image">
            </div>
            <div class="open__card__bottom">
                <p v-if="currentCard" v-html="currentCard.index" class="open__card__index"></p>

                <button @click="nextCard" class="open__card__btn__wrapper">
                    <p>Action suivante</p>
                    <Arrow />
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import Signal from '~/utils/signal';

import TagItem from './TagItem.vue';
import Close from './icons/close.vue';
import Arrow from './icons/arrow.vue';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);

const openCard = ref(null);
const cards = ref([]);
const currentIndex = ref(0);
const idCard = ref("card");
const colorC = ref("#000000");

const currentCard = computed(() => {
    return cards.value[currentIndex.value];
});

const categoryId = ref(0);
const categoryTag = ref('Environnement');
const contentIndex = ref("textm");
const image = ref('');
const card = ref(null);

const close = () => {

    let id = "#" + idCard.value;
    gsap.to(window, {
        duration: 1.3,
        scrollTo: id,
        ease: "power4",

    });
    let body = document.querySelector('body');
    // gsap.set(body, { overflow: 'auto' });
    body.style.overflow = 'auto';
    ScrollTrigger.refresh();
    // gsap.to(card.value, {
    //     duration: 1.3,
    //     x: "70rem",
    //     ease: "power4",
    //     onComplete: () => {
    //         let tl = gsap.timeline();
    //         tl.to(openCard.value, {
    //             duration: 0.3,
    //             autoAlpha: 0,

    //         }, 0)
    //             .to(openCard.value, {
    //                 duration: 0.3,
    //                 autoAlpha: 0,
    //                 onComplete: () => {
    //                     openCard.value.style.display = 'none';
    //                 }
    //             }, 0)


    // }
    // })

    gsap.to(openCard.value, {
        duration: 0.3,
        x: "170rem",
        autoAlpha: 0,
        ease: "power4",

    })


};

Signal.on(':openCard', (props) => {
    cards.value = props.cards;
    currentIndex.value = parseInt(props.index) - 1;
    colorC.value = props.colors.text + " !important";


    image.value = props.image;
    categoryId.value = props.categoryId;
    categoryTag.value = props.categoryTag;
    contentIndex.value = props.contentIndex.replace(/[^a-zA-Z0-9]/g, '');


    openCard.value.style.display = 'flex';
    let tl = gsap.timeline();
    tl.to(openCard.value, {
        duration: 0.3,
        x: 0,
        ease: "power4",
    })

        .to(openCard.value, {
            autoAlpha: 1,
            ease: "power4",
        })

});

Signal.on(':sendId', (dynamicId) => {
    idCard.value = dynamicId;
});

const nextCard = () => {
    currentIndex.value = (currentIndex.value + 1) % cards.value.length;
    idCard.value = `card--${categoryTag.value}--${contentIndex.value}--0${currentIndex.value + 1}`;
};

</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";

a {
    text-decoration: underline !important;

}

.open__card {
    width: 100%;
    height: 100vh;
    // display: none;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.296);
    z-index: 101;
    // display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 2.1rem;

    //dont consider mouse events
    pointer-events: none;
    opacity: 0;

    transform: translate(170rem);


    @media screen and (max-width: 600px) {
        justify-content: center;
        padding-right: 0;
        align-items: flex-start;
        padding-top: 5rem;

    }
}

.card__wrapper {
    width: 57.4rem;
    height: 90%;
    overscroll-behavior: contain;
    border-radius: 2rem;

    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    //consider mouse events
    pointer-events: all;

    @media screen and (max-width: 600px) {
        width: 34rem;
        height: 80%;
    }
}

.open__card__top {
    // background-color: lightblue;
    width: 100%;
    // height: 65.1rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

    padding-bottom: 5rem;

    height: 90%;
    overflow: auto;

    padding: 1.943rem 1.957rem 0 5rem;

    @media screen and (max-width: 600px) {
        padding: 2.8rem 1.917rem 0 2rem;
    }
}

.open__card__image {
    margin-top: 3rem;
    width: 20rem;
    height: 20rem;
    aspect-ratio: 1/1;
    border-radius: 2rem;

    @media screen and (max-width: 600px) {
        width: 17rem;
        height: 17rem;
    }
}

.open__card__icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.open__card__title {
    width: 44.2rem;
    margin-top: 2.857rem;
    margin-bottom: 3.2rem;

    p {
        @extend %title-55-medium;
    }

    @media screen and (max-width: 600px) {
        width: 80%;
        margin-top: 3.072rem;
        margin-bottom: 2.7rem;
    }
}

.open__card__bottom {
    width: 100%;
    height: 10.5rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-top: solid 1px #00000015;
    // padding-top: 1.943rem;
    padding-left: 5rem;
    padding-right: 1.957rem;
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media screen and (max-width: 600px) {
        height: 8.3rem;
        padding: 0 1.917rem 0 2rem;

    }

}

.open__card__index {
    @extend %title-60;

    @media screen and (max-width: 600px) {
        font-size: 5rem;
    }
}

.open_card__content {
    font-size: 1.6rem;
    width: 38.4rem;
    line-height: 2.6rem;


    @media screen and (max-width: 600px) {
        width: 29.6rem;
        font-size: 1.4rem;
    }

}

.open__card__btn__wrapper {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    gap: 1rem;
    transition: all .3s ease;

    &:hover {
        gap: 2rem;
    }

    @media screen and (max-width: 600px) {
        font-size: 1.8rem;

    }
}

a {
    text-decoration: underline !important;
}
</style>