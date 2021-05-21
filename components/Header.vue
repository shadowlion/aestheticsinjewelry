<template>
  <header class="container">
    <div class="d-none d-md-block">
      <b-navbar toggleable="md" type="light" variant="transparent">
        <span class="navbar-text">Let's find you some amazing jewelry!</span>
        <b-collapse is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="mailto:info@aestheticsinjewelry.com">
              Email
            </b-nav-item>
            <b-nav-item href="tel:5025892728">Phone</b-nav-item>
            <b-nav-item href="/visit-us">Youtube</b-nav-item>
            <b-nav-item href="">Facebook</b-nav-item>
            <b-nav-item href="/services">Instagram</b-nav-item>
            <b-nav-item href="">Our Business Page</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <hr class="my-0" />
    </div>
    <b-navbar toggleable="md" type="light" variant="transparent">
      <b-navbar-brand href="/">
        <b-img :src="require('@/assets/aj-logo.png')" width="200" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/about">About Us</b-nav-item>
          <b-nav-item href="/exceptionals">Exceptionals</b-nav-item>
          <b-nav-item href="/birthstones">Birthstones</b-nav-item>
          <b-nav-item href="/services">Services</b-nav-item>
          <b-nav-item href="/visit-us">Visit Us!</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
