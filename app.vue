<script setup>
import { ref } from 'vue';
import Header from "./components/Header.vue";
import TextReveal from "./components/TextReveal.vue";
import Nav from "./components/Nav.vue";
import Content from "./components/Content.vue";
import ContentDesktop from './components/ContentDesktop.vue';
import Footer from "./components/Footer.vue";
import { data } from "./dataFull.js";
import Signal from '~/utils/signal';
import Table from './components/Table.vue';
import Logo from './components/Logo.vue';
import Loader from "./components/Loader.vue";
import OpenCard from './components/OpenCard.vue';

const isLoading = ref(true); // Initial loading state



Signal.on(":loaderFinished", (index) => {
  isLoading.value = false;
})
</script>

<template>
  <div class="full__Content">
    <Logo />
    <Nav :data=data />
    <Table />

    <div v-if="!isLoading">
      <OpenCard />

      <div v-for="(item, index) in data" :key="index">
        <Header :index="item.header.index" :text="item.header.text" :tag="item.header.tag"
          :bgColor="item.header.bgColor" :txtColor="item.header.txtColor" :lineColor="item.header.lineColor"
          :icons="item.header.icons" :goto="item.header.menuTag" />
        <TextReveal :bg="item.textReveal.bg" :textColor="item.textReveal.textColor" :text="item.textReveal.text"
          :icons="item.textReveal.icons" :lineColor="item.textReveal.lineColor" />

        <Content v-for="(content, contentIndex) in item.contents" :key="contentIndex" :textm="content.text"
          :texts="content.texts" :cards="content.cards" :cardsColors="content.cardsColors" :image="content.image"
          :bgColor="content.bgColor" :txtColor="content.txtColor" :lineColor="content.lineColor" />

        <ContentDesktop :contents="item.contents" />
      </div>

      <Footer />
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>
