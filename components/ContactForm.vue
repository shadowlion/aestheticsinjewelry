<template>
  <div>
    <b-form v-if="!sent" @submit.prevent="submitContactForm">
      <b-form-group label="Name:" label-for="input-name">
        <b-form-input id="input-name" v-model="form.name" required />
      </b-form-group>

      <label for="input-method">Preferred Contact Method:</label>
      <b-input-group class="pb-3">
        <b-input-group-prepend is-text>
          <b-form-radio-group
            v-model="form.method"
            name="input-method"
            :options="['Phone', 'Email']"
            required
          />
        </b-input-group-prepend>
        <b-form-input
          id="input-method"
          v-model="form.methodData"
          :placeholder="methodPlaceholder"
          required
        />
      </b-input-group>

      <b-form-group label="Message:" label-for="input-message">
        <b-form-textarea
          id="input-message"
          v-model="form.message"
          rows="3"
          required
        />
      </b-form-group>

      <button class="btn btn-primary" type="submit">Submit</button>
    </b-form>

    <p v-else>
      Thanks for your submission! We'll get back to you as soon as possible.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { db } from "../../../plugins/firebase";
// import { ContactFormMessage } from "./types";

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
  methods: {
    submitContactForm() {
      this.sent = true;
      const payload = this.form;
      // await db.collection("messages").doc().set(payload);
      return payload;
    },
  },
});
</script>
