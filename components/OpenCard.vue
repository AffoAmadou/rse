<template>
    <div ref="openCard" class="open__card">
        <div class="card__wrapper">
            <div class="open__card__top">
                <div class="open__card__icons">
                    <NavItem :index=0 text="Environnement" />
                    <button>
                        <Close @click="close" />
                    </button>
                </div>
                <div v-if="currentCard" class="open__card__title">
                    <p v-html="currentCard.text"></p>
                </div>

                <p v-if="currentCard" v-html="currentCard.contenu" class="open_card__content">

                </p>
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
import Signal from '~/utils/signal'; // Adjust path as needed

import NavItem from './NavItem.vue'; // Adjust path as needed
import Close from './icons/close.vue'; // Adjust path as needed
import Arrow from './icons/arrow.vue'; // Adjust path as needed

const openCard = ref(null);
const cards = ref([]);
const currentIndex = ref(0);

const currentCard = computed(() => {
    return cards.value[currentIndex.value];
});

const close = () => {
    openCard.value.style.display = 'none';
};

Signal.on(':openCard', (props) => {
    cards.value = props.cards;
    currentIndex.value = parseInt(props.index) - 1;
    openCard.value.style.display = 'flex';
});

const nextCard = () => {
    // currentcard ++ but check if its the last in the array and restart from 0 usign modulo
    currentIndex.value = (currentIndex.value + 1) % cards.value.length;

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
    display: none;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.296);
    z-index: 101;
    // display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 2.1rem;

    @media screen and (max-width: 600px) {
        justify-content: center;
        padding-right: 0;

    }
}

.card__wrapper {
    width: 57.4rem;
    height: 75.6rem;

    border-radius: 2rem;

    div {
        background-color: white;
    }

    @media screen and (max-width: 600px) {
        width: 34rem;
        height: 63.8rem;
    }
}

.open__card__top {
    width: 100%;
    height: 65.1rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;


    padding: 1.943rem 1.957rem 0 5rem;

    @media screen and (max-width: 600px) {
        height: 55.3rem;
        padding: 2.8rem 1.917rem 0 2rem;
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
    padding-top: 1.943rem;
    padding-left: 5rem;
    padding-right: 1.957rem;
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media screen and (max-width: 600px) {
        height: 8.3rem;
        padding: 2.8rem 1.917rem 0 2rem;

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

    @media screen and (max-width: 600px) {
        font-size: 1.8rem;

    }
}

a {
    text-decoration: underline !important;
}
</style>