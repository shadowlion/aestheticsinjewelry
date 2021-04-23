<template>
  <div>
    <form
      v-if="!sent"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="contact_us" value="contact_us" />

      <b-form-group label="Name:" label-for="input-name">
        <b-form-input id="input-name" name="name" required />
      </b-form-group>

      <label for="input-method">Preferred Contact Method:</label>
      <b-input-group class="pb-3">
        <b-input-group-prepend is-text>
          <b-form-radio-group
            id="input-method-type"
            name="method"
            :options="['Phone', 'Email']"
            required
          />
        </b-input-group-prepend>
        <b-form-input
          id="input-method"
          name="methodData"
          :placeholder="methodPlaceholder"
          required
        />
      </b-input-group>

      <b-form-group label="Message:" label-for="input-message">
        <b-form-textarea id="input-message" name="message" rows="3" required />
      </b-form-group>

      <button class="btn btn-primary" type="submit">Submit</button>
    </form>

    <p v-else>
      Thanks for your submission! We'll get back to you as soon as possible.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      form: {
        name: null,
        method: null,
        methodData: null,
        message: null,
      },
      sent: false,
    };
  },
  computed: {
    methodPlaceholder() {
      switch (this.form.method as string | null) {
        case "Phone":
          return "Please enter a phone number";
        case "Email":
          return "Please enter an email address";
        default:
          return "Please select a method";
      }
    },
  },
  // methods: {
  //   submitContactForm(e: Event) {
  //     this.sent = true;
  //     const { name, method, methodData, message } = Object.fromEntries(
  //       new FormData(e.target)
  //     );
  //   },
  // },
});
</script>
