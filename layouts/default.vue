<template>
  <main>
    <base-header />
    <nuxt />
    <base-footer />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import BaseHeader from "@/components/Base/BaseHeader/index.vue";
import BaseFooter from "@/components/Base/BaseFooter/index.vue";

export default Vue.extend({
  components: {
    BaseHeader,
    BaseFooter
  }
});
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
