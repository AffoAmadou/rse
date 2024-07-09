<template>
    <div class="loader">
        <div class="loader__content">
            <p>Bienvenue !</p>
            <p>
                Nous allons découvrir les actions RSE
                mises en place par notre agence.
            </p>
            <p>
                Ensemble, nous analyserons comment
                ces actions concrètes contribuent
                à un avenir meilleur..
            </p>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/description.scss";
@import "../assets/scss/title.scss";
@import "../assets/scss/mixins.scss";

.loader {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: #162040;
    color: #FF90B9;
    @extend %title-60;
    @extend %center;
}

.loader__content {
  width: 97.3rem;
  letter-spacing: -.2rem;
}

</style>