<template>
    <div class="table">
        <div class="table__wrapper">
            <div class="vertical__wrapper">
                <div class="line__vertical" v-for="index in 16" :key="index">
                </div>
            </div>

            <div class="horizontal__wrapper">
                <div class="line__horizontal" v-for="index in 8" :key="index">
                </div>
            </div>
        </div>

    </div>
</template>


<script setup>
import Signal from '../utils/signal';
import gsap from 'gsap';
import { onMounted } from 'vue';



onMounted(() => {

    Signal.on(":loaderFinished", () => {
        lineAnimation();
    })
})

const lineAnimation = () => {
    const lines = document.querySelectorAll('.line__vertical');
    const linesHorizontal = document.querySelectorAll('.line__horizontal');

    let tl = gsap.timeline();

    tl.to(lines, {
        height: '100%',
        duration: 2,
        stagger: .1,
    }, 0);

    tl.to(linesHorizontal, {
        width: '100%',
        duration: 2,
        stagger: .1,
        onStart: () => {
            setTimeout(() => {
                Signal.emit(":showNav", "hey")
            }
                , 500)
        }
    }, 0);


}
</script>

<style lang="scss" scoped>
.table {
    width: 100%;
    height: 100vh;
    position: fixed;
}

.table__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}

.vertical__wrapper {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
}

.line__vertical {
    // width: .133rem;
    border: .133rem solid #9AD8CB0D;
    height: 0%;

}

.horizontal__wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
}

.line__horizontal {
    width: 0%;
    // height: .133rem;
    border: .133rem solid #9AD8CB0D;

}
</style>