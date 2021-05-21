<template>
  <header class="d-md-flex justify-content-center">
    <BNavbar toggleable="md" class="pb-md-4">
      <BNavbarBrand href="#">Aesthetics in Jewelry</BNavbarBrand>
      <BNavbarToggle target="nav-collapse"></BNavbarToggle>
      <BCollapse id="nav-collapse" is-nav>
        <BNavbarNav>
          <BNavItem to="/">Home</BNavItem>
          <BNavItem to="/about">About Us</BNavItem>
          <BNavItem to="/exceptionals">The Exceptionals</BNavItem>
          <BNavItem to="/birthstones">Birthstones</BNavItem>
          <BNavItem to="/services">Services</BNavItem>
          <BNavItem to="/visit-us">Visit Us</BNavItem>
          <BNavItem href="tel:5025892728">(502) 589-2728</BNavItem>
          <BNavItem href="mailto:info@aestheticsinjewelry.com">
            info@aestheticsinjewelry.com
          </BNavItem>
          <BNavItem
            href="https://www.youtube.com/channel/UCnsJN9wV4YbptB8NmlXFVaQ"
            target="_blank"
          >
            Youtube
          </BNavItem>
          <BNavItem
            href="https://www.facebook.com/aestheticsinjewelry/"
            target="_blank"
          >
            Facebook
          </BNavItem>
          <BNavItem
            href="https://www.instagram.com/aestheticsinjewel/"
            target="_blank"
          >
            Instagram
          </BNavItem>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
  </header>
</template>
