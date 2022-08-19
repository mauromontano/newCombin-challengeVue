<template>
  <div style="background-color: #ffffff; padding: 20px">
    <form @submit.prevent="addMember">
      <div class="mb-3">
        <label class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          required
          v-model="firstName"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          required
          v-model="lastName"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          required
          v-model="address"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">SSN (Insert 9 digits)</label>
        <input
          type="number"
          class="form-control"
          id="ssn"
          required
          v-model="ssn"
        />
      </div>
      <button type="submit" class="btn btn-dark" :disabled="formNotValid()">
        Save
      </button>
      <button type="reset" class="btn btn-dark" style="margin-left: 20px">
        Reset
      </button>
    </form>
  </div>

  <vue-basic-alert ref="alert" />
  <div id="app">
    <vue-basic-alert :duration="800" :closeIn="2300" ref="alert" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VueBasicAlert from "vue-basic-alert";

export default defineComponent({
  name: "FormHome",
  components: {
    VueBasicAlert,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      ssn: "",
    };
  },
  props: {},

  mounted() {},

  watch: {},

  methods: {
    async addMember() {
      await this.$store
        .dispatch("members/addMember", {
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          ssn: this.parseSSN(this.ssn.toString()),
        })
        .then(() => {
          this.firstName = "";
          this.lastName = "";
          this.address = "";
          this.ssn = "";
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.$refs.alert.showAlert(
              "error",
              err.response.data.message,
              "Error"
            );
            this.$store.dispatch("auth/sessionExpired");
          } else {
            this.$refs.alert.showAlert(
              "error",
              err.response.data.message,
              "Error"
            );
          }
        });
    },

    parseSSN(ssn) {
      return (
        ssn.substring(0, 3) + "-" + ssn.substring(3, 5) + "-" + ssn.substring(5)
      );
    },

    formNotValid() {
      return (
        this.firstName === "" ||
        this.lastName === "" ||
        this.address === "" ||
        this.ssn === ""
      );
    },
  },
});
</script>
