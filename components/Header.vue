<template>
  <header class="container">
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
