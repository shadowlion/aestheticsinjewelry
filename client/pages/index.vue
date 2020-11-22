<template>
  <div>
    <HomeCarousel />
    <JewelryInfo />
    <ServicesSection />
    <CovidModal />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeCarousel from "@/components/Home/Carousel/index.vue";
import JewelryInfo from "@/components/Home/JewelryInfo/index.vue";
import ServicesSection from "@/components/Home/Services/index.vue";
import CovidModal from "@/components/Home/CovidModal/index.vue";

export default Vue.extend({
  components: {
    HomeCarousel,
    JewelryInfo,
    ServicesSection,
    CovidModal,
  },
});
</script>
