<template>
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
            M-F: 10:00am - 5:30pm
            <br />
            Sat: 11:00am - 3:00pm
            <br />
            Sun: Closed
          </address>

          <address>
            Phone: <a href="tel:5025892728">(502)589-2728</a>
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
          <contact-form></contact-form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import ContactForm from "@/components/Forms/ContactForm/index.vue";

export default Vue.extend({
  components: { ContactForm }
});
</script>
