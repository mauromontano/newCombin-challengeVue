<template>
  <div>
    <component :is="main">
      <router-view></router-view>
    </component>
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  data() {
    return {
      main: "main-layout",
    };
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
});
</script>

<style></style>
