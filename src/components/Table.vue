<template>
  <div style="background-color: #ffffff">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Address</th>
          <th scope="col">SSN</th>
        </tr>
      </thead>
      <tbody v-for="(member, index) in members" :key="index">
        <tr>
          <td>{{ member.firstName }}</td>
          <td>{{ member.lastName }}</td>
          <td>{{ member.address }}</td>
          <td>{{ member.ssn }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableHome",

  data() {
    return {};
  },
  props: {},

  computed: {
    ...mapState("members", ["members"]),
  },

  mounted() {},

  watch: {},

  methods: {},
});
</script>
