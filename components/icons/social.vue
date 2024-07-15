<script setup>
import gsap from "gsap"
import { ref, onMounted } from "vue";

const iconUp = ref(null);
const iconDown = ref(null);
const props = defineProps({
	color: {
		type: String,
		default: "#493167"
	},
	style: {
		type: Object,
		default: () => ({}),
	},
	animation: {
		type: Boolean,
		default: true,
	}
})

onMounted(() => {
	if (props.animation) {
		gsap.from([iconUp.value,iconDown.value], {
			y: "-=20",
			scale: 0.9,
			duration: 10,
			repeat: -1,
			ease: "linear",
			stagger: 0.3,
			yoyo: true,
		});

		// gsap.to(icon.value, {
		// 	scale: 1.1,
		// 	duration: 1.5,
		// 	repeat: -1,
		// 	yoyo: true,
		// 	ease: "sine.inOut",
		// });
	}
})
</script>

<template>
	<svg :style="props.style" class="c-icon c-icon-social" width="19" height="19" viewBox="0 0 19 19" fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path ref="iconUp"
			d="M0.0339279 9.04809C0.0151901 9.04809 -5.72205e-06 9.06346 5.53131e-05 9.0822C0.0176105 14.5628 4.26415 19 9.5 19C14.7358 19 18.9824 14.5628 18.9999 9.0822C19 9.06346 18.9877 9.04809 18.969 9.04809C18.5755 9.04804 14.4864 9.04761 9.5 9.04761L0.0339279 9.04809Z"
			:fill="props.color" />
		<path ref="iconDown"
			d="M0.0339279 0.00043584C0.0151901 0.000436703 -5.72205e-06 0.015809 6.67572e-05 0.0345465C0.019371 5.01548 4.26524 9.04762 9.5 9.04762C14.7348 9.04762 18.9806 5.01548 18.9999 0.034545C19 0.0158083 18.9877 0.000436145 18.969 0.000434279C18.5755 0.000395073 14.4864 0 9.5 0L0.0339279 0.00043584Z"
			:fill="props.color" />
	</svg>


</template>

<style lang="scss">
.c-icon-social {}
</style>
