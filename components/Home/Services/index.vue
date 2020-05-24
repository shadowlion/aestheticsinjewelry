<template>
  <section class="container py-5">
    <div class="row">
      <div class="col">
        <div class="card">
          <img :src="require('@/assets/service-1.png')" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Jewelry</h5>
            <p class="card-text">
              Life's special moments last forever when celebrated with a
              beautiful piece of jewelry.
            </p>
            <a href="/exceptionals">Shop Collections</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img :src="require('@/assets/service-2.png')" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Jewelry Repairs</h5>
            <p class="card-text">
              We are dedicated to maintaining the value of your prized
              possessions by keeping them in pristine condition.
            </p>
            <a href="/services">Find Your Repair</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img :src="require('@/assets/service-3.png')" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Visit Us!</h5>
            <p class="card-text">
              Serving the area's top clientele, we welcome you to come and try
              on your favorite pieces in a relaxed, friendly environment, with
              local hospitality.
            </p>
            <a href="/visit">Find Our Location</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
