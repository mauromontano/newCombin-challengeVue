import createPersistedState from "vuex-persistedstate";
import auth from "./auth";
import members from "./members";

import { createStore } from "vuex";

export default createStore({
  plugins: [
    createPersistedState({
      paths: ["auth", "members"],
    }),
  ],

  modules: {
    auth,
    members,
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING,
});
