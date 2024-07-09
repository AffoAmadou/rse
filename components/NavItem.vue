<template>
    <button class="nav__item">
      <component  :is="currentComponent" />
      <div class="nav__item__text">{{ text }}</div>
    </button>
  </template>
  
  <script setup>
  import { computed, defineAsyncComponent } from 'vue';
  
  const props = defineProps({
    index: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      default: 'Environnement',
    },
  });
  
  // Define the components using async imports
  const components = [
    defineAsyncComponent(() => import('../components/icons/environnement.vue')),
    defineAsyncComponent(() => import('../components/icons/star.vue')),
    defineAsyncComponent(() => import('../components/icons/social.vue')),
    defineAsyncComponent(() => import('../components/icons/engagement.vue'))
  ];
  
  const currentComponent = computed(() => {
    if (props.index >= 0 && props.index < components.length) {
      return components[props.index];
    }
    // Default to the first component if index is out of bounds
    return components[0];
  });
  </script>
  
  <style scoped lang="scss">
  .nav__item {
    display: flex;
    align-items: center;
    padding: .3rem 2.052rem .328rem 1.5rem;
    border: solid 1.17px #00000015;
    border-radius: 10rem;
    gap: .5rem;
   
  }
  
 </style>