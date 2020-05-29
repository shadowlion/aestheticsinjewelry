<template>
  <section class="container">
    <h1 class="text-center pb-3">Birthstones</h1>
    <article>
      <div class="row">
        <div
          v-for="(b, index) in birthstones"
          :key="index"
          class="col-md-2 mb-3"
        >
          <a :href="`/birthstones/${index + 1}`" class="text-decoration-none">
            <div class="card shadow-lg">
              <img
                :src="require(`@/assets/stone-${index + 1}.jpg`)"
                :alt="`${b.month} ${b.stone}`"
                class="card-img-top"
              />
              <h6 class="card-title text-dark text-center">
                {{ b.month }} <span class="text-muted">({{ b.stone }})</span>
              </h6>
            </div>
          </a>
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
      birthstones: [
        { month: "January", stone: "Garnet" },
        { month: "Februrary", stone: "Amethyst" },
        { month: "March", stone: "Aquamarine" },
        { month: "April", stone: "Diamond" },
        { month: "May", stone: "Emerald" },
        { month: "June", stone: "Pearl/Alexandrite" },
        { month: "July", stone: "Ruby" },
        { month: "August", stone: "Peridot" },
        { month: "September", stone: "Sapphire" },
        { month: "October", stone: "Opal/Tourmaline" },
        { month: "November", stone: "Citrine" },
        { month: "December", stone: "Blue Zirconia" }
      ]
    };
  }
});
</script>
