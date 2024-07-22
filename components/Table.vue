<template>
    <div class="table">
        <div class="table__wrapper">
            <div class="vertical__wrapper">
                <div class="line__vertical" v-for="index in 16" :key="index">
                </div>
            </div>

            <div class="horizontal__wrapper">
                <div class="line__horizontal" v-for="index in 10" :key="index">
                </div>
            </div>
            <!-- <svg width="1440" height="851" viewBox="0 0 1440 851" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line class="line__horizontal" y1="679.335" x2="1440" y2="679.335" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__horizontal" y1="339.335" x2="1440" y2="339.335" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__horizontal" y1="169.335" x2="1440" y2="169.335" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__horizontal" y1="509.335" x2="1440" y2="509.335" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__horizontal" y1="84.3352" x2="1440" y2="84.3352" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__horizontal" y1="254.335" x2="1440" y2="254.335" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__horizontal" y1="764.335" x2="1440" y2="764.335" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__horizontal" y1="424.335" x2="1440" y2="424.335" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__horizontal" y1="594.335" x2="1440" y2="594.335" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="1190.66" y1="2.147e-08" x2="1190.66" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="510.665" y1="2.147e-08" x2="510.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="169.665" y1="2.147e-08" x2="169.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="1361.66" y1="2.147e-08" x2="1361.66" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="1020.66" y1="2.147e-08" x2="1020.66" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="339.665" y1="2.147e-08" x2="339.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="680.665" y1="2.147e-08" x2="680.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="1106.66" y1="2.147e-08" x2="1106.66" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="765.665" y1="2.147e-08" x2="765.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="84.6648" y1="2.147e-08" x2="84.6647" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="1276.66" y1="2.147e-08" x2="1276.66" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="851.665" y1="2.147e-08" x2="851.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="935.665" y1="2.147e-08" x2="935.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="425.665" y1="2.147e-08" x2="425.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="255.665" y1="2.147e-08" x2="255.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
                <line class="line__vertical" x1="595.665" y1="2.147e-08" x2="595.665" y2="851" stroke="#9AD8CB"
                    stroke-opacity="0.05" stroke-width="1.32955" />
            </svg> -->


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


    @media screen and (max-width: 600px) {

        //display: none;    the last 14 lines are hidden on mobile

        &:nth-child(n+5):nth-child(-n+14) {
            display: none;
        }


    }

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