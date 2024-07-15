<script setup>
import gsap from "gsap"
const props = defineProps({
	color: {
		type: String,
		default: "#E52A41"
	}
	,
	style: {
		type: Object,
		default: () => ({}),
	},

	animation: {
		type: Boolean,
		default: true,
	}
})


</script>

<template>
	<svg :style="props.style" class="c-icon c-icon-engagement" width="22" height="15" viewBox="0 0 22 15" fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd"
			d="M14.6666 14.7227L22 7.3893L14.6666 0.0559079L11.0003 3.72223L7.33397 0.0559076L0.000577606 7.3893L7.33397 14.7227L11.0003 11.0564L14.6666 14.7227Z"
			:fill=props.color />
	</svg>



</template>

<style lang="scss">
.c-icon-engagement {}
</style>
