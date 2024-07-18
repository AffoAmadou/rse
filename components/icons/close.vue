<script setup>
import gsap from "gsap"
const props = defineProps(["open"])
const svg = ref(null)



const rotate = () => {
	gsap.to(svg.value, {
		duration: 0.5,
		rotation: 0,
		ease: "power4"
	})

}

const reverseRotate = () => {
	gsap.to(svg.value, {
		duration: 0.5,
		rotation: 45,
		ease: "power4"
	})
}
</script>

<template>
	<svg ref="svg" @mouseenter="rotate" @mouseleave="reverseRotate"  class="c-icon-plus" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle class="p__circle" cx="30" cy="30" r="30" fill="#005454" />
		<path d="M30.5 18V41" stroke="white" stroke-width="1.62791" stroke-linecap="round" />
		<path d="M42 29.5L19 29.5" stroke="white" stroke-width="1.62791" stroke-linecap="round" />
	</svg>
</template>

<style lang="scss" scoped>
.c-icon-plus {
	width: 6rem;
	aspect-ratio: 1/1;
	transform: rotate(45deg);

	@media screen and (max-width: 600px) {
		width: 4.708rem;
	}
}
</style>
