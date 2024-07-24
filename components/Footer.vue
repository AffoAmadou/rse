<template>
    <section data-scroll-section class="footer" ref="footerSection">
        <!-- <Marquee id="marquee" text="Made on earth" text2="with heart" /> -->

        <Vue3Marquee class="marquee">
            <div class="marquee__content">
                <img class="marquee__image" src="/img/footer.png" alt="">
                <p class="marquee__text">Made on earth</p>
                <img class="marquee__image" src="/img/footer.png" alt="">
                <p class="marquee__text">with heart</p>
            </div>
        </Vue3Marquee>

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
    </section>
</template>

<script setup>
import Instagram from './icons/instagram.vue';
import Linkedin from './icons/linkedin.vue';

import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const footerSection = ref(null);

const maitlTo = () => {
    window.location.href = 'mailto:briefer@bien-fonde.com';
};

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
                duration: .4,
                ease: 'ease.in'
            });
        },
    });
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";

.footer {
    width: 100%;
    height: 100vh;
    @extend %center;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        display: none;
    }

    .footer__card {
        position: absolute;
        width: 43.6rem;
        height: 40.9rem;
        background-color: #FFFFFF;
        top: 0;
        border-radius: 2rem;
        padding: 6.5rem 8.8rem 6.1rem 5rem;
        top: 12.2rem;
        left: 15.5rem;
        color: #162040;
        z-index: 1;



        .footer__text {
            @extend %description-20;
            max-width: 29.8rem;
            margin-top: 2.4rem;
            margin-bottom: 4.5rem;
            line-height: 2.9rem;

            @media screen and (max-width: 600px) {
                margin-top: 1.4rem;
                margin-bottom: 2.5rem;
                line-height: 2.3rem;
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


        }

        @media screen and (max-width: 600px) {
            position: static;
            width: 95%;
            font-size: 1.4rem;
            padding-right: 0;
            padding-left: 3rem;

        }
    }

    .footer__social__card {
        color: #162040;
        background-color: #FFFFFF;
        border-radius: 2rem;
        position: absolute;
        width: 33.5rem;
        height: 30.6rem;
        top: 31rem;
        right: 14.5rem;
        padding: 4.023rem 7rem 5.973rem 5.2rem;
        @extend %column;
        justify-content: space-between;
        z-index: 1;

        @media screen and (max-width: 600px) {
            position: static;
        }


    }

    .footer__title {
        @extend %title-35-medium;
        line-height: 4.2rem;

        @media screen and (max-width: 600px) {
            font-size: 2.7rem;
            font-weight: 700;
            width: 80%;
            line-height: 3.323rem;
        }
    }

}

.footer__social__icons {
    display: flex;
    gap: 1.347rem;
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

.marquee {
    @media screen and (max-width: 600px) {
        position: absolute;
        top: 44rem;
    }
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
    border-radius: 3rem;

    @media screen and (max-width: 600px) {
        width: 10.24rem;
        height: 6.59rem;
        border-radius: 1.318rem;
    }
}
</style>