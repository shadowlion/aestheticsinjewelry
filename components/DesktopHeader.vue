<template>
  <header class="container d-none d-md-block">
    <div class="d-flex justify-content-between pt-3">
      <p class="text-muted mb-0">Let's find you some amazing jewelry!</p>
      <a href="tel:5025892728">(502) 589-2728</a>
      <a href="mailto:info@aestheticsinjewelry.com">
        info@aestheticsinjewelry.com
      </a>
      <a
        href="https://www.youtube.com/channel/UCnsJN9wV4YbptB8NmlXFVaQ"
        target="_blank"
      >
        Youtube
      </a>
      <a href="https://www.facebook.com/aestheticsinjewelry/" target="_blank">
        Facebook
      </a>
      <a href="https://www.instagram.com/aestheticsinjewel/" target="_blank">
        Instagram
      </a>
    </div>
    <hr />
    <div class="d-flex justify-content-center">
      <a href="/">
        <img :src="require('@/assets/aj-logo.png')" class="img-fluid" />
      </a>
    </div>
    <div class="d-flex justify-content-around py-4">
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/exceptionals">The Exceptionals</a>
      <a href="/birthstones">Birthstones</a>
      <a href="/services">Services</a>
      <a href="/visit-us">Visit Us</a>
    </div>
  </header>
</template>
