<template>
    <section class="content" ref="contentSection">

        <div ref="marquee" class="marquee__wrapper">
            <Vue3Marquee class="rf">
                <div class="marquee__content">
                    <p class="marquee__text mf">{{ props.contents[currentIndex].text }}</p>
                    <img class="marquee__image " :src=props.contents[currentIndex].image alt="">
                    <p class="marquee__text ms">{{ props.contents[currentIndex].texts }}</p>
                    <img style="margin-right: 5rem;" class="marquee__image mis" src="/public/img/locaux.png" alt="">
                </div>
            </Vue3Marquee>


        </div>
        <div class="content__wrapper" ref="contentWrapper">

            <div ref="cardWrapper" class="card__wrapper">
                <div class="sectionCard" v-for="(item, index) in props.contents" :key="index"
                    :style="{ height: isMobile ? item.sectionCardHeight : '110vh' }">
                    <Card v-for="card in item.cards" :cards="item.cards" :key="card.index" :top="card.top"
                        :left="card.left" :index="card.index" :text="card.text" :colors="item.cardsColors"
                        :categoryId="props.categoryId" :categoryTag="props.categoryTag" :contentIndex="item.text"
                        :image="card.image" :rellax="randomNumbers()" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Card from './Card.vue';
//  :style="{ height: isMobile ? item.sectionCardHeight : '110vh' }"
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { isMobile } from 'mobile-device-detect';




const contentSection = ref(null);
const contentWrapper = ref(null);
const cardWrapper = ref(null);
const currentIndex = ref(0);
const marquee = ref(null);


let tl;

const props = defineProps({
    contents: Array,
    categoryId: {
        type: Number,
        required: true,
    },
    categoryTag: {
        type: String,
        default: 'Environnement',
    },
    mobileScroll: {
        type: Number,
        default: 2,
    },
});

const randomNumbers = () => {
    //from 1 to 3
    return Math.floor(Math.random() * 2) + 1;
}


onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isMobile) {
        ScrollTrigger.refresh();
    }

    const body = document.querySelector('body');
    const cards = document.querySelectorAll('.card__index');
    const carsTexts = document.querySelectorAll('.card__bottom__text');
    const btn = document.querySelectorAll('.p__circle');
    const tagItem = document.querySelectorAll('.tag__item');

    const lineV = document.querySelectorAll(".line__vertical")
    const lineH = document.querySelectorAll(".line__horizontal")

    const openCartTitle = document.querySelectorAll('.open__card__title');
    const openCardContent = document.querySelectorAll('.open_card__content');
    const openCardIndex = document.querySelectorAll('.open__card__index');


    let cardWrapperHeight = cardWrapper.value.offsetHeight;

    // Get all cards inside the content section
    let ContentCards = gsap.utils.toArray(contentSection.value.querySelectorAll('.card'));

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


    let sectionCards = gsap.utils.toArray(contentWrapper.value.querySelectorAll('.sectionCard'));
    let timeline = gsap.timeline({ paused: true });
    let reverseTimeline = gsap.timeline({ paused: true });

    function marqueeEnterExit(index) {
        const text = new SplitType(".mf", { types: 'words,chars' });
        const text2 = new SplitType(".ms", { types: 'words,chars' });

        let tl = gsap.timeline();
        tl.to([".marquee__text", ".marquee__image"], {
            autoAlpha: 0,
            duration: 1.4,
            transformOrigin: "top right",
            onComplete: () => {
                currentIndex.value = index;
            },
        },)
            .to([".marquee__text", ".marquee__image"], {
                delay: .1,
                autoAlpha: 1,
                duration: 1.4,
            },)

    }


    sectionCards.forEach((sectionCard, index) => {
        timeline.to(sectionCard, {

            id: index,
            ease: "none",
            onStart: () => {

                if (index !== 0) {
                    marqueeEnterExit(index);
                    // currentIndex.value = index;
                }


                gsap.to(body, {
                    backgroundColor: props.contents[index].bgColor,
                    color: props.contents[index].txtColor,
                    duration: 1.4,
                    ease: 'ease.inout'
                });

                gsap.to(cards, {
                    color: props.contents[index].cardsColors.number,
                    duration: 1.4,
                    ease: 'ease.inout'
                });

                gsap.to(carsTexts, {
                    color: props.contents[index].cardsColors.text,
                    duration: 1.4,
                    ease: 'ease.inout'
                })

                gsap.to(btn, {
                    fill: props.contents[index].cardsColors.text,
                    duration: 1.4,
                    ease: 'ease.inout'
                })


                gsap.to(tagItem, {
                    backgroundColor: props.contents[index].cardsColors.text,
                    duration: 1.4,
                    ease: 'ease.inout'
                })


                gsap.to(lineV, {
                    borderColor: props.contents[index].lineColor,
                    duration: 2,
                    stagger: .1,
                });

                gsap.to(lineH, {
                    borderColor: props.contents[index].lineColor,
                    duration: 2,
                    stagger: .1,
                });
            },
            // onComplete: () => {
            //     // currentIndex.value = index;
            //     ScrollTrigger.refresh();
            // },

        });

    });

    let end = isMobile ? "+=400%" : "+=200%";

    let y = isMobile ? props.mobileScroll : 1.8;
    console.log(cardWrapperHeight, y);

    gsap.to(cardWrapper.value, {
        scrollTrigger: {
            onEnter: () => {
                // ScrollTrigger.refresh();

            },
            trigger: contentSection.value,
            scrub: true,
            pin: true,
            anticipatePin: .7,
            // pinSpacer: false,
            // pinSpacing: true,
            markers: true,
            start: "top top",
            pinType: 'fixed',
            end: end,
            // onRefresh: () => ScrollTrigger.refresh(),
            onUpdate: (self) => {
                let progress = self.progress;
                if (self.direction === 1) {
                    timeline.progress(progress);
                }

                if (self.direction === -1) {
                    timeline.progress(1 - progress);
                }
            },
            onLeaveBack: () => {
                timeline.progress(0);
            }
            ,

        },
        y: `-=${cardWrapperHeight / y}`,
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

    @media screen and (max-width: 600px) {
        // display: none;
    }
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
    // position: relative;
    overflow: hidden;
}



.card__wrapper {
    width: 100%;
    min-height: 700vh;

    display: flex;
    flex-direction: column;


    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 12rem;
        height: 200svh;

        // background: green;

        .card {

            //child odd 
            &:nth-child(odd) {
                align-self: flex-start;
            }

            //child even
            &:nth-child(even) {
                align-self: flex-end;
            }
        }
    }
}

.marquee__content {
    display: flex;
    gap: 5rem;
    text-transform: uppercase;
}

.marquee__text {
    @extend %title-150-bold;
}

.marquee__image {
    width: 23.3rem;
    height: 14.995rem;
    border-radius: 3rem;

    @media screen and (max-width: 600px) {
        width: 10.24rem;
        height: 6.59rem;
        border-radius: 1.318rem;
    }
}

.sectionCard {
    width: 100%;
    height: 110vh;
    position: relative;
    margin-bottom: 40rem;

    //last child
    &:last-child {
        margin-bottom: 0;
    }

    //first child

    &:first-child {
        margin-top: 40rem;
    }


    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        height: 136svh;

        margin-bottom: 0;
    }
}

.msi {
    margin-left: 3rem;
}
</style>