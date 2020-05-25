<template>
  <header class="container">
    <div class="d-none d-md-block">
      <div class="d-flex justify-content-between pt-3">
        <p class="text-muted mb-0">Let's find you some amazing jewelry!</p>
        <a href="tel:5025892728">502-589-2728</a>
      </div>
      <hr />
      <div class="d-flex justify-content-center">
        <a href="/">
          <img :src="require('@/assets/aj-logo.png')" class="img-fluid" />
        </a>
      </div>
      <div class="d-flex justify-content-around py-5">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/exceptionals">The Exceptionals</a>
        <a href="/education">Education</a>
        <a href="/services">Services</a>
        <a href="/visit">Visit Us</a>
      </div>
    </div>
    <div class="d-block d-md-none">
      <b-navbar toggleable="md">
        <b-navbar-brand href="#">Aesthetics in Jewelry</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <a href="/" class="nav-item">Home</a>
            <a href="/about" class="nav-item">About Us</a>
            <a href="/exceptionals" class="nav-item">The Exceptionals</a>
            <a href="/education" class="nav-item">Education</a>
            <a href="/services" class="nav-item">Services</a>
            <a href="/visit" class="nav-item">Visit Us</a>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>
