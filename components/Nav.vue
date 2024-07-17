<template>
    <div class="nav " :class="{ 'is-visible': navVisible }">
        <div class="nav__wrapper">
            <NavItem v-for="item in computedData" 
            :key="item.index" 
            :text="item.menuTag" 
            :index="item.index " 
            :bgColor="item.backgroundColor"
            :active="item.index === activeIndex"
            />
        </div>

    </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import NavItem from "./NavItem.vue";
import Signal from "../utils/signal";
import { data } from "~/data";
const navVisible = ref(false);
const activeIndex = ref(0);

const props = defineProps({
    data: Array
});


const computedData = computed(() => {
    return props.data.map(item => {
        console.log(item.header)
        return {
            menuTag: item.header.menuTag,
            index: item.header.index,
            backgroundColor: item.header.bgColor,
        };
    });
});

console.log(computedData.value);

onMounted(() => {




    Signal.on(":showNav", (index) => {
        navVisible.value = true;
    })

    Signal.on(":navClick", (index) => {
        activeIndex.value = index;
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