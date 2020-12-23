<template>
  <b-modal
    id="covid-modal"
    title="Please Note!"
    centered
    visible
    ok-only
    no-close-on-backdrop
    no-close-on-esc
    hide-header-close
    hide-footer
  >
    <p>
      If you're looking for a gift, we have many beautiful jewelry pieces in a
      variety of price ranges.
    </p>
    <p>
      We have two more shopping days until Christmas! Please come by and see us
      or give us a call if you prefer an appointment. We are open from 10:00am
      to 4:00pm both Wednesday, December 23rd and Thursday, December 24th.
    </p>
    <p>
      During the holidays, we offer pickup and delivery services, and we're
      happy to be there for you after hours, but please schedule an appointment
      with us before by calling
      <a href="tel:5025892728">(502) 589-2728</a> or text Jimmy at
      <a href="tel:5025589205">(502) 558-9205</a>.
    </p>
    <p>Happy Holidays!</p>
    <button
      class="btn btn-primary float-right"
      @click="$bvModal.hide('covid-modal')"
    >
      Okay
    </button>
  </b-modal>
</template>
