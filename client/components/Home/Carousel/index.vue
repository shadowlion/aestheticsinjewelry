<template>
  <b-carousel :interval="4000" controls class="container" :img-height="480">
    <b-carousel-slide :img-src="require('@/assets/carousel-1.jpg')" />
    <b-carousel-slide :img-src="require('@/assets/carousel-2.png')" />
    <b-carousel-slide :img-src="require('@/assets/carousel-3.png')" />
  </b-carousel>
</template>
