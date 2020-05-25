<template>
  <div>
    <home-carousel />
    <jewelry-info />
    <services-section />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeCarousel from "@/components/Home/Carousel/index.vue";
import JewelryInfo from "@/components/Home/JewelryInfo/index.vue";
import ServicesSection from "@/components/Home/Services/index.vue";

export default Vue.extend({
  components: {
    HomeCarousel,
    JewelryInfo,
    ServicesSection
  }
});
</script>
