<template>
  <div>
    <header class="container">
      <div class="d-none d-md-block">
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
          <a
            href="https://www.facebook.com/aestheticsinjewelry/"
            target="_blank"
          >
            Facebook
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
      </div>
      <div class="d-block d-md-none">
        <b-navbar toggleable="md" class="pb-4">
          <b-navbar-brand href="#">Aesthetics in Jewelry</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <a href="/" class="nav-item">Home</a>
              <a href="/about" class="nav-item">About Us</a>
              <a href="/exceptionals" class="nav-item">The Exceptionals</a>
              <a href="/birthstones" class="nav-item">Birthstones</a>
              <a href="/services" class="nav-item">Services</a>
              <a href="/visit-us" class="nav-item">Visit Us</a>
              <a href="tel:5025892728">(502)589-2728</a>
              <a href="mailto:info@aestheticsinjewelry.com">
                info@aestheticsinjewelry.com
              </a>
              <a
                href="https://www.youtube.com/channel/UCnsJN9wV4YbptB8NmlXFVaQ"
                target="_blank"
              >
                Youtube
              </a>
              <a
                href="https://www.facebook.com/aestheticsinjewelry/"
                target="_blank"
              >
                Facebook
              </a>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <main>
      <Nuxt />
    </main>
    <footer class="bg-light py-5">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="col-md-6">
            <h2>Come Visit Us!</h2>
            <a
              href="https://www.google.com/maps/place/410+W+Chestnut+St,+Louisville,+KY+40202/@38.2488751,-85.7606713,17z/data=!3m1!4b1!4m5!3m4!1s0x886972afaf855dd3:0x7fda89111b43c510!8m2!3d38.2488751!4d-85.7584826"
              target="_blank"
            >
              <address>
                410 West Chestnut Street
                <br />
                Suite 634
                <br />
                Louisville, KY 40202
              </address>
            </a>

            <address>
              M-F: 10:00am - 4:00pm
              <br />
              Sat: 10:00am - 3:00pm
              <br />
              Sun: Closed
              <br />
            </address>

            <address>
              <p>
                Contact us ahead of time for an appointment so we can give you
                privacy/social distancing:
              </p>
              Phone: <a href="tel:5025892728">(502) 589-2728</a>
              <br />
              Email:
              <a href="mailto:info@aestheticsinjewelry.com">
                info@aestheticsinjewelry.com
              </a>
              <br />
              Fax: (502) 589-0209
              <br />
              <a
                href="https://www.youtube.com/channel/UCnsJN9wV4YbptB8NmlXFVaQ"
                target="_blank"
              >
                Youtube
              </a>
              <br />
              <a
                href="https://www.facebook.com/aestheticsinjewelry/"
                target="_blank"
              >
                Facebook
              </a>
            </address>
          </div>
          <div class="col-md-6">
            <h2>Or Contact Us Here:</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

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
