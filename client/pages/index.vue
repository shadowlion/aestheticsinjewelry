<template>
  <div>
    <HomeCarousel />
    <JewelryInfo />
    <ServicesSection />
    <Modal v-if="timeLeft" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeCarousel from "@/components/Home/Carousel/index.vue";
import JewelryInfo from "@/components/Home/JewelryInfo/index.vue";
import ServicesSection from "@/components/Home/Services/index.vue";
import Modal from "@/components/Home/Modal/index.vue";

export default Vue.extend({
  components: {
    HomeCarousel,
    JewelryInfo,
    ServicesSection,
    Modal,
  },
  computed: {
    timeLeft() {
      return (
        new Date("February 13, 2021 15:00:00 EST").getTime() -
          new Date().getTime() >
        0
      );
    },
  },
});
</script>
