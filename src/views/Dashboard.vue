<template>
  <div
    class="d-flex row bg-dark"
    style="
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 20px;
      padding: 20px;
    "
  >
    <div class="col-6 row justify-content-center" style="margin-right: 10px">
      <Form />
    </div>
    <div class="col-6 row justify-content-center" style="margin-left: 10px">
      <Table />
    </div>
  </div>
  <vue-basic-alert ref="alert" />
  <div id="app">
    <vue-basic-alert :duration="800" :closeIn="2300" ref="alert" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import IdleJs from "idle-js";
import VueBasicAlert from "vue-basic-alert";
import Table from "../components/Table.vue";
import Form from "../components/Form.vue";

export default defineComponent({
  name: "dashboard-view",
  components: {
    VueBasicAlert,
    Table,
    Form,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      ssn: "",
      members: [],
      idle: null,
      idleFlag: false,
      timer: null,
    };
  },
  methods: {
    async getMembers() {
      await this.$store
        .dispatch("members/getMembers")
        .then((resp) => {
          console.log(resp);
          this.members = resp.data;
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.$refs.alert.showAlert(
              "error",
              err.response.data.message,
              "Error"
            );
            this.$store.dispatch("auth/sessionExpired");
            this.$router.push("/");
          } else {
            this.$refs.alert.showAlert(
              "error",
              err.response.data.message,
              "Error"
            );
          }
        });
    },

    setupIdle() {
      this.idle = new IdleJs({
        idle: 120000,
        events: ["mousemove", "keydown", "mousedown", "touchstart"],
        onIdle: () => {
          this.idleFlag = true;
          this.getMembers();
        },
        onActive: () => {
          this.idleFlag = false;
        },
      });
      this.idle.start();
    },
  },
  computed: {},
  watch: {
    idleFlag(newIdle) {
      if (newIdle === false) {
        this.idle.reset();
      }
    },
  },
  mounted: function () {
    this.getMembers();
    this.setupIdle();
  },
});
</script>
