<template>
   <div class="nav">
    <div class="nav__wrapper">
<NavItem :index=0 text="Environnement" />
<NavItem :index=1  text="Ethique"/>
<NavItem :index=2 text="Social" />
<NavItem :index=3 text="Engagement" />
    </div>

   </div>

</template>

<script setup>
	import NavItem from "./NavItem.vue";
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/mixins.scss";


.nav{
    position: fixed;
    width: 100%;
    bottom: 4.9rem;
    left: 0;
    right: 0;
    z-index: 1000;
  @extend %center;  
}

.nav__wrapper{
    padding: 1rem 1.1rem 1rem 1.1rem;
    background-color: white;
    border-radius: 10rem;
    display: flex;
    gap: 0.54rem;
   
}

</style>