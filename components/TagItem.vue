<template>
    <div  class="tag__item">
        <component :animation=false :is="currentComponent" :color="whiteColor" />
        <div class="nav__item__text">{{ text }}</div>
    </div>
</template>

<script setup>
import { computed, defineAsyncComponent,ref } from 'vue';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Signal from '~/utils/signal';
gsap.registerPlugin(ScrollToPlugin)

const whiteColor = ref('#ffffff');
const props = defineProps({
    index: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        default: 'Environnement',
    },
    bgColor: {
        type: String,
        default: '#9AD8CB',
    },

    active: {
        type: Boolean,
        default: false,
    },

});

// Define the components using async imports
const components = [
    defineAsyncComponent(() => import('../components/icons/environnement.vue')),
    defineAsyncComponent(() => import('../components/icons/star.vue')),
    defineAsyncComponent(() => import('../components/icons/social.vue')),
    defineAsyncComponent(() => import('../components/icons/engagement.vue'))
];

const currentComponent = computed(() => {
    if (props.index >= 0 && props.index < components.length) {
        return components[props.index];
    }
    return components[0];
});

function onClick(text) {
    Signal.emit(':navClick', props.index);

    let id = "#" + props.text;
    gsap.to(window, { duration: 2, scrollTo: id });
}


</script>

<style scoped lang="scss">
.tag__item {
    display: flex;
    align-items: center;
    // height: 3.628rem;
    padding: .9rem 2.052rem .928rem 1.5rem;
    border: solid 1.17px #00000015;
    border-radius: 10rem;
    gap: .5rem;
    font-size: 1.404rem;

    .nav__item__text {
        color: white !important;
    }

    // color: black !important;
    @media screen and (max-width: 600px) {
        // padding: 0;
        padding: .9rem 1.5rem .928rem 1.5rem;
        color: white;
        // width: 6.2rem;
        height: 3.628rem;

        // .nav__item__text {
        //     display: none;
        // }

    }
}
</style>