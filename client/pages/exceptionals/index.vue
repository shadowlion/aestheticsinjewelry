<template>
  <section class="container">
    <h1 class="text-center pb-3">The Exceptionals</h1>
    <article class="pb-4">
      <p>
        We strive to provide an extensive selection of jewelry that maintains a
        high degree of beauty, quality and workmanship no matter what price
        you're looking for. However, regardless of the price point, some jewelry
        is so remarkable that it can only be called Exceptional.
      </p>
      <div class="row">
        <div v-for="(e, index) in exceptionals" :key="index" class="col-md-4">
          <div class="card my-3 shadow-sm">
            <img
              :src="require(`@/assets/exceptional-${index + 1}.png`)"
              :alt="`exceptional_${index + 1}`"
              class="card-img-top"
            />
            <div class="card-body">
              <h6 class="card-title">{{ e.title }}</h6>
              <a :href="`/exceptionals/${index + 1}`" class="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      exceptionals: [
        { title: "Large Open Sapphire and Diamond Ring" },
        { title: "Emerald and Diamond Necklace" },
        { title: "Yellow and White Diamond Ring" },
        { title: "Round Sapphire and Diamond Ring" },
        { title: "Emerald and Diamond Ring" },
        { title: "Tri-Color Gold and Diamond Ring" }
      ]
    };
  }
});
</script>
