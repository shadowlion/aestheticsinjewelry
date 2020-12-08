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
    <p>Our Holiday Hours will start Friday, November 27, 2020.</p>
    <p>
      Due to COVID-19, we are asking everyone to call the store and let us know
      what time you would like to come in to look for a Christmas gift or drop
      off and pick up repairs.
    </p>
    <p>
      Our normal hours are 10:00am to 4:00pm, Monday through Saturday, and
      12:00pm to 3:00pm Sunday.
    </p>
    <p>
      During the holidays, we're happy to be there for you after hours, but
      please schedule an appointment with us before by calling
      <a href="tel:5025892728">(502) 589-2728</a> or text Jimmy at
      <a href="tel:5025589205">(502) 558-9205</a>.
    </p>
    <button
      class="btn btn-primary float-right"
      @click="$bvModal.hide('covid-modal')"
    >
      Okay
    </button>
  </b-modal>
</template>
