<template>
  <nav
    v-if="logged()"
    class="navbar navbar-dark bg-dark row justify-content-center"
    style="margin: 0"
  >
    <a
      class="nav-link col-6 text-center"
      aria-current="page"
      href="#dashboard"
      style="color: azure"
      >Home</a
    >
    <a class="nav-link col-6 text-center" style="color: azure" href="#other"
      >Otro</a
    >
  </nav>
  <!-- Bottom bar-->
  <nav
    v-if="logged()"
    class="navbar navbar-dark bg-dark fixed-bottom justify-content-between"
  >
    <div style="color: azure; margin-left: 20px" class="">Copyright</div>
    <div class="">
      <div style="color: azure; margin-right: 20px">All rights reserved</div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  data() {
    return {};
  },
  methods: {
    logged() {
      if (
        this.signedIn &&
        this.$route.path !== "/login" &&
        this.$route.path !== "/"
      ) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapGetters("auth", ["signedIn"]),
  },
};
</script>

<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
