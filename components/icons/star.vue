<script setup>
import gsap from "gsap"
import { ref,onMounted } from "vue";

const icon = ref(null);
const props = defineProps({
	color: {
		type: String,
		default: "#312A89"
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
		gsap.to(icon.value, {
			rotate: 360,
			duration: 10,
			repeat: -1,
			ease: "linear",
		});

		gsap.to(icon.value, {
			scale: 1.1,
			duration: 1.5,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});
	}
})
</script>

<template>
	<svg ref="icon" :style="props.style" class="c-icon c-icon-star" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10.477 0.0622755C10.4849 0.0408835 10.5151 0.0408834 10.523 0.0622753L13.332 7.65345C13.3345 7.66018 13.3398 7.66548 13.3465 7.66797L20.9377 10.477C20.9591 10.4849 20.9591 10.5151 20.9377 10.523L13.3465 13.332C13.3398 13.3345 13.3345 13.3398 13.332 13.3465L10.523 20.9377C10.5151 20.9591 10.4849 20.9591 10.477 20.9377L7.66797 13.3465C7.66548 13.3398 7.66018 13.3345 7.65345 13.332L0.0622755 10.523C0.0408835 10.5151 0.0408834 10.4849 0.0622753 10.477L7.65345 7.66797C7.66018 7.66548 7.66548 7.66018 7.66797 7.65345L10.477 0.0622755Z"
			:fill=props.color />
	</svg>


</template>

<style lang="scss">
.c-icon-star {}
</style>
