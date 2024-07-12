<script setup>
import { ref } from 'vue';
import Header from "./components/Header.vue";
import TextReveal from "./components/TextReveal.vue";
import Nav from "./components/Nav.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import { data } from "./dataFull.js";
import Signal from '~/utils/signal';
import Table from './components/Table.vue';

import Loader from "./components/Loader.vue";

const isLoading = ref(true); // Initial loading state

// setTimeout(() => {
//   isLoading.value = false;
//   console.log("isLoading", isLoading.value);
// }, 4000);

Signal.on(":loaderFinished", (index) => {
  isLoading.value = false;
})
</script>

<template>
  <div>
    <Nav />
    <Table />
    <div v-if="!isLoading">
      <div v-for="(item, index) in data" :key="index">
        <Header :index="item.header.index" :text="item.header.text" :tag="item.header.tag"
          :bgColor="item.header.bgColor" :txtColor="item.header.txtColor" :lineColor="item.header.lineColor" />
        <TextReveal :bg="item.textReveal.bg" :textColor="item.textReveal.textColor" :text="item.textReveal.text" :lineColor="item.textReveal.lineColor" />

        <Content v-for="(content, contentIndex) in item.contents" :key="contentIndex" :textm="content.text"
          :texts="content.texts" :cards="content.cards" :cardsColors="content.cardsColors" :image="content.image"
          :bgColor="content.bgColor" :txtColor="content.txtColor" />

      </div>
      <Footer />
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>


<!-- v-locomotive -->
<!-- <Header :index=0 text="Engagés <br/> pour préserver<br/> la planète"  tag="RESPONSABILITÉ ENVIRONNEMENTALE"/>
  <TextReveal bg="#9AD8CB" textColor="#005454" text="Exercitation ullamco laboris nisi ut aliquip ex ea eommodo consequat edeno lorem ipsum dolor sit amet pour etre notre terre" />
  <Content :index=0 />
  <Header :index=1 text="Engagés pour des <br/> relations éthiques<br/> et responsables"  tag="ÉTHIQUE"/>
  <TextReveal bg="#ABBFFF" textColor="#312A89" text="Exercitation ullamco laboris nisi ut aliquip ex ea eommodo consequat edeno lorem ipsum dolor sit amet pour etre notre terre" />
  <Header :index=2 text="Engagés pour<br/>nos équipes"  tag="social"/>
  <TextReveal bg="#C9BAF9" textColor="#493167" text="Exercitation ullamco laboris nisi ut aliquip ex ea eommodo consequat edeno lorem ipsum dolor sit amet pour etre notre terre" />
  <Header :index=3 text="Engagés dans<br/> nos prises<br/> de décisions"  tag="social"/>
  <TextReveal bg="#FFB4BF" textColor="#E52A41" text="Exercitation ullamco laboris nisi ut aliquip ex ea eommodo consequat edeno lorem ipsum dolor sit amet pour etre notre terre" /> -->
