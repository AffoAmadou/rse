<template>
    <section :id="props.goto" data-scroll-section class="header" :class="`header--${props.index}`" ref="headerSection">
        <component :style="{
            width: props.icons[0].width,
            height: props.icons[0].height,
            top: props.icons[0].top,
            left: props.icons[0].left,
            transform: props.icons[0].transform,
            zIndex: '0',
        }" :is="firstIcon" :color=props.icons[0].fill class="icon" />


        <component :style="{
            width: props.icons[1].width,
            height: props.icons[1].height,
            top: props.icons[1].top,
            left: props.icons[1].left,
            transform: props.icons[1].transform,
            zIndex: '0',
        }" :is="secondIcon" :color=props.icons[1].fill class="icon" />

        <div class="header__content">
            <div ref="index" class="index">0{{ displayIndex }}-04</div>
            <h1 ref="title" class="header__title" v-html="props.text">
            </h1>
            <div ref="tag" class="header__tag">
                <p>{{ props.tag }}</p>
            </div>
        </div>

    </section>

</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref, computed, defineAsyncComponent } from 'vue';
import Signal from '../utils/signal';

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
    icons: {
        type: Array,
        default: () => [],
    },
    goto: {
        type: String,
        default: '0',

    }

});
const headerSection = ref(null);
const index = ref(null);
const tag = ref(null);
const title = ref(null);

const displayIndex = props.index + 1;

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
    return components[0];
});

const secondIcon = computed(() => {
    if (props.icons[1].index >= 0 && props.icons[1].index < components.length) {
        return components[props.icons[1].index];
    }
    return components[0];
});
const animateHeader = () => {
    gsap.to([index.value, tag.value, title.value], {
        autoAlpha: 1,
        // visibility: 'visible',
        duration: 1,
        stagger: .2,
        delay: .2,
    });
}


onMounted(() => {
    const body = document.querySelector('body');
    const lineV = document.querySelectorAll(".line__vertical")
    const lineH = document.querySelectorAll(".line__horizontal")

    // gsap.set([index.value, tag.value, title.value], {
    //     autoAlpha: 0,
    // });


    //get all svgs from headerSection
    let svgs = headerSection.value.querySelectorAll('svg');
    gsap.to([svgs], {
        duration: 10,
        rotate: 360,
        repeat: -1,
    })

    ScrollTrigger.create({
        trigger: headerSection.value,
        start: "top 70%",
        id: props.index,
        markers: true,

        onEnter: () => {
            Signal.emit(':navClick', props.index);
            animateHeader();

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
            Signal.emit(':navClick', props.index);

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

    Signal.on(":showContent", () => {
        animateHeader();
    })

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

    @media screen and (max-width: 600px) {
        overflow: hidden;

    }

}

.header__content {
    max-width: 116.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
        max-width: 33.6rem;
    }
}

.index {
    @extend %description-15;
    opacity: 0;

}

.header__title {
    @extend %title-110-bold;
    text-align: center;
    text-transform: uppercase;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    letter-spacing: -.4rem;
    width: 100%;
    opacity: 0;

}

.header__tag {
    padding: .7rem 3.1rem .7rem 3.1rem;
    border: solid 1.17px $white;
    border-radius: 10rem;
    opacity: 0;


    p {
        @extend %description-15;
        text-transform: uppercase;
        color: $white;
    }

}

.icon {
    position: absolute;
    z-index: 0;
}
</style>
