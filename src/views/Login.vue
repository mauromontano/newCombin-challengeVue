<template>
  <div
    :style="{
      backgroundImage: 'url(https://images.alphacoders.com/887/887559.jpg)',
      fullheight: '100%',
      fullwidth: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div style="height: 100vh; padding: 20px; text-align: center">
      <div class="d-flex justify-content-center" style="margin-top: 200px">
        <div
          class="card"
          style="width: 18rem; border-radius: 16px; border: 1px solid"
        >
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">New Combin</h5>
            <input
              v-model="username"
              placeholder="Username"
              style="margin-top: 10px; margin-right: 22px; width: 212px"
            />
            <div class="row" style="margin-left: 10px">
              <input
                v-if="!tooglePassword"
                type="text"
                placeholder="Contraseña"
                class="input col-10"
                v-model="password"
                style="margin-top: 10px"
              />
              <input
                v-else
                type="password"
                placeholder="Contraseña"
                class="input col-10"
                v-model="password"
                style="margin-top: 10px"
              />
              <span
                id="tooglePassword"
                @click="tooglePassword = !tooglePassword"
                class="col-2 bi bi-eye"
                style="margin-top: 14px"
              ></span>
            </div>
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-primary"
                style="margin-top: 20px; border-radius: 12px"
                @click="login"
              >
                <span v-if="!loading"> Ingresar </span>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                  v-if="loading"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  name: "Login-view",
  components: {
    VueBasicAlert,
  },
  data() {
    return {
      username: "sarah",
      password: "connor",
      loading: false,
      tooglePassword: true,
      alert: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      const data = {
        username: this.username,
        password: this.password,
      };
      this.$store
        .dispatch("auth/signIn", data)
        .then(() => {
          this.initData();
        })
        .catch((err) => {
          this.$refs.alert.showAlert(
            "error",
            err.response.data.message,
            "Error"
          );
          this.loading = false;
        })
        .finally(() => {
          this.$router.push("/dashboard");
          this.loading = false;
        });
    },

    async initData() {
      await this.$store.dispatch("members/getMembers");
    },
  },
  mounted() {},
});
</script>
