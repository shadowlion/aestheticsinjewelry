<template>
  <b-form @submit.prevent="submitContactForm">
    <b-form-group label="Name:" label-for="input-name">
      <b-form-input id="input-name" v-model="form.name" />
    </b-form-group>

    <label for="input-method">Preferred Contact Method:</label>
    <b-input-group class="pb-3">
      <b-input-group-prepend is-text>
        <b-form-radio-group
          v-model="form.method"
          name="input-method"
          :options="['Phone', 'Email']"
        />
      </b-input-group-prepend>
      <b-form-input
        id="input-method"
        v-model="form.methodData"
        :placeholder="
          form.method === 'Phone' ? '(###) ###-####' : 'something@domain.com'
        "
      />
    </b-input-group>

    <b-form-group label="Message:" label-for="input-message">
      <b-form-textarea id="input-message" v-model="form.message" rows="3" />
    </b-form-group>

    <button class="btn btn-primary" type="submit">Submit</button>
  </b-form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      form: {
        name: null,
        method: null,
        methodData: null
      }
    };
  },
  methods: {
    submitContactForm() {
      // eslint-disable-next-line
      console.log("submitted!");
    }
  }
});
</script>
