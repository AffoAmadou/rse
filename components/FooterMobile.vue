<template>
    <div ref="footerSection" class="footerMobile">
        <Vue3Marquee class="marquee">
            <div class="marquee__content">
                <p class="marquee__text">Made on earth</p>
                <img class="marquee__image" src="/img/footer.png" alt="">
                <p class="marquee__text">with heart</p>
                <img style="margin-right: 5rem;" class="marquee__image" src="/img/footer.png" alt="">

            </div>
        </Vue3Marquee>

        <div ref="footerContent" class="footer__content">
            <div class="footer__card">
                <h3 class="footer__title">Briefer l’agence</h3>
                <p class="footer__text">Vous recherchez une agence digitale créative et exigeante pour vos projets
                    d’identité & branding, site internet, motion design, brand content.</p>

                <button @click="maitlTo" class="footer__btn">
                    Rencontrons-nous
                </button>

            </div>

            <div class="footer__social__card">
                <h3 class="footer__title">Suivez- nous sur Instagram</h3>
                <div class="footer__social__icons">
                    <Instagram />
                    <Linkedin />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Instagram from './icons/instagram.vue';
import Linkedin from './icons/linkedin.vue';
gsap.registerPlugin(ScrollTrigger);
const footerSection = ref(null);
const footerContent = ref(null);

onMounted(() => {



    const body = document.querySelector('body');

    ScrollTrigger.create({
        trigger: footerSection.value,
        start: "top 70%",
        id: 5,
        onEnter: () => {
            gsap.to(body, {
                backgroundColor: '#162040',
                color: '#FF90B9',
                duration: 1.4,
                ease: 'ease.inout'
            });

            gsap.to(".logo__wrapper", {
                backgroundColor: '#162040',
                duration: 1.4,
                ease: 'ease.inout'
            });
        },
    });


    let cardWrapperHeight = footerContent.value.offsetHeight;

    gsap.to(footerContent.value, {
        scrollTrigger: {
            trigger: footerSection.value,
            scrub: true,
            pin: true,
            pinSpacer: false,
            pinSpacing: true,
            start: "top top",
            end: "+=25%"
        },
        y: `-=${cardWrapperHeight / 3}`,
        ease: "none"
    })
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";

.footerMobile {
    display: none;
    position: relative;

    @media screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100vh;
        margin-top:-20rem ;
    }

    @media screen and (orientation: landscape) {
        display: none;
    }
    //media query for orientation
    // @media screen and (orientation: landscape) {
    //     display: flex;
    //     width: 100%;
    //     height: 100vh;
    //     justify-content: center;
    //     align-items: center;
    //     position: relative;
    //     overflow: hidden;
    // }

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

    .marquee {
        @media screen and (max-width: 600px) {}
    }

    .marquee__content {
        display: flex;
        gap: 5rem;
    }

    .marquee__text {
        @extend %title-150-bold;
        text-transform: uppercase;
    }

    .marquee__image {
        width: 23.3rem;
        height: 14.995rem;
        border-radius: 1rem;

        @media screen and (max-width: 600px) {
            width: 10.24rem;
            height: 6.59rem;

        }
    }


}

.footer__content {
    position: absolute;
    z-index: 2;
    display: flex;
    height: 160%;
    top: 0;
    left: 0;
    flex-direction: column;

    padding: 20rem 3rem 1rem 3rem;

    @media screen and (orientation: landscape) {
       position: relative;
       display: block;
       height: fit-content;
    }


}



.footer__card {
    width: 34.5rem;
    height: 32.364rem;
    background-color: #FFFFFF;

    border-radius: 1.318rem;
    padding: 6.5rem 5rem 6.1rem 5rem;
    margin-bottom: 25rem;

    .footer__text {
        @extend %description-20;
        max-width: 29.8rem;
        margin-top: 2.4rem;
        margin-bottom: 4.5rem;
        line-height: 2.9rem;

        @media screen and (max-width: 600px) {
            font-size: 1.4rem;
            margin-top: 1.4rem;
            margin-bottom: 2.5rem;
            line-height: 2.3rem;
            color: #162040;

        }
    }

    .footer__btn {
        padding: 1.4rem 3.9rem 1.3rem 4.0rem;
        background-color: #FF90B9;
        color: #FFFFFF;
        @extend %description-20-medium;
        border-radius: 5rem;

        transition: all .3s ease-in-out;

        &:hover {
            background-color: #162040;
        }

        @media screen and (max-width: 600px) {
            padding: 1.4rem 3.9rem 1.3rem 4.0rem;
            font-size: 1.5rem;
            border-radius: 5rem;

        }

    }


    @media screen and (max-width: 600px) {

        margin-bottom: 5rem;
    }
}

.footer__title {
    @extend %title-35-medium;
    line-height: 4.2rem;
    color: #162040;


    @media screen and (max-width: 600px) {
        font-size: 2.7rem;
        font-weight: 700;
        width: 80%;
        line-height: 3.323rem;
    }
}

.footer__social__card {
    width: 25.2rem;
    height: 23.019rem;
    background-color: #FFFFFF;
    border-radius: 1.318rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 4rem;
    align-self: flex-end;
}

.footer__social__icons {
    display: flex;
    gap: 1rem;
}
</style>