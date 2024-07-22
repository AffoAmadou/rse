<template>
    <div ref="loader" class="loader">
        <div ref="container" class="loader__content">
            <p ref="p1">Bienvenue !</p>
            <p ref="p2">
                Nous allons découvrir les actions RSE
                mises en place par notre agence.
            </p>
            <p ref="p3">
                Ensemble, nous analyserons comment
                ces actions concrètes contribuent
                à un avenir meilleur.
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import Signal from '~/utils/signal';

const p1 = ref(null);
const p2 = ref(null);
const p3 = ref(null);
const container = ref(null);
const loader = ref(null);
onMounted(() => {

    const tl = gsap.timeline({ defaults: { ease: "ease.inOut" } })

    let p2Height = p2.value.offsetHeight;
    let p3Height = p3.value.offsetHeight;
    gsap.set([p2.value, p3.value], { display: "none", opacity: 0, y: "+=30" });

    tl.to(p1.value, { opacity: 1, duration: 1.5 })
        .to(p2.value, { display: "block", opacity: .1, y: "-=30", duration: 2, ease: "expo.inOut" })
        .to(p3.value, { display: "block", opacity: .1, y: "-=30", duration: 2, ease: "expo.inOut" }, "<")
        .to(container.value, { y: `-=${p2Height}`, duration: 2.5, ease: "expo.inOut" })
        .to(p1.value, { opacity: 0, duration: 2, delay: 0.2 }, "<")
        .to(p2.value, { opacity: 1, duration: 1, delay: 0.2 }, "<")
        .to(container.value, { y: `-=${p3Height}`, duration: 2.5, ease: "expo.inOut" })
        .to(p3.value, { opacity: 1, duration: 1 }, "<")
        .to(p2.value, { opacity: 0, duration: 2 }, "<")
        .to(p3.value, { opacity: 0, duration: 1 },)
        .to(loader.value, {
            opacity: 0, backgroundColor: "#005454", duration: 1,
            onComplete: () => {
                Signal.emit(":loaderFinished", "hey")
                Signal.emit(":showContent", "hey");
            },

        })
});
</script>



<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";

.loader {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #162040;
    color: #FF90B9;
    @extend %title-60-medium;
    // @extend %center;

    position: relative;

    @media screen and (max-width: 600px) {
        // display: flex;
        // justify-content: center;
        // align-items: center;
    }
}

.loader__content {
    width: 97.3rem;
    letter-spacing: -.2rem;
    position: absolute;
    top: 36rem;
    left: 15.5rem;

    @media screen and (max-width: 600px) {
        width: 34.5rem;
        top: 40rem;
        left: 2.5rem;
    }
}

p {
    margin: 1rem 0;
    opacity: 0;
}
</style>