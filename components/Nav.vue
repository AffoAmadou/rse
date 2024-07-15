<template>
    <div class="nav " :class="{ 'is-visible': navVisible }">
        <div class="nav__wrapper">
            <NavItem :index=0 text="Environnement" />
            <NavItem :index=1 text="Ethique" />
            <NavItem :index=2 text="Social" />
            <NavItem :index=3 text="Engagement" />
        </div>

    </div>

</template>

<script setup>
import { ref,onMounted } from "vue";
import NavItem from "./NavItem.vue";
import Signal from "../utils/signal";
const navVisible = ref(false);


onMounted(() => {
    Signal.on(":showNav", (index) => {
        navVisible.value = true;
    })
})

</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/mixins.scss";


.nav {
    position: fixed;
    width: 100%;
    bottom: -8.9rem;
    left: 0;
    right: 0;
    z-index: 100;
    @extend %center;
    transition: all .5s ease-out;
}

.is-visible {
    opacity: 1;
    bottom: 4.9rem;
}

.nav__wrapper {
    padding: 1rem 1.1rem 1rem 1.1rem;
    background-color: white;
    border-radius: 10rem;
    display: flex;
    gap: 0.54rem;
}
</style>