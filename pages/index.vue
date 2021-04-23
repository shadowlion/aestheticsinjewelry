<template>
  <div>
    <b-carousel :interval="4000" controls class="container" :img-height="480">
      <b-carousel-slide :img-src="require('@/assets/carousel-1.jpg')" />
      <b-carousel-slide :img-src="require('@/assets/carousel-2.png')" />
      <b-carousel-slide :img-src="require('@/assets/carousel-3.png')" />
    </b-carousel>
    <section class="bg-light py-5">
      <div class="container">
        <p>
          Jewelry is a beautiful way to tell someone special that you love them.
          Show Mom you’re thinking of her with an exquisite set of pearl
          earrings. Watch your best friend’s face light up when you present her
          with a trendy trendy fashion bracelet. Design your own gemstone ring
          from premium amethyst, blue topaz, emerald, opal, ruby, citrine and
          other precious stones.
        </p>
        <p>
          At Aesthetics in Jewelry, we offer one-of-a-kind jewelry that is high
          quality and unparalleled when it comes to style and affordability. Our
          intricate designs are unlike any showcased in other boutiques, and we
          feature everything from vintage pieces to classic jewelry. Luxury
          awaits you when you browse our collection. Take pride in owning an
          exquisite piece that’s made to last for a lifetime.
        </p>
        <p class="mb-0">
          Shopping for high quality jewelry has never been so simple or so
          rewarding. Contact us at <a href="tel:5025892728">(502) 589-2728</a>
          and we'll be happy to answer any questions or comments about our
          superior collection. Make the investment today.
        </p>
      </div>
    </section>
    <section class="container py-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-2 shadow-lg">
            <img
              :src="require('@/assets/service-1.png')"
              class="card-img-top"
            />
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
        <div class="col-md-4">
          <div class="card mb-2 shadow-lg">
            <img
              :src="require('@/assets/service-2.png')"
              class="card-img-top"
            />
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
        <div class="col-md-4">
          <div class="card mb-2 shadow-lg">
            <img
              :src="require('@/assets/service-3.png')"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Visit Us!</h5>
              <p class="card-text">
                Serving the area's top clientele, we welcome you to come and try
                on your favorite pieces in a relaxed, friendly environment, with
                local hospitality.
              </p>
              <a href="/visit-us">Find Our Location</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
